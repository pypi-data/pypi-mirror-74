# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pyatv/mrp/protobuf/SendCommandMessage.proto

from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from pyatv.mrp.protobuf import ProtocolMessage_pb2 as pyatv_dot_mrp_dot_protobuf_dot_ProtocolMessage__pb2
from pyatv.mrp.protobuf import CommandInfo_pb2 as pyatv_dot_mrp_dot_protobuf_dot_CommandInfo__pb2
from pyatv.mrp.protobuf import CommandOptions_pb2 as pyatv_dot_mrp_dot_protobuf_dot_CommandOptions__pb2
from pyatv.mrp.protobuf import PlayerPath_pb2 as pyatv_dot_mrp_dot_protobuf_dot_PlayerPath__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='pyatv/mrp/protobuf/SendCommandMessage.proto',
  package='',
  syntax='proto2',
  serialized_options=None,
  serialized_pb=b'\n+pyatv/mrp/protobuf/SendCommandMessage.proto\x1a(pyatv/mrp/protobuf/ProtocolMessage.proto\x1a$pyatv/mrp/protobuf/CommandInfo.proto\x1a\'pyatv/mrp/protobuf/CommandOptions.proto\x1a#pyatv/mrp/protobuf/PlayerPath.proto\"r\n\x12SendCommandMessage\x12\x19\n\x07\x63ommand\x18\x01 \x01(\x0e\x32\x08.Command\x12 \n\x07options\x18\x02 \x01(\x0b\x32\x0f.CommandOptions\x12\x1f\n\nplayerPath\x18\x03 \x01(\x0b\x32\x0b.PlayerPath:A\n\x12sendCommandMessage\x12\x10.ProtocolMessage\x18\x06 \x01(\x0b\x32\x13.SendCommandMessage'
  ,
  dependencies=[pyatv_dot_mrp_dot_protobuf_dot_ProtocolMessage__pb2.DESCRIPTOR,pyatv_dot_mrp_dot_protobuf_dot_CommandInfo__pb2.DESCRIPTOR,pyatv_dot_mrp_dot_protobuf_dot_CommandOptions__pb2.DESCRIPTOR,pyatv_dot_mrp_dot_protobuf_dot_PlayerPath__pb2.DESCRIPTOR,])


SENDCOMMANDMESSAGE_FIELD_NUMBER = 6
sendCommandMessage = _descriptor.FieldDescriptor(
  name='sendCommandMessage', full_name='sendCommandMessage', index=0,
  number=6, type=11, cpp_type=10, label=1,
  has_default_value=False, default_value=None,
  message_type=None, enum_type=None, containing_type=None,
  is_extension=True, extension_scope=None,
  serialized_options=None, file=DESCRIPTOR)


_SENDCOMMANDMESSAGE = _descriptor.Descriptor(
  name='SendCommandMessage',
  full_name='SendCommandMessage',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='command', full_name='SendCommandMessage.command', index=0,
      number=1, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='options', full_name='SendCommandMessage.options', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='playerPath', full_name='SendCommandMessage.playerPath', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
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
  serialized_start=205,
  serialized_end=319,
)

_SENDCOMMANDMESSAGE.fields_by_name['command'].enum_type = pyatv_dot_mrp_dot_protobuf_dot_CommandInfo__pb2._COMMAND
_SENDCOMMANDMESSAGE.fields_by_name['options'].message_type = pyatv_dot_mrp_dot_protobuf_dot_CommandOptions__pb2._COMMANDOPTIONS
_SENDCOMMANDMESSAGE.fields_by_name['playerPath'].message_type = pyatv_dot_mrp_dot_protobuf_dot_PlayerPath__pb2._PLAYERPATH
DESCRIPTOR.message_types_by_name['SendCommandMessage'] = _SENDCOMMANDMESSAGE
DESCRIPTOR.extensions_by_name['sendCommandMessage'] = sendCommandMessage
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

SendCommandMessage = _reflection.GeneratedProtocolMessageType('SendCommandMessage', (_message.Message,), {
  'DESCRIPTOR' : _SENDCOMMANDMESSAGE,
  '__module__' : 'pyatv.mrp.protobuf.SendCommandMessage_pb2'
  # @@protoc_insertion_point(class_scope:SendCommandMessage)
  })
_sym_db.RegisterMessage(SendCommandMessage)

sendCommandMessage.message_type = _SENDCOMMANDMESSAGE
pyatv_dot_mrp_dot_protobuf_dot_ProtocolMessage__pb2.ProtocolMessage.RegisterExtension(sendCommandMessage)

# @@protoc_insertion_point(module_scope)
