import importlib
import json
import logging
from urllib.parse import parse_qs
from urllib.parse import urlsplit
from urllib.parse import urlunsplit

from oidcendpoint.exception import OidcEndpointError

logger = logging.getLogger(__name__)

OAUTH2_NOCACHE_HEADERS = [("Pragma", "no-cache"), ("Cache-Control", "no-store")]


def modsplit(s):
    """Split importable"""
    if ":" in s:
        c = s.split(":")
        if len(c) != 2:
            raise ValueError("Syntax error: {s}")
        return c[0], c[1]
    else:
        c = s.split(".")
        if len(c) < 2:
            raise ValueError("Syntax error: {s}")
        return ".".join(c[:-1]), c[-1]


def importer(name):
    """Import by name"""
    c1, c2 = modsplit(name)
    module = importlib.import_module(c1)
    return getattr(module, c2)


def build_endpoints(conf, endpoint_context, issuer):
    """
    conf typically contains::

        'provider_config': {
            'path': '.well-known/openid-configuration',
            'class': ProviderConfiguration,
            'kwargs': {}
        },

    :param conf:
    :param endpoint_context:
    :param issuer:
    :return:
    """

    if issuer.endswith("/"):
        _url = issuer[:-1]
    else:
        _url = issuer

    endpoint = {}
    for name, spec in conf.items():
        try:
            kwargs = spec["kwargs"]
        except KeyError:
            kwargs = {}

        if isinstance(spec["class"], str):
            _instance = importer(spec["class"])(
                endpoint_context=endpoint_context, **kwargs
            )
        else:
            _instance = spec["class"](endpoint_context=endpoint_context, **kwargs)

        try:
            _path = spec["path"]
        except KeyError:
            # Should there be a default ?
            raise

        _instance.endpoint_path = _path
        _instance.full_path = "{}/{}".format(_url, _path)

        if _instance.endpoint_name:
            try:
                _instance.endpoint_info[_instance.endpoint_name] = _instance.full_path
            except TypeError:
                _instance.endpoint_info = {_instance.endpoint_name: _instance.full_path}

        endpoint[_instance.name] = _instance

    return endpoint


class JSONDictDB(object):
    def __init__(self, json_path):
        with open(json_path, "r") as f:
            self._db = json.load(f)

    def __getitem__(self, item):
        return self._db[item]

    def __contains__(self, item):
        return item in self._db


def instantiate(cls, **kwargs):
    if isinstance(cls, str):
        return importer(cls)(**kwargs)
    else:
        return cls(**kwargs)


def lv_pack(*args):
    """
    Serializes using length:value format

    :param args: values
    :return: string
    """
    s = []
    for a in args:
        s.append("{}:{}".format(len(a), a))
    return "".join(s)


def lv_unpack(txt):
    """
    Deserializes a string of the length:value format

    :param txt: The input string
    :return: a list og values
    """
    txt = txt.strip()
    res = []
    while txt:
        l, v = txt.split(":", 1)
        res.append(v[: int(l)])
        txt = v[int(l) :]
    return res


def get_http_params(config):
    _verify_ssl = config.get("verify")
    if _verify_ssl is None:
        _verify_ssl = config.get("verify_ssl")

    if _verify_ssl in [True, False]:
        params = {"verify": _verify_ssl}
    else:
        params = {}

    _cert = config.get("client_cert")
    _key = config.get("client_key")
    if _cert:
        if _key:
            params["cert"] = (_cert, _key)
        else:
            params["cert"] = _cert

    return params


def split_uri(uri):
    p = urlsplit(uri)

    if p.fragment:
        p = p._replace(fragment="")

    if p.query:
        o = p._replace(query="")
        base = urlunsplit(o)
        return base, parse_qs(p.query)
    else:
        base = urlunsplit(p)
        return base, ""


def allow_refresh_token(endpoint_context):
    # Are there a refresh_token handler
    refresh_token_handler = endpoint_context.sdb.handler.handler.get("refresh_token")

    # Is refresh_token grant type supported
    _token_supported = False
    _cap = endpoint_context.conf.get("capabilities")
    if _cap:
        if "refresh_token" in _cap["grant_types_supported"]:
            # self.allow_refresh = kwargs.get("allow_refresh", True)
            _token_supported = True

    if refresh_token_handler and _token_supported:
        return True
    elif refresh_token_handler:
        logger.warning("Refresh Token handler available but grant type not supported")
    elif _token_supported:
        logger.error(
            "refresh_token grant type to be supported but no refresh_token handler available"
        )
        raise OidcEndpointError('Grant type "refresh_token" lacks support')

    return False
