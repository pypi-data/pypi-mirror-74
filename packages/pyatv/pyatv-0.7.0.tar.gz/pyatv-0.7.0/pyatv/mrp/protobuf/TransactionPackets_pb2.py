# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pyatv/mrp/protobuf/TransactionPackets.proto

from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from pyatv.mrp.protobuf import TransactionPacket_pb2 as pyatv_dot_mrp_dot_protobuf_dot_TransactionPacket__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='pyatv/mrp/protobuf/TransactionPackets.proto',
  package='',
  syntax='proto2',
  serialized_options=None,
  serialized_pb=b'\n+pyatv/mrp/protobuf/TransactionPackets.proto\x1a*pyatv/mrp/protobuf/TransactionPacket.proto\"9\n\x12TransactionPackets\x12#\n\x07packets\x18\x01 \x03(\x0b\x32\x12.TransactionPacket'
  ,
  dependencies=[pyatv_dot_mrp_dot_protobuf_dot_TransactionPacket__pb2.DESCRIPTOR,])




_TRANSACTIONPACKETS = _descriptor.Descriptor(
  name='TransactionPackets',
  full_name='TransactionPackets',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='packets', full_name='TransactionPackets.packets', index=0,
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
  serialized_start=91,
  serialized_end=148,
)

_TRANSACTIONPACKETS.fields_by_name['packets'].message_type = pyatv_dot_mrp_dot_protobuf_dot_TransactionPacket__pb2._TRANSACTIONPACKET
DESCRIPTOR.message_types_by_name['TransactionPackets'] = _TRANSACTIONPACKETS
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

TransactionPackets = _reflection.GeneratedProtocolMessageType('TransactionPackets', (_message.Message,), {
  'DESCRIPTOR' : _TRANSACTIONPACKETS,
  '__module__' : 'pyatv.mrp.protobuf.TransactionPackets_pb2'
  # @@protoc_insertion_point(class_scope:TransactionPackets)
  })
_sym_db.RegisterMessage(TransactionPackets)


# @@protoc_insertion_point(module_scope)
