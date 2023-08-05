import types
from typing import Mapping
from typing import Type

from .component import Component


class WinterApplication:

    def __init__(self):
        self._components = {}

    @property
    def components(self) -> Mapping[Type, Component]:
        return types.MappingProxyType(self._components)

    def add_component(self, cls: Type) -> Type:
        Component.register(cls)
        self._components[cls] = Component.get_by_cls(cls)
        return cls

    def autodiscover(self) -> None:
        for component_cls in Component.get_all():
            if component_cls not in self._components:
                self.add_component(component_cls)
