﻿'''_990.py

GearManufacturingConfigSetupViewModel
'''


from mastapy._internal.implicit import enum_with_selected_value, overridable
from mastapy.gears.manufacturing.cylindrical import _623, _624
from mastapy._internal import constructor
from mastapy import _1
from mastapy._internal.python_net import python_net_import

_GEAR_MANUFACTURING_CONFIG_SETUP_VIEW_MODEL = python_net_import('SMT.MastaAPI.Gears.GearDesigns.Cylindrical', 'GearManufacturingConfigSetupViewModel')


__docformat__ = 'restructuredtext en'
__all__ = ('GearManufacturingConfigSetupViewModel',)


class GearManufacturingConfigSetupViewModel(_1.APIBase):
    '''GearManufacturingConfigSetupViewModel

    This is a mastapy class.
    '''

    TYPE = _GEAR_MANUFACTURING_CONFIG_SETUP_VIEW_MODEL
    __hash__ = None

    def __init__(self, instance_to_wrap: 'GearManufacturingConfigSetupViewModel.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def finishing_method(self) -> 'enum_with_selected_value.EnumWithSelectedValue_CylindricalMftFinishingMethods':
        '''enum_with_selected_value.EnumWithSelectedValue_CylindricalMftFinishingMethods: 'FinishingMethod' is the original name of this property.'''

        return constructor.new(enum_with_selected_value.EnumWithSelectedValue_CylindricalMftFinishingMethods)(self.wrapped.FinishingMethod) if self.wrapped.FinishingMethod else None

    @finishing_method.setter
    def finishing_method(self, value: 'enum_with_selected_value.EnumWithSelectedValue_CylindricalMftFinishingMethods.implicit_type()'):
        wrapper_type = enum_with_selected_value.EnumWithSelectedValue_CylindricalMftFinishingMethods.TYPE
        enclosed_type = enum_with_selected_value.EnumWithSelectedValue_CylindricalMftFinishingMethods.implicit_type()
        value = wrapper_type[enclosed_type](value if value else None)
        self.wrapped.FinishingMethod = value

    @property
    def roughing_method(self) -> 'enum_with_selected_value.EnumWithSelectedValue_CylindricalMftRoughingMethods':
        '''enum_with_selected_value.EnumWithSelectedValue_CylindricalMftRoughingMethods: 'RoughingMethod' is the original name of this property.'''

        return constructor.new(enum_with_selected_value.EnumWithSelectedValue_CylindricalMftRoughingMethods)(self.wrapped.RoughingMethod) if self.wrapped.RoughingMethod else None

    @roughing_method.setter
    def roughing_method(self, value: 'enum_with_selected_value.EnumWithSelectedValue_CylindricalMftRoughingMethods.implicit_type()'):
        wrapper_type = enum_with_selected_value.EnumWithSelectedValue_CylindricalMftRoughingMethods.TYPE
        enclosed_type = enum_with_selected_value.EnumWithSelectedValue_CylindricalMftRoughingMethods.implicit_type()
        value = wrapper_type[enclosed_type](value if value else None)
        self.wrapped.RoughingMethod = value

    @property
    def rough_pressure_angle(self) -> 'overridable.Overridable_float':
        '''overridable.Overridable_float: 'RoughPressureAngle' is the original name of this property.'''

        return constructor.new(overridable.Overridable_float)(self.wrapped.RoughPressureAngle) if self.wrapped.RoughPressureAngle else None

    @rough_pressure_angle.setter
    def rough_pressure_angle(self, value: 'overridable.Overridable_float.implicit_type()'):
        wrapper_type = overridable.Overridable_float.TYPE
        enclosed_type = overridable.Overridable_float.implicit_type()
        value = wrapper_type[enclosed_type](enclosed_type(value) if value else 0.0)
        self.wrapped.RoughPressureAngle = value

    @property
    def create_new_suitable_cutters(self) -> 'bool':
        '''bool: 'CreateNewSuitableCutters' is the original name of this property.'''

        return self.wrapped.CreateNewSuitableCutters

    @create_new_suitable_cutters.setter
    def create_new_suitable_cutters(self, value: 'bool'):
        self.wrapped.CreateNewSuitableCutters = bool(value) if value else False

    @property
    def use_as_design_mode_geometry(self) -> 'bool':
        '''bool: 'UseAsDesignModeGeometry' is the original name of this property.'''

        return self.wrapped.UseAsDesignModeGeometry

    @use_as_design_mode_geometry.setter
    def use_as_design_mode_geometry(self, value: 'bool'):
        self.wrapped.UseAsDesignModeGeometry = bool(value) if value else False

    @property
    def gear_name(self) -> 'str':
        '''str: 'GearName' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return self.wrapped.GearName
