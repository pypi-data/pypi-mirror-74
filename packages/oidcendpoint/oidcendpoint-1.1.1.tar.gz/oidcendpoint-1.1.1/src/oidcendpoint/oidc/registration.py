import hashlib
import hmac
import json
import logging
import time
from random import random
from urllib.parse import parse_qs
from urllib.parse import urlencode
from urllib.parse import urlparse

from cryptojwt.jws.utils import alg2keytype
from oidcmsg.exception import MessageException
from oidcmsg.oauth2 import ResponseMessage
from oidcmsg.oidc import ClientRegistrationErrorResponse
from oidcmsg.oidc import RegistrationRequest
from oidcmsg.oidc import RegistrationResponse
from oidcmsg.time_util import utc_time_sans_frac

from oidcendpoint import rndstr
from oidcendpoint import sanitize
from oidcendpoint.cookie import new_cookie
from oidcendpoint.endpoint import Endpoint
from oidcendpoint.exception import CapabilitiesMisMatch
from oidcendpoint.exception import InvalidRedirectURIError
from oidcendpoint.exception import InvalidSectorIdentifier
from oidcendpoint.util import split_uri

PREFERENCE2PROVIDER = {
    # "require_signed_request_object": "request_object_algs_supported",
    "request_object_signing_alg": "request_object_signing_alg_values_supported",
    "request_object_encryption_alg": "request_object_encryption_alg_values_supported",
    "request_object_encryption_enc": "request_object_encryption_enc_values_supported",
    "userinfo_signed_response_alg": "userinfo_signing_alg_values_supported",
    "userinfo_encrypted_response_alg": "userinfo_encryption_alg_values_supported",
    "userinfo_encrypted_response_enc": "userinfo_encryption_enc_values_supported",
    "id_token_signed_response_alg": "id_token_signing_alg_values_supported",
    "id_token_encrypted_response_alg": "id_token_encryption_alg_values_supported",
    "id_token_encrypted_response_enc": "id_token_encryption_enc_values_supported",
    "default_acr_values": "acr_values_supported",
    "subject_type": "subject_types_supported",
    "token_endpoint_auth_method": "token_endpoint_auth_methods_supported",
    "token_endpoint_auth_signing_alg": "token_endpoint_auth_signing_alg_values_supported",
    "response_types": "response_types_supported",
    "grant_types": "grant_types_supported",
}

logger = logging.getLogger(__name__)


def match_sp_sep(first, second):
    """
    Verify that all the values in 'first' appear in 'second'.
    The values can either be in the form of lists or as space separated
    items.

    :param first:
    :param second:
    :return: True/False
    """
    if isinstance(first, list):
        one = [set(v.split(" ")) for v in first]
    else:
        one = [{v} for v in first.split(" ")]

    if isinstance(second, list):
        other = [set(v.split(" ")) for v in second]
    else:
        other = [{v} for v in second.split(" ")]

    # all values in one must appear in other
    if any(rt not in other for rt in one):
        return False
    return True


def verify_url(url, urlset):
    part = urlparse(url)

    for reg, qp in urlset:
        _part = urlparse(reg)
        if part.scheme == _part.scheme and part.netloc == _part.netloc:
            return True

    return False


def secret(seed, sid):
    msg = "{}{:.6f}{}".format(time.time(), random(), sid).encode("utf-8")
    csum = hmac.new(seed, msg, hashlib.sha224)
    return csum.hexdigest()


def comb_uri(args):
    for param in ["redirect_uris", "post_logout_redirect_uris"]:
        if param not in args:
            continue

        val = []
        for base, query_dict in args[param]:
            if query_dict:
                query_string = urlencode(
                    [(key, v) for key in query_dict for v in query_dict[key]]
                )
                val.append("%s?%s" % (base, query_string))
            else:
                val.append(base)

        args[param] = val

    request_uris = args.get('request_uris')
    if request_uris:
        val = []
        for base,frag in request_uris:
            if frag:
                val.append('{}#{}'.format(base, frag))
            else:
                val.append(base)
        args['request_uris'] = val


class Registration(Endpoint):
    request_cls = RegistrationRequest
    response_cls = RegistrationResponse
    error_response = ClientRegistrationErrorResponse
    request_format = "json"
    request_placement = "body"
    response_format = "json"
    endpoint_name = "registration_endpoint"
    name = "registration"

    # default
    # response_placement = 'body'

    def match_client_request(self, request):
        _context = self.endpoint_context
        for _pref, _prov in PREFERENCE2PROVIDER.items():
            if _pref in request:
                if _pref in ["response_types", "default_acr_values"]:
                    if not match_sp_sep(request[_pref], _context.provider_info[_prov]):
                        raise CapabilitiesMisMatch(_pref)
                else:
                    if isinstance(request[_pref], str):
                        if request[_pref] not in _context.provider_info[_prov]:
                            raise CapabilitiesMisMatch(_pref)
                    else:
                        if not set(request[_pref]).issubset(
                            set(_context.provider_info[_prov])
                        ):
                            raise CapabilitiesMisMatch(_pref)

    def do_client_registration(self, request, client_id, ignore=None):
        if ignore is None:
            ignore = []
        _context = self.endpoint_context
        _cinfo = _context.cdb[client_id].copy()
        logger.debug("_cinfo: %s" % sanitize(_cinfo))

        for key, val in request.items():
            if key not in ignore:
                _cinfo[key] = val

        if "post_logout_redirect_uris" in request:
            plruri = []
            for uri in request["post_logout_redirect_uris"]:
                if urlparse(uri).fragment:
                    err = ClientRegistrationErrorResponse(
                        error="invalid_configuration_parameter",
                        error_description="post_logout_redirect_uris contains fragment",
                    )
                    return err
                plruri.append(split_uri(uri))
            _cinfo["post_logout_redirect_uris"] = plruri

        if "redirect_uris" in request:
            try:
                ruri = self.verify_redirect_uris(request)
                _cinfo["redirect_uris"] = ruri
            except InvalidRedirectURIError as e:
                return ClientRegistrationErrorResponse(
                    error="invalid_redirect_uri", error_description=str(e)
                )

        if "request_uris" in request:
            _uris = []
            for uri in request["request_uris"]:
                _up = urlparse(uri)
                if _up.query:
                    err = ClientRegistrationErrorResponse(
                        error="invalid_configuration_parameter",
                        error_description="request_uris contains query part",
                    )
                    return err
                if _up.fragment:
                    # store base and fragment
                    _uris.append(uri.split('#'))
                else:
                    _uris.append([uri, ''])
            _cinfo["request_uris"] = _uris

        if "sector_identifier_uri" in request:
            try:
                (
                    _cinfo["si_redirects"],
                    _cinfo["sector_id"],
                ) = self._verify_sector_identifier(request)
            except InvalidSectorIdentifier as err:
                return ResponseMessage(
                    error="invalid_configuration_parameter", error_description=str(err)
                )

        for item in ["policy_uri", "logo_uri", "tos_uri"]:
            if item in request:
                if verify_url(request[item], _cinfo["redirect_uris"]):
                    _cinfo[item] = request[item]
                else:
                    return ResponseMessage(
                        error="invalid_configuration_parameter",
                        error_description="%s pointed to illegal URL" % item,
                    )

        # Do I have the necessary keys
        for item in ["id_token_signed_response_alg", "userinfo_signed_response_alg"]:
            if item in request:
                if request[item] in _context.provider_info[PREFERENCE2PROVIDER[item]]:
                    ktyp = alg2keytype(request[item])
                    # do I have this ktyp and for EC type keys the curve
                    if ktyp not in ["none", "oct"]:
                        _k = []
                        for iss in ["", _context.issuer]:
                            _k.extend(
                                _context.keyjar.get_signing_key(
                                    ktyp, alg=request[item], owner=iss
                                )
                            )
                        if not _k:
                            logger.warning(
                                'Lacking support for "{}"'.format(request[item])
                            )
                            del _cinfo[item]

        t = {"jwks_uri": "", "jwks": None}

        for item in ["jwks_uri", "jwks"]:
            if item in request:
                t[item] = request[item]

        # if it can't load keys because the URL is false it will
        # just silently fail. Waiting for better times.
        _context.keyjar.load_keys(client_id, jwks_uri=t["jwks_uri"], jwks=t["jwks"])
        n_keys = 0
        for kb in _context.keyjar.get(client_id, []):
            n_keys += len(kb.keys())
        msg = "found {} keys for client_id={}"
        logger.debug(msg.format(n_keys, client_id))

        return _cinfo

    @staticmethod
    def verify_redirect_uris(registration_request):
        verified_redirect_uris = []
        client_type = registration_request.get("application_type", "web")

        must_https = False
        if client_type == "web":
            must_https = True
            if registration_request.get("response_types") == ["code"]:
                must_https = False

        for uri in registration_request["redirect_uris"]:
            _custom = False
            p = urlparse(uri)
            if client_type == "native":
                if p.scheme not in ["http", "https"]:  # Custom scheme
                    _custom = True
                elif p.scheme == "http" and p.hostname in ["localhost", "127.0.0.1"]:
                    pass
                else:
                    logger.error(
                        "InvalidRedirectURI: scheme:%s, hostname:%s",
                        p.scheme,
                        p.hostname,
                    )
                    raise InvalidRedirectURIError(
                        "Redirect_uri must use custom " "scheme or http and localhost"
                    )
            elif must_https and p.scheme != "https":
                msg = "None https redirect_uri not allowed"
                raise InvalidRedirectURIError(msg)
            elif p.scheme not in ["http", "https"]:
                # Custom scheme
                raise InvalidRedirectURIError(
                    "Custom redirect_uri not allowed for web client"
                )
            elif p.fragment:
                raise InvalidRedirectURIError("redirect_uri contains fragment")

            if _custom:  # Can not verify a custom scheme
                verified_redirect_uris.append((uri, {}))
            else:
                base, query = split_uri(uri)
                if query:
                    verified_redirect_uris.append((base, query))
                else:
                    verified_redirect_uris.append((base, {}))

        return verified_redirect_uris

    def _verify_sector_identifier(self, request):
        """
        Verify `sector_identifier_uri` is reachable and that it contains
        `redirect_uri`s.

        :param request: Provider registration request
        :return: si_redirects, sector_id
        :raises: InvalidSectorIdentifier
        """
        si_url = request["sector_identifier_uri"]
        try:
            res = self.endpoint_context.httpc.get(
                si_url, **self.endpoint_context.httpc_params
            )
            logger.debug("sector_identifier_uri => %s", sanitize(res.text))
        except Exception as err:
            logger.error(err)
            # res = None
            raise InvalidSectorIdentifier("Couldn't read from sector_identifier_uri")

        try:
            si_redirects = json.loads(res.text)
        except ValueError:
            raise InvalidSectorIdentifier(
                "Error deserializing sector_identifier_uri content"
            )

        if "redirect_uris" in request:
            logger.debug("redirect_uris: %s", request["redirect_uris"])
            for uri in request["redirect_uris"]:
                if uri not in si_redirects:
                    raise InvalidSectorIdentifier(
                        "redirect_uri missing from sector_identifiers"
                    )

        return si_redirects, si_url

    def add_registration_api(self, cinfo, client_id, context):
        _rat = rndstr(32)

        cinfo["registration_access_token"] = _rat
        cinfo["registration_client_uri"] = "{}?client_id={}".format(
            self.endpoint_context.endpoint["registration_read"].full_path, client_id
        )

        context.registration_access_token[_rat] = client_id

    def client_secret_expiration_time(self):
        """
        Returns client_secret expiration time.
        """
        if not self.kwargs.get("client_secret_expires", True):
            return 0

        _expiration_time = self.kwargs.get("client_secret_expires_in", 2592000)
        return utc_time_sans_frac() + _expiration_time

    def add_client_secret(self, cinfo, client_id, context):
        client_secret = secret(context.get("seed"), client_id)
        cinfo["client_secret"] = client_secret
        _eat = self.client_secret_expiration_time()
        if _eat:
            cinfo["client_secret_expires_at"] = _eat

        return client_secret

    def client_registration_setup(self, request, new_id=True, set_secret=True):
        try:
            request.verify()
        except (MessageException, ValueError) as err:
            logger.error('request.verify() on %s', request)
            return ResponseMessage(
                error="invalid_configuration_request", error_description="%s" % err
            )

        request.rm_blanks()
        try:
            self.match_client_request(request)
        except CapabilitiesMisMatch as err:
            return ResponseMessage(
                error="invalid_request",
                error_description="Don't support proposed %s" % err,
            )

        _context = self.endpoint_context
        if new_id:
            # create new id och secret
            client_id = rndstr(12)
            # cdb client_id MUST be unique!
            while client_id in _context.cdb:
                client_id = rndstr(12)
            if "client_id" in request:
                del request["client_id"]
        else:
            client_id = request.get("client_id")
            if not client_id:
                raise ValueError("Missing client_id")

        _cinfo = {"client_id": client_id, "client_salt": rndstr(8)}

        if "registration_read" in self.endpoint_context.endpoint:
            self.add_registration_api(_cinfo, client_id, _context)

        if new_id:
            _cinfo["client_id_issued_at"] = utc_time_sans_frac()

        client_secret = ""
        if set_secret:
            client_secret = self.add_client_secret(_cinfo, client_id, _context)

        logger.debug("Stored client info in CDB under cid={}".format(client_id))

        _context.cdb[client_id] = _cinfo
        _cinfo = self.do_client_registration(
            request,
            client_id,
            ignore=["redirect_uris", "policy_uri", "logo_uri", "tos_uri"],
        )
        if isinstance(_cinfo, ResponseMessage):
            return _cinfo

        args = dict(
            [(k, v) for k, v in _cinfo.items() if k in RegistrationResponse.c_param]
        )

        comb_uri(args)
        response = RegistrationResponse(**args)

        # Add the client_secret as a symmetric key to the key jar
        if client_secret:
            _context.keyjar.add_symmetric(client_id, str(client_secret))

        logger.debug("Stored updated client info in CDB under cid={}".format(client_id))
        logger.debug("ClientInfo: {}".format(_cinfo))
        _context.cdb[client_id] = _cinfo

        # Not all databases can be sync'ed
        if hasattr(_context.cdb, "sync") and callable(_context.cdb.sync):
            _context.cdb.sync()

        msg = "registration_response: {}"
        logger.info(msg.format(sanitize(response.to_dict())))

        return response

    def process_request(self, request=None, new_id=True, set_secret=True, **kwargs):
        try:
            reg_resp = self.client_registration_setup(request, new_id, set_secret)
        except Exception as err:
            logger.error('client_registration_setup: %s', request)
            return ResponseMessage(
                error="invalid_configuration_request", error_description="%s" % err
            )

        if "error" in reg_resp:
            return reg_resp
        else:
            _cookie = new_cookie(
                self.endpoint_context,
                cookie_name=self.endpoint_context.cookie_name["register"],
                client_id=reg_resp["client_id"],
            )

            return {"response_args": reg_resp, "cookie": _cookie}
