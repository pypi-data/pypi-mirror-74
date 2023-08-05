# @generated by generate_proto_mypy_stubs.py.  Do not edit!
import sys
from google.protobuf.descriptor import (
    Descriptor as google___protobuf___descriptor___Descriptor,
)

from google.protobuf.internal.containers import (
    RepeatedCompositeFieldContainer as google___protobuf___internal___containers___RepeatedCompositeFieldContainer,
)

from google.protobuf.message import (
    Message as google___protobuf___message___Message,
)

from pyatv.mrp.protobuf.ContentItem_pb2 import (
    ContentItem as pyatv___mrp___protobuf___ContentItem_pb2___ContentItem,
)

from pyatv.mrp.protobuf.PlaybackQueueContext_pb2 import (
    PlaybackQueueContext as pyatv___mrp___protobuf___PlaybackQueueContext_pb2___PlaybackQueueContext,
)

from pyatv.mrp.protobuf.PlayerPath_pb2 import (
    PlayerPath as pyatv___mrp___protobuf___PlayerPath_pb2___PlayerPath,
)

from typing import (
    Iterable as typing___Iterable,
    Optional as typing___Optional,
    Text as typing___Text,
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


class PlaybackQueue(google___protobuf___message___Message):
    DESCRIPTOR: google___protobuf___descriptor___Descriptor = ...
    location = ... # type: builtin___int
    requestId = ... # type: typing___Text
    sendingPlaybackQueueTransaction = ... # type: builtin___bool
    queueIdentifier = ... # type: typing___Text

    @property
    def contentItems(self) -> google___protobuf___internal___containers___RepeatedCompositeFieldContainer[pyatv___mrp___protobuf___ContentItem_pb2___ContentItem]: ...

    @property
    def context(self) -> pyatv___mrp___protobuf___PlaybackQueueContext_pb2___PlaybackQueueContext: ...

    @property
    def resolvedPlayerPath(self) -> pyatv___mrp___protobuf___PlayerPath_pb2___PlayerPath: ...

    def __init__(self,
        *,
        location : typing___Optional[builtin___int] = None,
        contentItems : typing___Optional[typing___Iterable[pyatv___mrp___protobuf___ContentItem_pb2___ContentItem]] = None,
        context : typing___Optional[pyatv___mrp___protobuf___PlaybackQueueContext_pb2___PlaybackQueueContext] = None,
        requestId : typing___Optional[typing___Text] = None,
        resolvedPlayerPath : typing___Optional[pyatv___mrp___protobuf___PlayerPath_pb2___PlayerPath] = None,
        sendingPlaybackQueueTransaction : typing___Optional[builtin___bool] = None,
        queueIdentifier : typing___Optional[typing___Text] = None,
        ) -> None: ...
    if sys.version_info >= (3,):
        @classmethod
        def FromString(cls, s: builtin___bytes) -> PlaybackQueue: ...
    else:
        @classmethod
        def FromString(cls, s: typing___Union[builtin___bytes, builtin___buffer, builtin___unicode]) -> PlaybackQueue: ...
    def MergeFrom(self, other_msg: google___protobuf___message___Message) -> None: ...
    def CopyFrom(self, other_msg: google___protobuf___message___Message) -> None: ...
    def HasField(self, field_name: typing_extensions___Literal[u"context",b"context",u"location",b"location",u"queueIdentifier",b"queueIdentifier",u"requestId",b"requestId",u"resolvedPlayerPath",b"resolvedPlayerPath",u"sendingPlaybackQueueTransaction",b"sendingPlaybackQueueTransaction"]) -> builtin___bool: ...
    def ClearField(self, field_name: typing_extensions___Literal[u"contentItems",b"contentItems",u"context",b"context",u"location",b"location",u"queueIdentifier",b"queueIdentifier",u"requestId",b"requestId",u"resolvedPlayerPath",b"resolvedPlayerPath",u"sendingPlaybackQueueTransaction",b"sendingPlaybackQueueTransaction"]) -> None: ...
global___PlaybackQueue = PlaybackQueue
