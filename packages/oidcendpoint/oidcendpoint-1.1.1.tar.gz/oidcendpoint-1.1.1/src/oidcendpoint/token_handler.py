import base64
import hashlib
import logging
import warnings

from cryptography.fernet import Fernet
from cryptography.fernet import InvalidToken
from cryptojwt.exception import Invalid
from cryptojwt.key_jar import init_key_jar
from cryptojwt.utils import as_bytes
from cryptojwt.utils import as_unicode
from oidcmsg.time_util import time_sans_frac

from oidcendpoint import rndstr
from oidcendpoint.util import importer
from oidcendpoint.util import lv_pack
from oidcendpoint.util import lv_unpack

__author__ = "Roland Hedberg"

logger = logging.getLogger(__name__)


class ExpiredToken(Exception):
    pass


class WrongTokenType(Exception):
    pass


class AccessCodeUsed(Exception):
    pass


class UnknownToken(Exception):
    pass


class NotAllowed(Exception):
    pass


def is_expired(exp, when=0):
    if exp < 0:
        return False

    if not when:
        when = time_sans_frac()
    return when > exp


class Crypt(object):
    def __init__(self, password, mode=None):
        self.key = base64.urlsafe_b64encode(
            hashlib.sha256(password.encode("utf-8")).digest()
        )
        self.core = Fernet(self.key)

    def encrypt(self, text):
        # Padding to blocksize of AES
        text = as_bytes(text)
        if len(text) % 16:
            text += b" " * (16 - len(text) % 16)
        return self.core.encrypt(as_bytes(text))

    def decrypt(self, ciphertext):
        dec_text = self.core.decrypt(ciphertext)
        dec_text = dec_text.rstrip(b" ")
        return as_unicode(dec_text)


class Token(object):
    def __init__(self, typ, lifetime=300, **kwargs):
        self.type = typ
        self.lifetime = lifetime
        self.args = kwargs

    def __call__(self, sid):
        """
        Return a token.

        :param sid: Session id
        :return:
        """
        raise NotImplementedError()

    def key(self, **kwargs):
        """
        Return a key (the session id)
        """
        return rndstr(32)

    def info(self, token):
        """
        Return type of Token (A=Access code, T=Token, R=Refresh token) and
        the session id.

        :param token: A token
        :return: tuple of token type and session id
        """
        raise NotImplementedError()

    def is_expired(self, token, when=0):
        """
        Evaluate whether the token has expired or not

        :param token: The token
        :param when: The time against which to check the expiration
        :return: True/False
        """
        raise NotImplementedError()

    def gather_args(self, *args, **kwargs):
        return {}


class DefaultToken(Token):
    def __init__(self, password, typ="", token_type="Bearer", **kwargs):
        Token.__init__(self, typ, **kwargs)
        self.crypt = Crypt(password)
        self.token_type = token_type

    def __call__(self, sid="", ttype="", **kwargs):
        """
        Return a token.

        :param ttype: Type of token
        :param prev: Previous token, if there is one to go from
        :param sid: Session id
        :return:
        """
        if not ttype and self.type:
            ttype = self.type
        else:
            ttype = "A"

        if self.lifetime >= 0:
            exp = str(time_sans_frac() + self.lifetime)
        else:
            exp = "-1"  # Live for ever

        tmp = ""
        rnd = ""
        while rnd == tmp:  # Don't use the same random value again
            rnd = rndstr(32)  # Ultimate length multiple of 16

        return base64.b64encode(
            self.crypt.encrypt(lv_pack(rnd, ttype, sid, exp).encode())
        ).decode("utf-8")

    def key(self, user="", areq=None):
        """
        Return a key (the session id)

        :param user: User id
        :param areq: The authorization request
        :return: An ID
        """
        csum = hashlib.new("sha224")
        csum.update(rndstr(32).encode("utf-8"))
        return csum.hexdigest()  # 56 bytes long, 224 bits

    def split_token(self, token):
        try:
            plain = self.crypt.decrypt(base64.b64decode(token))
        except Exception:
            raise UnknownToken(token)
        # order: rnd, type, sid
        return lv_unpack(plain)

    def info(self, token):
        """
        Return token information.

        :param token: A token
        :return: dictionary with info about the token
        """
        _res = dict(zip(["_id", "type", "sid", "exp"], self.split_token(token)))
        if _res["type"] != self.type:
            raise WrongTokenType(_res["type"])
        else:
            _res["handler"] = self
            return _res

    def is_expired(self, token, when=0):
        _exp = self.info(token)["exp"]
        if _exp == "-1":
            return False
        else:
            exp = int(_exp)
        return is_expired(exp, when)


class TokenHandler(object):
    def __init__(
        self, access_token_handler=None, code_handler=None, refresh_token_handler=None
    ):

        self.handler = {"code": code_handler, "access_token": access_token_handler}

        self.handler_order = ["code", "access_token"]

        if refresh_token_handler:
            self.handler["refresh_token"] = refresh_token_handler
            self.handler_order.append("refresh_token")

    def __getitem__(self, typ):
        return self.handler[typ]

    def __contains__(self, item):
        return item in self.handler

    def info(self, item, order=None):
        _handler, item_info = self.get_handler(item, order)

        if _handler is None:
            logger.info("Unknown token format")
            raise KeyError(item)
        else:
            return item_info

    def sid(self, token, order=None):
        return self.info(token, order)["sid"]

    def type(self, token, order=None):
        return self.info(token, order)["type"]

    def get_handler(self, token, order=None):
        if order is None:
            order = self.handler_order

        for typ in order:
            try:
                res = self.handler[typ].info(token)
            except (KeyError, WrongTokenType, InvalidToken, UnknownToken, Invalid):
                pass
            else:
                return self.handler[typ], res

        return None, None

    def keys(self):
        return self.handler.keys()


def init_token_handler(ec, spec, typ):
    try:
        _cls = spec["class"]
    except KeyError:
        cls = DefaultToken
    else:
        cls = importer(_cls)

    _kwargs = spec.get("kwargs")
    if _kwargs is None:
        if cls != DefaultToken:
            warnings.warn(
                "Token initialisation arguments should be grouped under 'kwargs'.",
                DeprecationWarning,
                stacklevel=2,
            )
        _kwargs = spec

    return cls(typ=typ, ec=ec, **_kwargs)


def _add_passwd(keyjar, conf, kid):
    if keyjar:
        _keys = keyjar.get_encrypt_key(key_type="oct", kid=kid)
        if _keys:
            pw = as_unicode(_keys[0].k)
            if "kwargs" in conf:
                conf["kwargs"]["password"] = pw
            else:
                conf["password"] = pw


def factory(ec, code=None, token=None, refresh=None, jwks_def=None, **kwargs):
    """
    Create a token handler

    :param code:
    :param token:
    :param refresh:
    :param jwks_def:
    :return: TokenHandler instance
    """

    TTYPE = {"code": "A", "token": "T", "refresh": "R"}

    if jwks_def:
        kj = init_key_jar(**jwks_def)
    else:
        kj = None

    args = {}

    if code:
        _add_passwd(kj, code, "code")
        args["code_handler"] = init_token_handler(ec, code, TTYPE["code"])

    if token:
        _add_passwd(kj, token, "token")
        args["access_token_handler"] = init_token_handler(ec, token, TTYPE["token"])

    if refresh:
        _add_passwd(kj, refresh, "refresh")
        args["refresh_token_handler"] = init_token_handler(
            ec, refresh, TTYPE["refresh"]
        )

    return TokenHandler(**args)
