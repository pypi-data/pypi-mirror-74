# @generated by generate_proto_mypy_stubs.py.  Do not edit!
import sys
from google.protobuf.descriptor import (
    Descriptor as google___protobuf___descriptor___Descriptor,
)

from google.protobuf.message import (
    Message as google___protobuf___message___Message,
)

from typing import (
    Optional as typing___Optional,
    Union as typing___Union,
)

from typing_extensions import (
    Literal as typing_extensions___Literal,
)


builtin___bool = bool
builtin___bytes = bytes
builtin___float = float
builtin___int = int
if sys.version_info < (3,):
    builtin___buffer = buffer
    builtin___unicode = unicode


class VirtualTouchDeviceDescriptor(google___protobuf___message___Message):
    DESCRIPTOR: google___protobuf___descriptor___Descriptor = ...
    absolute = ... # type: builtin___bool
    integratedDisplay = ... # type: builtin___bool
    screenSizeWidth = ... # type: builtin___float
    screenSizeHeight = ... # type: builtin___float

    def __init__(self,
        *,
        absolute : typing___Optional[builtin___bool] = None,
        integratedDisplay : typing___Optional[builtin___bool] = None,
        screenSizeWidth : typing___Optional[builtin___float] = None,
        screenSizeHeight : typing___Optional[builtin___float] = None,
        ) -> None: ...
    if sys.version_info >= (3,):
        @classmethod
        def FromString(cls, s: builtin___bytes) -> VirtualTouchDeviceDescriptor: ...
    else:
        @classmethod
        def FromString(cls, s: typing___Union[builtin___bytes, builtin___buffer, builtin___unicode]) -> VirtualTouchDeviceDescriptor: ...
    def MergeFrom(self, other_msg: google___protobuf___message___Message) -> None: ...
    def CopyFrom(self, other_msg: google___protobuf___message___Message) -> None: ...
    def HasField(self, field_name: typing_extensions___Literal[u"absolute",b"absolute",u"integratedDisplay",b"integratedDisplay",u"screenSizeHeight",b"screenSizeHeight",u"screenSizeWidth",b"screenSizeWidth"]) -> builtin___bool: ...
    def ClearField(self, field_name: typing_extensions___Literal[u"absolute",b"absolute",u"integratedDisplay",b"integratedDisplay",u"screenSizeHeight",b"screenSizeHeight",u"screenSizeWidth",b"screenSizeWidth"]) -> None: ...
global___VirtualTouchDeviceDescriptor = VirtualTouchDeviceDescriptor
