# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: gtirb/proto/Offset.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
from google.protobuf import descriptor_pb2
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='gtirb/proto/Offset.proto',
  package='gtirb.proto',
  syntax='proto3',
  serialized_pb=_b('\n\x18gtirb/proto/Offset.proto\x12\x0bgtirb.proto\"2\n\x06Offset\x12\x12\n\nelement_id\x18\x01 \x01(\x0c\x12\x14\n\x0c\x64isplacement\x18\x02 \x01(\x04\x42\x1c\n\x1a\x63om.grammatech.gtirb.protob\x06proto3')
)
_sym_db.RegisterFileDescriptor(DESCRIPTOR)




_OFFSET = _descriptor.Descriptor(
  name='Offset',
  full_name='gtirb.proto.Offset',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='element_id', full_name='gtirb.proto.Offset.element_id', index=0,
      number=1, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='displacement', full_name='gtirb.proto.Offset.displacement', index=1,
      number=2, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=41,
  serialized_end=91,
)

DESCRIPTOR.message_types_by_name['Offset'] = _OFFSET

Offset = _reflection.GeneratedProtocolMessageType('Offset', (_message.Message,), dict(
  DESCRIPTOR = _OFFSET,
  __module__ = 'gtirb.proto.Offset_pb2'
  # @@protoc_insertion_point(class_scope:gtirb.proto.Offset)
  ))
_sym_db.RegisterMessage(Offset)


DESCRIPTOR.has_options = True
DESCRIPTOR._options = _descriptor._ParseOptions(descriptor_pb2.FileOptions(), _b('\n\032com.grammatech.gtirb.proto'))
# @@protoc_insertion_point(module_scope)
