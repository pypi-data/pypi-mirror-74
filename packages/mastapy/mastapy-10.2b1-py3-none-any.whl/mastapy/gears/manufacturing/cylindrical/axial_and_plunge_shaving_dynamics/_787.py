﻿'''_787.py

ShavingDynamicsCalculation
'''


from typing import (
    Callable, List, Generic, TypeVar
)

from mastapy._internal import constructor, conversion
from mastapy._internal.implicit import overridable, list_with_selected_item
from mastapy.gears.manufacturing.cylindrical.axial_and_plunge_shaving_dynamics import _783, _782, _786
from mastapy.gears.manufacturing.cylindrical.cutter_simulation import _681
from mastapy.gears.manufacturing.cylindrical.cutters import _734
from mastapy.gears.gear_designs.cylindrical import _560
from mastapy import _1
from mastapy._internal.python_net import python_net_import

_SHAVING_DYNAMICS_CALCULATION = python_net_import('SMT.MastaAPI.Gears.Manufacturing.Cylindrical.AxialAndPlungeShavingDynamics', 'ShavingDynamicsCalculation')


__docformat__ = 'restructuredtext en'
__all__ = ('ShavingDynamicsCalculation',)


T = TypeVar('T', bound='_786.ShavingDynamics')


class ShavingDynamicsCalculation(_1.APIBase, Generic[T]):
    '''ShavingDynamicsCalculation

    This is a mastapy class.

    Generic Types:
        T
    '''

    TYPE = _SHAVING_DYNAMICS_CALCULATION
    __hash__ = None

    def __init__(self, instance_to_wrap: 'ShavingDynamicsCalculation.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def cutter_simulation_calculation_required(self) -> 'Callable[[], None]':
        '''Callable[[], None]: 'CutterSimulationCalculationRequired' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return self.wrapped.CutterSimulationCalculationRequired

    @property
    def life_cutter_tip_diameter(self) -> 'overridable.Overridable_float':
        '''overridable.Overridable_float: 'LifeCutterTipDiameter' is the original name of this property.'''

        return constructor.new(overridable.Overridable_float)(self.wrapped.LifeCutterTipDiameter) if self.wrapped.LifeCutterTipDiameter else None

    @life_cutter_tip_diameter.setter
    def life_cutter_tip_diameter(self, value: 'overridable.Overridable_float.implicit_type()'):
        wrapper_type = overridable.Overridable_float.TYPE
        enclosed_type = overridable.Overridable_float.implicit_type()
        value = wrapper_type[enclosed_type](enclosed_type(value) if value else 0.0)
        self.wrapped.LifeCutterTipDiameter = value

    @property
    def new_cutter_tip_diameter(self) -> 'overridable.Overridable_float':
        '''overridable.Overridable_float: 'NewCutterTipDiameter' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(overridable.Overridable_float)(self.wrapped.NewCutterTipDiameter) if self.wrapped.NewCutterTipDiameter else None

    @property
    def selected_redressing(self) -> 'list_with_selected_item.ListWithSelectedItem_T':
        '''list_with_selected_item.ListWithSelectedItem_T: 'SelectedRedressing' is the original name of this property.'''

        return constructor.new(list_with_selected_item.ListWithSelectedItem_T)(self.wrapped.SelectedRedressing) if self.wrapped.SelectedRedressing else None

    @selected_redressing.setter
    def selected_redressing(self, value: 'list_with_selected_item.ListWithSelectedItem_T.implicit_type()'):
        wrapper_type = list_with_selected_item.ListWithSelectedItem_T.TYPE
        enclosed_type = list_with_selected_item.ListWithSelectedItem_T.implicit_type()
        value = wrapper_type[enclosed_type](value.wrapped if value else None)
        self.wrapped.SelectedRedressing = value

    @property
    def normal_tooth_thickness_reduction_between_redressings(self) -> 'float':
        '''float: 'NormalToothThicknessReductionBetweenRedressings' is the original name of this property.'''

        return self.wrapped.NormalToothThicknessReductionBetweenRedressings

    @normal_tooth_thickness_reduction_between_redressings.setter
    def normal_tooth_thickness_reduction_between_redressings(self, value: 'float'):
        self.wrapped.NormalToothThicknessReductionBetweenRedressings = float(value) if value else 0.0

    @property
    def life_cutter_normal_thickness(self) -> 'overridable.Overridable_float':
        '''overridable.Overridable_float: 'LifeCutterNormalThickness' is the original name of this property.'''

        return constructor.new(overridable.Overridable_float)(self.wrapped.LifeCutterNormalThickness) if self.wrapped.LifeCutterNormalThickness else None

    @life_cutter_normal_thickness.setter
    def life_cutter_normal_thickness(self, value: 'overridable.Overridable_float.implicit_type()'):
        wrapper_type = overridable.Overridable_float.TYPE
        enclosed_type = overridable.Overridable_float.implicit_type()
        value = wrapper_type[enclosed_type](enclosed_type(value) if value else 0.0)
        self.wrapped.LifeCutterNormalThickness = value

    @property
    def adjusted_tip_diameter(self) -> 'List[float]':
        '''List[float]: 'AdjustedTipDiameter' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.AdjustedTipDiameter, float)
        return value

    @property
    def accuracy_level_iso6(self) -> '_783.RollAngleRangeRelativeToAccuracy':
        '''RollAngleRangeRelativeToAccuracy: 'AccuracyLevelISO6' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_783.RollAngleRangeRelativeToAccuracy)(self.wrapped.AccuracyLevelISO6) if self.wrapped.AccuracyLevelISO6 else None

    @property
    def accuracy_level_iso7(self) -> '_783.RollAngleRangeRelativeToAccuracy':
        '''RollAngleRangeRelativeToAccuracy: 'AccuracyLevelISO7' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_783.RollAngleRangeRelativeToAccuracy)(self.wrapped.AccuracyLevelISO7) if self.wrapped.AccuracyLevelISO7 else None

    @property
    def designed_gear(self) -> '_681.CylindricalCutterSimulatableGear':
        '''CylindricalCutterSimulatableGear: 'DesignedGear' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_681.CylindricalCutterSimulatableGear)(self.wrapped.DesignedGear) if self.wrapped.DesignedGear else None

    @property
    def shaver(self) -> '_734.CylindricalGearShaver':
        '''CylindricalGearShaver: 'Shaver' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_734.CylindricalGearShaver)(self.wrapped.Shaver) if self.wrapped.Shaver else None

    @property
    def life_shaver(self) -> '_734.CylindricalGearShaver':
        '''CylindricalGearShaver: 'LifeShaver' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_734.CylindricalGearShaver)(self.wrapped.LifeShaver) if self.wrapped.LifeShaver else None

    @property
    def new_cutter_start_of_shaving(self) -> '_560.CylindricalGearProfileMeasurement':
        '''CylindricalGearProfileMeasurement: 'NewCutterStartOfShaving' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_560.CylindricalGearProfileMeasurement)(self.wrapped.NewCutterStartOfShaving) if self.wrapped.NewCutterStartOfShaving else None

    @property
    def life_cutter_start_of_shaving(self) -> '_560.CylindricalGearProfileMeasurement':
        '''CylindricalGearProfileMeasurement: 'LifeCutterStartOfShaving' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_560.CylindricalGearProfileMeasurement)(self.wrapped.LifeCutterStartOfShaving) if self.wrapped.LifeCutterStartOfShaving else None

    @property
    def redressing_settings(self) -> 'List[_782.RedressingSettings[T]]':
        '''List[RedressingSettings[T]]: 'RedressingSettings' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.RedressingSettings, constructor.new(_782.RedressingSettings)[T])
        return value
