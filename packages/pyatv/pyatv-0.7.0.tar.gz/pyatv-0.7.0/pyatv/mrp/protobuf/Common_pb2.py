# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pyatv/mrp/protobuf/Common.proto

from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='pyatv/mrp/protobuf/Common.proto',
  package='',
  syntax='proto2',
  serialized_options=None,
  serialized_pb=b'\n\x1fpyatv/mrp/protobuf/Common.proto\"<\n\nRepeatMode\".\n\x04\x45num\x12\x0b\n\x07Unknown\x10\x00\x12\x07\n\x03Off\x10\x01\x12\x07\n\x03One\x10\x02\x12\x07\n\x03\x41ll\x10\x03\"B\n\x0bShuffleMode\"3\n\x04\x45num\x12\x0b\n\x07Unknown\x10\x00\x12\x07\n\x03Off\x10\x01\x12\n\n\x06\x41lbums\x10\x02\x12\t\n\x05Songs\x10\x03\"\x89\x01\n\x0b\x44\x65viceClass\"z\n\x04\x45num\x12\x0b\n\x07Invalid\x10\x00\x12\n\n\x06iPhone\x10\x01\x12\x08\n\x04iPod\x10\x02\x12\x08\n\x04iPad\x10\x03\x12\x0b\n\x07\x41ppleTV\x10\x04\x12\t\n\x05iFPGA\x10\x05\x12\t\n\x05Watch\x10\x06\x12\r\n\tAccessory\x10\x07\x12\n\n\x06\x42ridge\x10\x08\x12\x07\n\x03Mac\x10\t\"b\n\nDeviceType\"T\n\x04\x45num\x12\x0b\n\x07Unknown\x10\x00\x12\x0b\n\x07\x41irPlay\x10\x01\x12\r\n\tBluetooth\x10\x02\x12\x0b\n\x07\x43\x61rPlay\x10\x03\x12\x0b\n\x07\x42uiltIn\x10\x04\x12\t\n\x05Wired\x10\x05\"\xca\x01\n\rDeviceSubType\"\xb8\x01\n\x04\x45num\x12\x0b\n\x07\x44\x65\x66\x61ult\x10\x00\x12\x0b\n\x07Speaker\x10\x01\x12\x0e\n\nHeadphones\x10\x02\x12\x0b\n\x07Headset\x10\x03\x12\x0c\n\x08Receiver\x10\x04\x12\x0b\n\x07LineOut\x10\x05\x12\x07\n\x03USB\x10\x06\x12\x0f\n\x0b\x44isplayPort\x10\x07\x12\x08\n\x04HDMI\x10\x08\x12\r\n\tLowEnergy\x10\t\x12\t\n\x05SPDIF\x10\n\x12\x06\n\x02TV\x10\x0b\x12\x0b\n\x07HomePod\x10\x0c\x12\x0b\n\x07\x41ppleTV\x10\r'
)



_REPEATMODE_ENUM = _descriptor.EnumDescriptor(
  name='Enum',
  full_name='RepeatMode.Enum',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='Unknown', index=0, number=0,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='Off', index=1, number=1,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='One', index=2, number=2,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='All', index=3, number=3,
      serialized_options=None,
      type=None),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=49,
  serialized_end=95,
)
_sym_db.RegisterEnumDescriptor(_REPEATMODE_ENUM)

_SHUFFLEMODE_ENUM = _descriptor.EnumDescriptor(
  name='Enum',
  full_name='ShuffleMode.Enum',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='Unknown', index=0, number=0,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='Off', index=1, number=1,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='Albums', index=2, number=2,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='Songs', index=3, number=3,
      serialized_options=None,
      type=None),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=112,
  serialized_end=163,
)
_sym_db.RegisterEnumDescriptor(_SHUFFLEMODE_ENUM)

_DEVICECLASS_ENUM = _descriptor.EnumDescriptor(
  name='Enum',
  full_name='DeviceClass.Enum',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='Invalid', index=0, number=0,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='iPhone', index=1, number=1,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='iPod', index=2, number=2,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='iPad', index=3, number=3,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='AppleTV', index=4, number=4,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='iFPGA', index=5, number=5,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='Watch', index=6, number=6,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='Accessory', index=7, number=7,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='Bridge', index=8, number=8,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='Mac', index=9, number=9,
      serialized_options=None,
      type=None),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=181,
  serialized_end=303,
)
_sym_db.RegisterEnumDescriptor(_DEVICECLASS_ENUM)

_DEVICETYPE_ENUM = _descriptor.EnumDescriptor(
  name='Enum',
  full_name='DeviceType.Enum',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='Unknown', index=0, number=0,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='AirPlay', index=1, number=1,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='Bluetooth', index=2, number=2,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CarPlay', index=3, number=3,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='BuiltIn', index=4, number=4,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='Wired', index=5, number=5,
      serialized_options=None,
      type=None),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=319,
  serialized_end=403,
)
_sym_db.RegisterEnumDescriptor(_DEVICETYPE_ENUM)

_DEVICESUBTYPE_ENUM = _descriptor.EnumDescriptor(
  name='Enum',
  full_name='DeviceSubType.Enum',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='Default', index=0, number=0,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='Speaker', index=1, number=1,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='Headphones', index=2, number=2,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='Headset', index=3, number=3,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='Receiver', index=4, number=4,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='LineOut', index=5, number=5,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='USB', index=6, number=6,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='DisplayPort', index=7, number=7,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='HDMI', index=8, number=8,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='LowEnergy', index=9, number=9,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='SPDIF', index=10, number=10,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='TV', index=11, number=11,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='HomePod', index=12, number=12,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='AppleTV', index=13, number=13,
      serialized_options=None,
      type=None),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=424,
  serialized_end=608,
)
_sym_db.RegisterEnumDescriptor(_DEVICESUBTYPE_ENUM)


_REPEATMODE = _descriptor.Descriptor(
  name='RepeatMode',
  full_name='RepeatMode',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
    _REPEATMODE_ENUM,
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto2',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=35,
  serialized_end=95,
)


_SHUFFLEMODE = _descriptor.Descriptor(
  name='ShuffleMode',
  full_name='ShuffleMode',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
    _SHUFFLEMODE_ENUM,
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto2',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=97,
  serialized_end=163,
)


_DEVICECLASS = _descriptor.Descriptor(
  name='DeviceClass',
  full_name='DeviceClass',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
    _DEVICECLASS_ENUM,
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto2',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=166,
  serialized_end=303,
)


_DEVICETYPE = _descriptor.Descriptor(
  name='DeviceType',
  full_name='DeviceType',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
    _DEVICETYPE_ENUM,
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto2',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=305,
  serialized_end=403,
)


_DEVICESUBTYPE = _descriptor.Descriptor(
  name='DeviceSubType',
  full_name='DeviceSubType',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
    _DEVICESUBTYPE_ENUM,
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto2',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=406,
  serialized_end=608,
)

_REPEATMODE_ENUM.containing_type = _REPEATMODE
_SHUFFLEMODE_ENUM.containing_type = _SHUFFLEMODE
_DEVICECLASS_ENUM.containing_type = _DEVICECLASS
_DEVICETYPE_ENUM.containing_type = _DEVICETYPE
_DEVICESUBTYPE_ENUM.containing_type = _DEVICESUBTYPE
DESCRIPTOR.message_types_by_name['RepeatMode'] = _REPEATMODE
DESCRIPTOR.message_types_by_name['ShuffleMode'] = _SHUFFLEMODE
DESCRIPTOR.message_types_by_name['DeviceClass'] = _DEVICECLASS
DESCRIPTOR.message_types_by_name['DeviceType'] = _DEVICETYPE
DESCRIPTOR.message_types_by_name['DeviceSubType'] = _DEVICESUBTYPE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

RepeatMode = _reflection.GeneratedProtocolMessageType('RepeatMode', (_message.Message,), {
  'DESCRIPTOR' : _REPEATMODE,
  '__module__' : 'pyatv.mrp.protobuf.Common_pb2'
  # @@protoc_insertion_point(class_scope:RepeatMode)
  })
_sym_db.RegisterMessage(RepeatMode)

ShuffleMode = _reflection.GeneratedProtocolMessageType('ShuffleMode', (_message.Message,), {
  'DESCRIPTOR' : _SHUFFLEMODE,
  '__module__' : 'pyatv.mrp.protobuf.Common_pb2'
  # @@protoc_insertion_point(class_scope:ShuffleMode)
  })
_sym_db.RegisterMessage(ShuffleMode)

DeviceClass = _reflection.GeneratedProtocolMessageType('DeviceClass', (_message.Message,), {
  'DESCRIPTOR' : _DEVICECLASS,
  '__module__' : 'pyatv.mrp.protobuf.Common_pb2'
  # @@protoc_insertion_point(class_scope:DeviceClass)
  })
_sym_db.RegisterMessage(DeviceClass)

DeviceType = _reflection.GeneratedProtocolMessageType('DeviceType', (_message.Message,), {
  'DESCRIPTOR' : _DEVICETYPE,
  '__module__' : 'pyatv.mrp.protobuf.Common_pb2'
  # @@protoc_insertion_point(class_scope:DeviceType)
  })
_sym_db.RegisterMessage(DeviceType)

DeviceSubType = _reflection.GeneratedProtocolMessageType('DeviceSubType', (_message.Message,), {
  'DESCRIPTOR' : _DEVICESUBTYPE,
  '__module__' : 'pyatv.mrp.protobuf.Common_pb2'
  # @@protoc_insertion_point(class_scope:DeviceSubType)
  })
_sym_db.RegisterMessage(DeviceSubType)


# @@protoc_insertion_point(module_scope)
