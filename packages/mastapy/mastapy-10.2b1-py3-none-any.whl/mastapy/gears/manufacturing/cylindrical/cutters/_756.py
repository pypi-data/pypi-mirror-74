﻿'''_756.py

CylindricalGearShaverDatabase
'''


from typing import Iterable

from mastapy.gears.manufacturing.cylindrical.cutters import _734
from mastapy._internal import constructor, conversion
from mastapy import _1
from mastapy._internal.python_net import python_net_import

_CYLINDRICAL_GEAR_SHAVER_DATABASE = python_net_import('SMT.MastaAPI.Gears.Manufacturing.Cylindrical.Cutters', 'CylindricalGearShaverDatabase')


__docformat__ = 'restructuredtext en'
__all__ = ('CylindricalGearShaverDatabase',)


class CylindricalGearShaverDatabase(_1.APIBase):
    '''CylindricalGearShaverDatabase

    This is a mastapy class.
    '''

    TYPE = _CYLINDRICAL_GEAR_SHAVER_DATABASE
    __hash__ = None

    def __init__(self, instance_to_wrap: 'CylindricalGearShaverDatabase.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def item(self) -> '_734.CylindricalGearShaver':
        '''CylindricalGearShaver: 'Item' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_734.CylindricalGearShaver)(self.wrapped.Item) if self.wrapped.Item else None

    def create(self, name: 'str') -> '_734.CylindricalGearShaver':
        ''' 'Create' is the original name of this method.

        Args:
            name (str)

        Returns:
            mastapy.gears.manufacturing.cylindrical.cutters.CylindricalGearShaver
        '''

        name = str(name)
        method_result = self.wrapped.Create(name if name else None)
        return constructor.new(_734.CylindricalGearShaver)(method_result) if method_result else None

    def can_be_removed(self, cylindrical_gear_shaver: '_734.CylindricalGearShaver') -> 'bool':
        ''' 'CanBeRemoved' is the original name of this method.

        Args:
            cylindrical_gear_shaver (mastapy.gears.manufacturing.cylindrical.cutters.CylindricalGearShaver)

        Returns:
            bool
        '''

        method_result = self.wrapped.CanBeRemoved(cylindrical_gear_shaver.wrapped if cylindrical_gear_shaver else None)
        return method_result

    def rename(self, cylindrical_gear_shaver: '_734.CylindricalGearShaver', new_name: 'str') -> 'bool':
        ''' 'Rename' is the original name of this method.

        Args:
            cylindrical_gear_shaver (mastapy.gears.manufacturing.cylindrical.cutters.CylindricalGearShaver)
            new_name (str)

        Returns:
            bool
        '''

        new_name = str(new_name)
        method_result = self.wrapped.Rename(cylindrical_gear_shaver.wrapped if cylindrical_gear_shaver else None, new_name if new_name else None)
        return method_result

    def remove(self, cylindrical_gear_shaver: '_734.CylindricalGearShaver'):
        ''' 'Remove' is the original name of this method.

        Args:
            cylindrical_gear_shaver (mastapy.gears.manufacturing.cylindrical.cutters.CylindricalGearShaver)
        '''

        self.wrapped.Remove(cylindrical_gear_shaver.wrapped if cylindrical_gear_shaver else None)

    def get_all_items(self) -> 'Iterable[_734.CylindricalGearShaver]':
        ''' 'GetAllItems' is the original name of this method.

        Returns:
            Iterable[mastapy.gears.manufacturing.cylindrical.cutters.CylindricalGearShaver]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.GetAllItems(), constructor.new(_734.CylindricalGearShaver))

    def save_changes(self, cylindrical_gear_shaver: '_734.CylindricalGearShaver'):
        ''' 'SaveChanges' is the original name of this method.

        Args:
            cylindrical_gear_shaver (mastapy.gears.manufacturing.cylindrical.cutters.CylindricalGearShaver)
        '''

        self.wrapped.SaveChanges(cylindrical_gear_shaver.wrapped if cylindrical_gear_shaver else None)
