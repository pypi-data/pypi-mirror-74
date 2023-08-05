import logging
import os

import requests
from jinja2 import Environment
from jinja2 import FileSystemLoader
from oidcmsg.context import OidcContext
from oidcmsg.oidc import IdToken

from oidcendpoint import authz
from oidcendpoint import rndstr
from oidcendpoint.id_token import IDToken
from oidcendpoint.scopes import SCOPE2CLAIMS
from oidcendpoint.scopes import STANDARD_CLAIMS
from oidcendpoint.scopes import Claims
from oidcendpoint.scopes import Scopes
from oidcendpoint.session import create_session_db
from oidcendpoint.sso_db import SSODb
from oidcendpoint.template_handler import Jinja2TemplateHandler
from oidcendpoint.user_authn.authn_context import populate_authn_broker
from oidcendpoint.util import allow_refresh_token
from oidcendpoint.util import build_endpoints
from oidcendpoint.util import get_http_params
from oidcendpoint.util import importer

logger = logging.getLogger(__name__)


def add_path(url, path):
    if url.endswith("/"):
        if path.startswith("/"):
            return "{}{}".format(url, path[1:])

        return "{}{}".format(url, path)

    if path.startswith("/"):
        return "{}{}".format(url, path)

    return "{}/{}".format(url, path)


def init_user_info(conf, cwd):
    kwargs = conf.get("kwargs", {})

    if "db_file" in kwargs:
        kwargs["db_file"] = os.path.join(cwd, kwargs["db_file"])

    if isinstance(conf["class"], str):
        return importer(conf["class"])(**kwargs)

    return conf["class"](**kwargs)


def init_service(conf, endpoint_context=None):
    kwargs = conf.get("kwargs", {})

    if endpoint_context:
        kwargs["endpoint_context"] = endpoint_context

    if isinstance(conf["class"], str):
        return importer(conf["class"])(**kwargs)

    return conf["class"](**kwargs)


def get_token_handlers(conf):
    th_args = conf.get("token_handler_args", None)
    if not th_args:
        # create 3 keys
        keydef = [
            {"type": "oct", "bytes": "24", "use": ["enc"], "kid": "code"},
            {"type": "oct", "bytes": "24", "use": ["enc"], "kid": "token"},
            {"type": "oct", "bytes": "24", "use": ["enc"], "kid": "refresh"},
        ]

        jwks_def = {
            "private_path": "private/token_jwks.json",
            "key_defs": keydef,
            "read_only": False,
        }
        th_args = {"jwks_def": jwks_def}
        for typ, tid in [("code", 600), ("token", 3600), ("refresh", 86400)]:
            th_args[typ] = {"lifetime": tid}

    return th_args


class EndpointContext(OidcContext):
    def __init__(
        self,
        conf,
        keyjar=None,
        cwd="",
        cookie_dealer=None,
        httpc=None,
        cookie_name=None,
        jwks_uri_path=None,
    ):
        OidcContext.__init__(self, conf, keyjar, entity_id=conf.get("issuer", ""))
        self.conf = conf

        # For my Dev environment
        self.sso_db = None
        self.session_db = None
        self.state_db = None
        self.cdb = None
        self.jti_db = None
        self.registration_access_token = None

        self.add_boxes(
            {
                "state": "state_db",
                "client": "cdb",
                "jti": "jti_db",
                "registration_access_token": "registration_access_token",
                "sso": "sso_db",
                "session": "session_db",
            },
            self.db_conf,
        )

        self.cwd = cwd

        # Those that use seed wants bytes but I can only store str.
        try:
            self.set("seed", conf["seed"])
        except KeyError:
            self.set("seed", rndstr(32))

        # Default values, to be changed below depending on configuration
        self.endpoint = {}
        self.issuer = ""
        self.httpc = httpc or requests
        self.jwks_uri = None
        self.sso_ttl = 14400  # 4h
        self.symkey = rndstr(24)
        self.id_token_schema = IdToken
        self.idtoken = None
        self.authn_broker = None
        self.authz = None
        self.endpoint_to_authn_method = {}
        self.cookie_dealer = cookie_dealer
        self.login_hint_lookup = None
        self.login_hint2acrs = None
        self.userinfo = None
        self.scope2claims = SCOPE2CLAIMS
        # arguments for endpoints add-ons
        self.args = {}

        for param in [
            "issuer",
            "sso_ttl",
            "symkey",
            "client_authn",
            "id_token_schema",
        ]:
            try:
                setattr(self, param, conf[param])
            except KeyError:
                pass

        self.th_args = get_token_handlers(conf)

        # self.cdb = self.get_db(db_conf, 'client')
        # self.registration_access_token = self.get_db(db_conf, 'registration_access_token')
        # self.jti_db = self.get_db(db_conf, 'jti')

        # session db
        self._sub_func = {}
        self.do_sub_func()

        # has to be after the above
        self.set_session_db()

        if cookie_name:
            self.cookie_name = cookie_name
        elif "cookie_name" in conf:
            self.cookie_name = conf["cookie_name"]
        else:
            self.cookie_name = {
                "session": "oidcop",
                "register": "oidc_op_rp",
                "session_management": "sman",
            }

        try:
            self.template_handler = conf["template_handler"]
        except KeyError:
            try:
                loader = conf["template_loader"]
            except KeyError:
                template_dir = conf["template_dir"]
                loader = Environment(
                    loader=FileSystemLoader(template_dir), autoescape=True
                )
            self.template_handler = Jinja2TemplateHandler(loader)

        self.setup = {}
        if not jwks_uri_path:
            try:
                jwks_uri_path = conf["keys"]["uri_path"]
            except KeyError:
                pass

        try:
            if self.issuer.endswith("/"):
                self.jwks_uri = "{}{}".format(self.issuer, jwks_uri_path)
            else:
                self.jwks_uri = "{}/{}".format(self.issuer, jwks_uri_path)
        except KeyError:
            self.jwks_uri = ""

        for item in [
            "cookie_dealer",
            "authz",
            "authentication",
            "id_token",
            "scope2claims",
        ]:
            _func = getattr(self, "do_{}".format(item), None)
            if _func:
                _func()

        _cap = self.do_endpoints()

        self.provider_info = self.create_providerinfo(_cap)

        _token_endp = self.endpoint.get("token")
        if _token_endp:
            _token_endp.allow_refresh = allow_refresh_token(self)

        for item in ["userinfo", "login_hint_lookup", "login_hint2acrs", "add_on"]:
            _func = getattr(self, "do_{}".format(item), None)
            if _func:
                _func()

        # which signing/encryption algorithms to use in what context
        self.jwx_def = {}

        # special type of logging
        self.events = None

        # The HTTP clients request arguments
        _cnf = conf.get("httpc_params")
        if _cnf:
            self.httpc_params = get_http_params(_cnf)
        else:  # Backward compatibility
            self.httpc_params = {"verify": conf.get("verify_ssl")}

        self.set_scopes_handler()
        self.set_claims_handler()

        # If pushed authorization is supported
        if "pushed_authorization_request_endpoint" in self.provider_info:
            self.par_db = None
            self.add_boxes({"par": "par_db"}, self.db_conf)

        # If device authentication is supported
        if "device_authorization_supported" in self.provider_info:
            self.dev_auth_db = None
            self.add_boxes({"dev_auth": "dev_auth_db"}, self.db_conf)

    def set_scopes_handler(self):
        _spec = self.conf.get("scopes_handler")
        if _spec:
            _kwargs = _spec.get("kwargs", {})
            _cls = importer(_spec["class"])(**_kwargs)
            self.scopes_handler = _cls(_kwargs)
        else:
            self.scopes_handler = Scopes()

    def set_claims_handler(self):
        _spec = self.conf.get("claims_handler")
        if _spec:
            _kwargs = _spec.get("kwargs", {})
            _cls = importer(_spec["class"])(**_kwargs)
            self.claims_handler = _cls(_kwargs)
        else:
            self.claims_handler = Claims()

    def set_session_db(self):
        self.do_session_db(SSODb(db=self.sso_db), self.session_db)
        # append userinfo db to the session db
        self.do_userinfo()
        logger.debug("Session DB: {}".format(self.sdb.__dict__))

    def do_add_on(self):
        if self.conf.get("add_on"):
            for spec in self.conf["add_on"].values():
                if isinstance(spec["function"], str):
                    _func = importer(spec["function"])
                else:
                    _func = spec["function"]
                _func(self.endpoint, **spec["kwargs"])

    def do_login_hint2acrs(self):
        _conf = self.conf.get("login_hint2acrs")

        if _conf:
            self.login_hint2acrs = init_service(_conf)
        else:
            self.login_hint2acrs = None

    def do_login_hint_lookup(self):
        _conf = self.conf.get("login_hint_lookup")
        if _conf:
            self.login_hint_lookup = init_service(_conf)
            if self.userinfo:
                self.login_hint_lookup.user_info = self.userinfo

    def do_userinfo(self):
        _conf = self.conf.get("userinfo")
        if _conf:
            if self.sdb:
                self.userinfo = init_user_info(_conf, self.cwd)
                self.sdb.userinfo = self.userinfo
            else:
                logger.warning("Cannot init_user_info if no session_db was provided.")

    def do_id_token(self):
        _conf = self.conf.get("id_token")
        if _conf:
            self.idtoken = init_service(_conf, self)
        else:
            self.idtoken = IDToken(self)

    def do_authentication(self):
        _conf = self.conf.get("authentication")
        if _conf:
            self.authn_broker = populate_authn_broker(
                _conf, self, self.template_handler
            )
        else:
            self.authn_broker = {}

        self.endpoint_to_authn_method = {}
        for method in self.authn_broker:
            try:
                self.endpoint_to_authn_method[method.action] = method
            except AttributeError:
                pass

    def do_cookie_dealer(self):
        _conf = self.conf.get("cookie_dealer")
        if _conf:
            if not self.cookie_dealer:
                self.cookie_dealer = init_service(_conf)

    def do_sub_func(self):
        _conf = self.conf.get("sub_func", {})
        for key, args in _conf.items():
            if "class" in args:
                self._sub_func[key] = init_service(args)
            elif "function" in args:
                if isinstance(args["function"], str):
                    self._sub_func[key] = importer(args["function"])
                else:
                    self._sub_func[key] = args["function"]

    def do_session_db(self, sso_db, db=None):
        self.sdb = create_session_db(
            self, self.th_args, db=db, sso_db=sso_db, sub_func=self._sub_func
        )

    def do_endpoints(self):
        self.endpoint = build_endpoints(
            self.conf["endpoint"], endpoint_context=self, issuer=self.conf["issuer"],
        )

        _cap = self.conf.get("capabilities", {})

        for endpoint, endpoint_instance in self.endpoint.items():
            if endpoint in ["webfinger", "provider_config"]:
                continue

            if endpoint_instance.endpoint_info:
                for key, val in endpoint_instance.endpoint_info.items():
                    if key not in _cap:
                        _cap[key] = val

        return _cap

    def do_authz(self):
        authz_spec = self.conf.get("authz")
        if authz_spec:
            self.authz = init_service(authz_spec, self)
        else:
            self.authz = authz.Implicit(self)

    def create_providerinfo(self, capabilities):
        """
        Dynamically create the provider info response

        :param capabilities:
        :return:
        """

        _provider_info = capabilities
        _provider_info["issuer"] = self.issuer
        _provider_info["version"] = "3.0"

        # acr_values
        if self.authn_broker:
            acr_values = self.authn_broker.get_acr_values()
            if acr_values is not None:
                _provider_info["acr_values_supported"] = acr_values

        if self.jwks_uri and self.keyjar:
            _provider_info["jwks_uri"] = self.jwks_uri

        _provider_info.update(self.idtoken.provider_info)
        if "scopes_supported" not in _provider_info:
            _provider_info["scopes_supported"] = [s for s in self.scope2claims.keys()]
        if "claims_supported" not in _provider_info:
            _provider_info["claims_supported"] = STANDARD_CLAIMS[:]

        return _provider_info
