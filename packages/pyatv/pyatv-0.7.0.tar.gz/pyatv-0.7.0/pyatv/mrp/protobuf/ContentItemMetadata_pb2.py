# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pyatv/mrp/protobuf/ContentItemMetadata.proto

from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='pyatv/mrp/protobuf/ContentItemMetadata.proto',
  package='',
  syntax='proto2',
  serialized_options=None,
  serialized_pb=b'\n,pyatv/mrp/protobuf/ContentItemMetadata.proto\"\xce\x11\n\x13\x43ontentItemMetadata\x12\r\n\x05title\x18\x01 \x01(\t\x12\x10\n\x08subtitle\x18\x02 \x01(\t\x12\x13\n\x0bisContainer\x18\x03 \x01(\x08\x12\x12\n\nisPlayable\x18\x04 \x01(\x08\x12\x18\n\x10playbackProgress\x18\x05 \x01(\x02\x12\x11\n\talbumName\x18\x06 \x01(\t\x12\x17\n\x0ftrackArtistName\x18\x07 \x01(\t\x12\x17\n\x0f\x61lbumArtistName\x18\x08 \x01(\t\x12\x14\n\x0c\x64irectorName\x18\t \x01(\t\x12\x14\n\x0cseasonNumber\x18\n \x01(\x05\x12\x15\n\repisodeNumber\x18\x0b \x01(\x05\x12\x13\n\x0breleaseDate\x18\x0c \x01(\x01\x12\x11\n\tplayCount\x18\r \x01(\x05\x12\x10\n\x08\x64uration\x18\x0e \x01(\x01\x12\x1e\n\x16localizedContentRating\x18\x0f \x01(\t\x12\x16\n\x0eisExplicitItem\x18\x10 \x01(\x08\x12\x14\n\x0cplaylistType\x18\x11 \x01(\x05\x12\x18\n\x10radioStationType\x18\x12 \x01(\x05\x12\x18\n\x10\x61rtworkAvailable\x18\x13 \x01(\x08\x12\x15\n\rinfoAvailable\x18\x15 \x01(\x08\x12 \n\x18languageOptionsAvailable\x18\x16 \x01(\x08\x12\x18\n\x10numberOfSections\x18\x17 \x01(\x05\x12\x17\n\x0flyricsAvailable\x18\x18 \x01(\x08\x12\x19\n\x11\x65\x64itingStyleFlags\x18\x19 \x01(\x05\x12\x1a\n\x12isStreamingContent\x18\x1a \x01(\x08\x12\x1a\n\x12isCurrentlyPlaying\x18\x1b \x01(\x08\x12\x1c\n\x14\x63ollectionIdentifier\x18\x1c \x01(\t\x12\x19\n\x11profileIdentifier\x18\x1d \x01(\t\x12\x11\n\tstartTime\x18\x1e \x01(\x01\x12\x17\n\x0f\x61rtworkMIMEType\x18\x1f \x01(\t\x12\x16\n\x0e\x61ssetURLString\x18  \x01(\t\x12\x10\n\x08\x63omposer\x18! \x01(\t\x12\x12\n\ndiscNumber\x18\" \x01(\x05\x12\x13\n\x0b\x65lapsedTime\x18# \x01(\x01\x12\r\n\x05genre\x18$ \x01(\t\x12\x14\n\x0cisAlwaysLive\x18% \x01(\x08\x12\x14\n\x0cplaybackRate\x18\' \x01(\x02\x12\x14\n\x0c\x63hapterCount\x18( \x01(\x05\x12\x16\n\x0etotalDiscCount\x18) \x01(\x05\x12\x17\n\x0ftotalTrackCount\x18* \x01(\x05\x12\x13\n\x0btrackNumber\x18+ \x01(\x05\x12\x19\n\x11\x63ontentIdentifier\x18, \x01(\t\x12\x12\n\nisSharable\x18. \x01(\x08\x12\x0f\n\x07isLiked\x18\x30 \x01(\x08\x12\x14\n\x0cisInWishList\x18\x31 \x01(\x08\x12\x1e\n\x16radioStationIdentifier\x18\x32 \x01(\x03\x12\x18\n\x10radioStationName\x18\x34 \x01(\t\x12\x1a\n\x12radioStationString\x18\x35 \x01(\t\x12\x1d\n\x15iTunesStoreIdentifier\x18\x36 \x01(\x03\x12)\n!iTunesStoreSubscriptionIdentifier\x18\x37 \x01(\x03\x12#\n\x1biTunesStoreArtistIdentifier\x18\x38 \x01(\x03\x12\"\n\x1aiTunesStoreAlbumIdentifier\x18\x39 \x01(\x03\x12\x18\n\x10purchaseInfoData\x18: \x01(\x0c\x12\x1b\n\x13\x64\x65\x66\x61ultPlaybackRate\x18; \x01(\x02\x12\x15\n\rdownloadState\x18< \x01(\x05\x12\x18\n\x10\x64ownloadProgress\x18= \x01(\x02\x12\x16\n\x0e\x61ppMetricsData\x18> \x01(\x0c\x12\x12\n\nseriesName\x18? \x01(\t\x12\x31\n\tmediaType\x18@ \x01(\x0e\x32\x1e.ContentItemMetadata.MediaType\x12\x37\n\x0cmediaSubType\x18\x41 \x01(\x0e\x32!.ContentItemMetadata.MediaSubType\x12\x1a\n\x12nowPlayingInfoData\x18\x43 \x01(\x0c\x12\x14\n\x0cuserInfoData\x18\x44 \x01(\x0c\x12\x13\n\x0bisSteerable\x18\x45 \x01(\x08\x12\x12\n\nartworkURL\x18\x46 \x01(\t\x12\x11\n\tlyricsURL\x18G \x01(\t\x12\"\n\x1a\x64\x65viceSpecificUserInfoData\x18H \x01(\x0c\x12\x1a\n\x12\x63ollectionInfoData\x18I \x01(\x0c\x12\x1c\n\x14\x65lapsedTimeTimestamp\x18J \x01(\x01\x12\x19\n\x11inferredTimestamp\x18K \x01(\x01\x12\x19\n\x11serviceIdentifier\x18L \x01(\t\x12\x18\n\x10\x61rtworkDataWidth\x18M \x01(\x05\x12\x19\n\x11\x61rtworkDataHeight\x18N \x01(\x05\x12\x1f\n\x17\x63urrentPlaybackDateData\x18O \x01(\x0c\x12\x19\n\x11\x61rtworkIdentifier\x18P \x01(\t\x12\x11\n\tisLoading\x18Q \x01(\x08\x12\x1f\n\x17\x61rtworkURLTemplatesData\x18R \x01(\x0c\x12\x1e\n\x16legacyUniqueIdentifier\x18S \x01(\x03\x12\x13\n\x0b\x65pisodeType\x18T \x01(\x05\x12\x16\n\x0e\x61rtworkFileURL\x18U \x01(\t\x12\x17\n\x0f\x62randIdentifier\x18V \x01(\t\x12\x1f\n\x17localizedDurationString\x18W \x01(\t\"7\n\tMediaType\x12\x14\n\x10UnknownMediaType\x10\x00\x12\t\n\x05\x41udio\x10\x01\x12\t\n\x05Video\x10\x02\"[\n\x0cMediaSubType\x12\x17\n\x13UnknownMediaSubType\x10\x00\x12\t\n\x05Music\x10\x01\x12\x0b\n\x07Podcast\x10\x04\x12\r\n\tAudioBook\x10\x05\x12\x0b\n\x07ITunesU\x10\x06'
)



_CONTENTITEMMETADATA_MEDIATYPE = _descriptor.EnumDescriptor(
  name='MediaType',
  full_name='ContentItemMetadata.MediaType',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='UnknownMediaType', index=0, number=0,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='Audio', index=1, number=1,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='Video', index=2, number=2,
      serialized_options=None,
      type=None),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=2155,
  serialized_end=2210,
)
_sym_db.RegisterEnumDescriptor(_CONTENTITEMMETADATA_MEDIATYPE)

_CONTENTITEMMETADATA_MEDIASUBTYPE = _descriptor.EnumDescriptor(
  name='MediaSubType',
  full_name='ContentItemMetadata.MediaSubType',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='UnknownMediaSubType', index=0, number=0,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='Music', index=1, number=1,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='Podcast', index=2, number=4,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='AudioBook', index=3, number=5,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='ITunesU', index=4, number=6,
      serialized_options=None,
      type=None),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=2212,
  serialized_end=2303,
)
_sym_db.RegisterEnumDescriptor(_CONTENTITEMMETADATA_MEDIASUBTYPE)


_CONTENTITEMMETADATA = _descriptor.Descriptor(
  name='ContentItemMetadata',
  full_name='ContentItemMetadata',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='title', full_name='ContentItemMetadata.title', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='subtitle', full_name='ContentItemMetadata.subtitle', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='isContainer', full_name='ContentItemMetadata.isContainer', index=2,
      number=3, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='isPlayable', full_name='ContentItemMetadata.isPlayable', index=3,
      number=4, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='playbackProgress', full_name='ContentItemMetadata.playbackProgress', index=4,
      number=5, type=2, cpp_type=6, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='albumName', full_name='ContentItemMetadata.albumName', index=5,
      number=6, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='trackArtistName', full_name='ContentItemMetadata.trackArtistName', index=6,
      number=7, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='albumArtistName', full_name='ContentItemMetadata.albumArtistName', index=7,
      number=8, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='directorName', full_name='ContentItemMetadata.directorName', index=8,
      number=9, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='seasonNumber', full_name='ContentItemMetadata.seasonNumber', index=9,
      number=10, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='episodeNumber', full_name='ContentItemMetadata.episodeNumber', index=10,
      number=11, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='releaseDate', full_name='ContentItemMetadata.releaseDate', index=11,
      number=12, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='playCount', full_name='ContentItemMetadata.playCount', index=12,
      number=13, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='duration', full_name='ContentItemMetadata.duration', index=13,
      number=14, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='localizedContentRating', full_name='ContentItemMetadata.localizedContentRating', index=14,
      number=15, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='isExplicitItem', full_name='ContentItemMetadata.isExplicitItem', index=15,
      number=16, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='playlistType', full_name='ContentItemMetadata.playlistType', index=16,
      number=17, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='radioStationType', full_name='ContentItemMetadata.radioStationType', index=17,
      number=18, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='artworkAvailable', full_name='ContentItemMetadata.artworkAvailable', index=18,
      number=19, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='infoAvailable', full_name='ContentItemMetadata.infoAvailable', index=19,
      number=21, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='languageOptionsAvailable', full_name='ContentItemMetadata.languageOptionsAvailable', index=20,
      number=22, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='numberOfSections', full_name='ContentItemMetadata.numberOfSections', index=21,
      number=23, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='lyricsAvailable', full_name='ContentItemMetadata.lyricsAvailable', index=22,
      number=24, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='editingStyleFlags', full_name='ContentItemMetadata.editingStyleFlags', index=23,
      number=25, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='isStreamingContent', full_name='ContentItemMetadata.isStreamingContent', index=24,
      number=26, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='isCurrentlyPlaying', full_name='ContentItemMetadata.isCurrentlyPlaying', index=25,
      number=27, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='collectionIdentifier', full_name='ContentItemMetadata.collectionIdentifier', index=26,
      number=28, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='profileIdentifier', full_name='ContentItemMetadata.profileIdentifier', index=27,
      number=29, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='startTime', full_name='ContentItemMetadata.startTime', index=28,
      number=30, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='artworkMIMEType', full_name='ContentItemMetadata.artworkMIMEType', index=29,
      number=31, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='assetURLString', full_name='ContentItemMetadata.assetURLString', index=30,
      number=32, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='composer', full_name='ContentItemMetadata.composer', index=31,
      number=33, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='discNumber', full_name='ContentItemMetadata.discNumber', index=32,
      number=34, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='elapsedTime', full_name='ContentItemMetadata.elapsedTime', index=33,
      number=35, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='genre', full_name='ContentItemMetadata.genre', index=34,
      number=36, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='isAlwaysLive', full_name='ContentItemMetadata.isAlwaysLive', index=35,
      number=37, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='playbackRate', full_name='ContentItemMetadata.playbackRate', index=36,
      number=39, type=2, cpp_type=6, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='chapterCount', full_name='ContentItemMetadata.chapterCount', index=37,
      number=40, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='totalDiscCount', full_name='ContentItemMetadata.totalDiscCount', index=38,
      number=41, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='totalTrackCount', full_name='ContentItemMetadata.totalTrackCount', index=39,
      number=42, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='trackNumber', full_name='ContentItemMetadata.trackNumber', index=40,
      number=43, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='contentIdentifier', full_name='ContentItemMetadata.contentIdentifier', index=41,
      number=44, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='isSharable', full_name='ContentItemMetadata.isSharable', index=42,
      number=46, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='isLiked', full_name='ContentItemMetadata.isLiked', index=43,
      number=48, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='isInWishList', full_name='ContentItemMetadata.isInWishList', index=44,
      number=49, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='radioStationIdentifier', full_name='ContentItemMetadata.radioStationIdentifier', index=45,
      number=50, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='radioStationName', full_name='ContentItemMetadata.radioStationName', index=46,
      number=52, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='radioStationString', full_name='ContentItemMetadata.radioStationString', index=47,
      number=53, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='iTunesStoreIdentifier', full_name='ContentItemMetadata.iTunesStoreIdentifier', index=48,
      number=54, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='iTunesStoreSubscriptionIdentifier', full_name='ContentItemMetadata.iTunesStoreSubscriptionIdentifier', index=49,
      number=55, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='iTunesStoreArtistIdentifier', full_name='ContentItemMetadata.iTunesStoreArtistIdentifier', index=50,
      number=56, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='iTunesStoreAlbumIdentifier', full_name='ContentItemMetadata.iTunesStoreAlbumIdentifier', index=51,
      number=57, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='purchaseInfoData', full_name='ContentItemMetadata.purchaseInfoData', index=52,
      number=58, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=b"",
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='defaultPlaybackRate', full_name='ContentItemMetadata.defaultPlaybackRate', index=53,
      number=59, type=2, cpp_type=6, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='downloadState', full_name='ContentItemMetadata.downloadState', index=54,
      number=60, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='downloadProgress', full_name='ContentItemMetadata.downloadProgress', index=55,
      number=61, type=2, cpp_type=6, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='appMetricsData', full_name='ContentItemMetadata.appMetricsData', index=56,
      number=62, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=b"",
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='seriesName', full_name='ContentItemMetadata.seriesName', index=57,
      number=63, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='mediaType', full_name='ContentItemMetadata.mediaType', index=58,
      number=64, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='mediaSubType', full_name='ContentItemMetadata.mediaSubType', index=59,
      number=65, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='nowPlayingInfoData', full_name='ContentItemMetadata.nowPlayingInfoData', index=60,
      number=67, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=b"",
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='userInfoData', full_name='ContentItemMetadata.userInfoData', index=61,
      number=68, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=b"",
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='isSteerable', full_name='ContentItemMetadata.isSteerable', index=62,
      number=69, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='artworkURL', full_name='ContentItemMetadata.artworkURL', index=63,
      number=70, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='lyricsURL', full_name='ContentItemMetadata.lyricsURL', index=64,
      number=71, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='deviceSpecificUserInfoData', full_name='ContentItemMetadata.deviceSpecificUserInfoData', index=65,
      number=72, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=b"",
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='collectionInfoData', full_name='ContentItemMetadata.collectionInfoData', index=66,
      number=73, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=b"",
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='elapsedTimeTimestamp', full_name='ContentItemMetadata.elapsedTimeTimestamp', index=67,
      number=74, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='inferredTimestamp', full_name='ContentItemMetadata.inferredTimestamp', index=68,
      number=75, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='serviceIdentifier', full_name='ContentItemMetadata.serviceIdentifier', index=69,
      number=76, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='artworkDataWidth', full_name='ContentItemMetadata.artworkDataWidth', index=70,
      number=77, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='artworkDataHeight', full_name='ContentItemMetadata.artworkDataHeight', index=71,
      number=78, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='currentPlaybackDateData', full_name='ContentItemMetadata.currentPlaybackDateData', index=72,
      number=79, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=b"",
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='artworkIdentifier', full_name='ContentItemMetadata.artworkIdentifier', index=73,
      number=80, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='isLoading', full_name='ContentItemMetadata.isLoading', index=74,
      number=81, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='artworkURLTemplatesData', full_name='ContentItemMetadata.artworkURLTemplatesData', index=75,
      number=82, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=b"",
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='legacyUniqueIdentifier', full_name='ContentItemMetadata.legacyUniqueIdentifier', index=76,
      number=83, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='episodeType', full_name='ContentItemMetadata.episodeType', index=77,
      number=84, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='artworkFileURL', full_name='ContentItemMetadata.artworkFileURL', index=78,
      number=85, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='brandIdentifier', full_name='ContentItemMetadata.brandIdentifier', index=79,
      number=86, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='localizedDurationString', full_name='ContentItemMetadata.localizedDurationString', index=80,
      number=87, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
    _CONTENTITEMMETADATA_MEDIATYPE,
    _CONTENTITEMMETADATA_MEDIASUBTYPE,
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto2',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=49,
  serialized_end=2303,
)

_CONTENTITEMMETADATA.fields_by_name['mediaType'].enum_type = _CONTENTITEMMETADATA_MEDIATYPE
_CONTENTITEMMETADATA.fields_by_name['mediaSubType'].enum_type = _CONTENTITEMMETADATA_MEDIASUBTYPE
_CONTENTITEMMETADATA_MEDIATYPE.containing_type = _CONTENTITEMMETADATA
_CONTENTITEMMETADATA_MEDIASUBTYPE.containing_type = _CONTENTITEMMETADATA
DESCRIPTOR.message_types_by_name['ContentItemMetadata'] = _CONTENTITEMMETADATA
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

ContentItemMetadata = _reflection.GeneratedProtocolMessageType('ContentItemMetadata', (_message.Message,), {
  'DESCRIPTOR' : _CONTENTITEMMETADATA,
  '__module__' : 'pyatv.mrp.protobuf.ContentItemMetadata_pb2'
  # @@protoc_insertion_point(class_scope:ContentItemMetadata)
  })
_sym_db.RegisterMessage(ContentItemMetadata)


# @@protoc_insertion_point(module_scope)
