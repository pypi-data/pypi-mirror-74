from oidcmsg.message import SINGLE_OPTIONAL_INT
from oidcmsg.message import SINGLE_REQUIRED_STRING
from oidcmsg.message import Message
from oidcmsg.time_util import time_sans_frac

DEFAULT_AUTHN_EXPIRES_IN = 3600

class AuthnEvent(Message):
    c_param = {
        "uid": SINGLE_REQUIRED_STRING,
        "salt": SINGLE_REQUIRED_STRING,
        "authn_info": SINGLE_REQUIRED_STRING,
        "authn_time": SINGLE_OPTIONAL_INT,
        "valid_until": SINGLE_OPTIONAL_INT,
    }

    def valid(self, now=0):
        if now:
            return self["valid_until"] > now
        else:
            return self["valid_until"] > time_sans_frac()

    def expires_in(self):
        return self["valid_until"] - time_sans_frac()


def create_authn_event(uid, salt, authn_info=None, **kwargs):
    """

    :param uid:
    :param salt:
    :param authn_info:
    :param kwargs:
    :return:
    """

    args = {"uid": uid, "salt": salt, "authn_info": authn_info}

    try:
        args["authn_time"] = int(kwargs["authn_time"])
    except KeyError:
        try:
            args["authn_time"] = int(kwargs["timestamp"])
        except KeyError:
            args["authn_time"] = time_sans_frac()

    try:
        args["valid_until"] = kwargs["valid_until"]
    except KeyError:
        _expires_in = kwargs.get("expires_in", DEFAULT_AUTHN_EXPIRES_IN)
        args["valid_until"] = args["authn_time"] + _expires_in

    return AuthnEvent(**args)
