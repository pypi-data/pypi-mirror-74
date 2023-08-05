# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pyatv/mrp/protobuf/VolumeControlCapabilitiesDidChange.proto

from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from pyatv.mrp.protobuf import ProtocolMessage_pb2 as pyatv_dot_mrp_dot_protobuf_dot_ProtocolMessage__pb2
from pyatv.mrp.protobuf import VolumeControlAvailabilityMessage_pb2 as pyatv_dot_mrp_dot_protobuf_dot_VolumeControlAvailabilityMessage__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='pyatv/mrp/protobuf/VolumeControlCapabilitiesDidChange.proto',
  package='',
  syntax='proto2',
  serialized_options=None,
  serialized_pb=b'\n;pyatv/mrp/protobuf/VolumeControlCapabilitiesDidChange.proto\x1a(pyatv/mrp/protobuf/ProtocolMessage.proto\x1a\x39pyatv/mrp/protobuf/VolumeControlAvailabilityMessage.proto\"\x92\x01\n)VolumeControlCapabilitiesDidChangeMessage\x12\x37\n\x0c\x63\x61pabilities\x18\x01 \x01(\x0b\x32!.VolumeControlAvailabilityMessage\x12\x13\n\x0b\x65ndpointUID\x18\x03 \x01(\t\x12\x17\n\x0foutputDeviceUID\x18\x04 \x01(\t:o\n)volumeControlCapabilitiesDidChangeMessage\x12\x10.ProtocolMessage\x18\x44 \x01(\x0b\x32*.VolumeControlCapabilitiesDidChangeMessage'
  ,
  dependencies=[pyatv_dot_mrp_dot_protobuf_dot_ProtocolMessage__pb2.DESCRIPTOR,pyatv_dot_mrp_dot_protobuf_dot_VolumeControlAvailabilityMessage__pb2.DESCRIPTOR,])


VOLUMECONTROLCAPABILITIESDIDCHANGEMESSAGE_FIELD_NUMBER = 68
volumeControlCapabilitiesDidChangeMessage = _descriptor.FieldDescriptor(
  name='volumeControlCapabilitiesDidChangeMessage', full_name='volumeControlCapabilitiesDidChangeMessage', index=0,
  number=68, type=11, cpp_type=10, label=1,
  has_default_value=False, default_value=None,
  message_type=None, enum_type=None, containing_type=None,
  is_extension=True, extension_scope=None,
  serialized_options=None, file=DESCRIPTOR)


_VOLUMECONTROLCAPABILITIESDIDCHANGEMESSAGE = _descriptor.Descriptor(
  name='VolumeControlCapabilitiesDidChangeMessage',
  full_name='VolumeControlCapabilitiesDidChangeMessage',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='capabilities', full_name='VolumeControlCapabilitiesDidChangeMessage.capabilities', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='endpointUID', full_name='VolumeControlCapabilitiesDidChangeMessage.endpointUID', index=1,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='outputDeviceUID', full_name='VolumeControlCapabilitiesDidChangeMessage.outputDeviceUID', index=2,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto2',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=165,
  serialized_end=311,
)

_VOLUMECONTROLCAPABILITIESDIDCHANGEMESSAGE.fields_by_name['capabilities'].message_type = pyatv_dot_mrp_dot_protobuf_dot_VolumeControlAvailabilityMessage__pb2._VOLUMECONTROLAVAILABILITYMESSAGE
DESCRIPTOR.message_types_by_name['VolumeControlCapabilitiesDidChangeMessage'] = _VOLUMECONTROLCAPABILITIESDIDCHANGEMESSAGE
DESCRIPTOR.extensions_by_name['volumeControlCapabilitiesDidChangeMessage'] = volumeControlCapabilitiesDidChangeMessage
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

VolumeControlCapabilitiesDidChangeMessage = _reflection.GeneratedProtocolMessageType('VolumeControlCapabilitiesDidChangeMessage', (_message.Message,), {
  'DESCRIPTOR' : _VOLUMECONTROLCAPABILITIESDIDCHANGEMESSAGE,
  '__module__' : 'pyatv.mrp.protobuf.VolumeControlCapabilitiesDidChange_pb2'
  # @@protoc_insertion_point(class_scope:VolumeControlCapabilitiesDidChangeMessage)
  })
_sym_db.RegisterMessage(VolumeControlCapabilitiesDidChangeMessage)

volumeControlCapabilitiesDidChangeMessage.message_type = _VOLUMECONTROLCAPABILITIESDIDCHANGEMESSAGE
pyatv_dot_mrp_dot_protobuf_dot_ProtocolMessage__pb2.ProtocolMessage.RegisterExtension(volumeControlCapabilitiesDidChangeMessage)

# @@protoc_insertion_point(module_scope)
