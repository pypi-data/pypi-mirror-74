# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pyatv/mrp/protobuf/SupportedCommands.proto

from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from pyatv.mrp.protobuf import CommandInfo_pb2 as pyatv_dot_mrp_dot_protobuf_dot_CommandInfo__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='pyatv/mrp/protobuf/SupportedCommands.proto',
  package='',
  syntax='proto2',
  serialized_options=None,
  serialized_pb=b'\n*pyatv/mrp/protobuf/SupportedCommands.proto\x1a$pyatv/mrp/protobuf/CommandInfo.proto\"<\n\x11SupportedCommands\x12\'\n\x11supportedCommands\x18\x01 \x03(\x0b\x32\x0c.CommandInfo'
  ,
  dependencies=[pyatv_dot_mrp_dot_protobuf_dot_CommandInfo__pb2.DESCRIPTOR,])




_SUPPORTEDCOMMANDS = _descriptor.Descriptor(
  name='SupportedCommands',
  full_name='SupportedCommands',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='supportedCommands', full_name='SupportedCommands.supportedCommands', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
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
  serialized_start=84,
  serialized_end=144,
)

_SUPPORTEDCOMMANDS.fields_by_name['supportedCommands'].message_type = pyatv_dot_mrp_dot_protobuf_dot_CommandInfo__pb2._COMMANDINFO
DESCRIPTOR.message_types_by_name['SupportedCommands'] = _SUPPORTEDCOMMANDS
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

SupportedCommands = _reflection.GeneratedProtocolMessageType('SupportedCommands', (_message.Message,), {
  'DESCRIPTOR' : _SUPPORTEDCOMMANDS,
  '__module__' : 'pyatv.mrp.protobuf.SupportedCommands_pb2'
  # @@protoc_insertion_point(class_scope:SupportedCommands)
  })
_sym_db.RegisterMessage(SupportedCommands)


# @@protoc_insertion_point(module_scope)
