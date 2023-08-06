from collections import defaultdict

import six
from graphene import Enum
from sqlalchemy.types import Enum as SQLAlchemyEnumType


class Registry(object):
    def __init__(self):
        self._registry = {}
        self._registry_models = {}
        self._registry_orm_fields = defaultdict(dict)
        self._registry_composites = {}
        self._registry_enums = {}
        self._registry_sort_enums = {}
        self._registry_filters = {}

    def register(self, obj_type):
        from .types import GinoObjectType

        if not isinstance(obj_type, type) or not issubclass(
            obj_type, GinoObjectType,
        ):
            raise TypeError(
                'Expected SQLAlchemyObjectType, but got: {0:!r}'.format(obj_type),
            )
        assert obj_type._meta.registry == self, 'Registry for a Model have to match.'
        self._registry[obj_type._meta.model] = obj_type

    def get_type_for_model(self, model):
        return self._registry.get(model)

    def register_orm_field(self, obj_type, field_name, orm_field):
        from .types import GinoObjectType

        if not isinstance(obj_type, type) or not issubclass(
            obj_type, GinoObjectType,
        ):
            raise TypeError(
                'Expected GinoObjectType, but got: {0:!r}'.format(obj_type),
            )
        if not field_name or not isinstance(field_name, six.string_types):
            raise TypeError('Expected a field name, but got: {0:!r}'.format(field_name))
        self._registry_orm_fields[obj_type][field_name] = orm_field

    def get_orm_field_for_graphene_field(self, obj_type, field_name):
        return self._registry_orm_fields.get(obj_type, {}).get(field_name)

    def register_default_filter(self, filter_name, filter_set):
        self._registry_filters[filter_name] = filter_set

    def get_default_filter(self, filter_name):
        return self._registry_filters.get(filter_name)

    def register_composite_converter(self, composite, converter):
        self._registry_composites[composite] = converter

    def get_converter_for_composite(self, composite):
        return self._registry_composites.get(composite)

    def register_enum(self, sa_enum, graphene_enum):
        if not isinstance(sa_enum, SQLAlchemyEnumType):
            raise TypeError(
                'Expected SQLAlchemyEnumType, but got: {0:!r}'.format(sa_enum),
            )
        if not isinstance(graphene_enum, type(Enum)):
            raise TypeError(
                'Expected Graphene Enum, but got: {0:!r}'.format(graphene_enum),
            )

        self._registry_enums[sa_enum] = graphene_enum

    def get_graphene_enum_for_sa_enum(self, sa_enum):
        return self._registry_enums.get(sa_enum)

    def register_sort_enum(self, obj_type, sort_enum):
        from .types import GinoObjectType

        if not isinstance(obj_type, type) or not issubclass(
            obj_type, GinoObjectType,
        ):
            raise TypeError(
                'Expected GinoObjectType, but got: {0:!r}'.format(obj_type),
            )
        if not isinstance(sort_enum, type(Enum)):
            raise TypeError('Expected Graphene Enum, but got: {0:!r}'.format(sort_enum))
        self._registry_sort_enums[obj_type] = sort_enum

    def get_sort_enum_for_object_type(self, obj_type):
        return self._registry_sort_enums.get(obj_type)


registry = None


def get_global_registry():
    global registry
    if not registry:
        registry = Registry()
    return registry


def reset_global_registry():
    global registry
    registry = None
