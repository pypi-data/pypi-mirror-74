﻿'''_733.py

GearCutterSimulation
'''


from typing import List

from mastapy._internal import constructor, conversion
from mastapy.gears.manufacturing.cylindrical.cutter_simulation import (
    _723, _736, _719, _725,
    _737, _738, _739, _734,
    _740, _721, _722
)
from mastapy._internal.cast_exception import CastException
from mastapy import _1
from mastapy._internal.python_net import python_net_import

_GEAR_CUTTER_SIMULATION = python_net_import('SMT.MastaAPI.Gears.Manufacturing.Cylindrical.CutterSimulation', 'GearCutterSimulation')


__docformat__ = 'restructuredtext en'
__all__ = ('GearCutterSimulation',)


class GearCutterSimulation(_1.APIBase):
    '''GearCutterSimulation

    This is a mastapy class.
    '''

    TYPE = _GEAR_CUTTER_SIMULATION
    __hash__ = None

    def __init__(self, instance_to_wrap: 'GearCutterSimulation.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def name(self) -> 'str':
        '''str: 'Name' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return self.wrapped.Name

    @property
    def highest_finished_form_diameter(self) -> 'float':
        '''float: 'HighestFinishedFormDiameter' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return self.wrapped.HighestFinishedFormDiameter

    @property
    def lowest_finished_tip_form_diameter(self) -> 'float':
        '''float: 'LowestFinishedTipFormDiameter' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return self.wrapped.LowestFinishedTipFormDiameter

    @property
    def least_sap_to_form_radius_clearance(self) -> 'float':
        '''float: 'LeastSAPToFormRadiusClearance' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return self.wrapped.LeastSAPToFormRadiusClearance

    @property
    def cutter_simulation(self) -> 'GearCutterSimulation':
        '''GearCutterSimulation: 'CutterSimulation' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(GearCutterSimulation)(self.wrapped.CutterSimulation) if self.wrapped.CutterSimulation else None

    @property
    def cutter_simulation_of_type_finish_cutter_simulation(self) -> '_723.FinishCutterSimulation':
        '''FinishCutterSimulation: 'CutterSimulation' is the original name of this property.

        Note:
            This property is readonly.
        '''

        if self.wrapped.CutterSimulation.__class__.__qualname__ != 'FinishCutterSimulation':
            raise CastException('Failed to cast cutter_simulation to FinishCutterSimulation. Expected: {}.'.format(self.wrapped.CutterSimulation.__class__.__qualname__))

        return constructor.new(_723.FinishCutterSimulation)(self.wrapped.CutterSimulation) if self.wrapped.CutterSimulation else None

    @property
    def cutter_simulation_of_type_rough_cutter_simulation(self) -> '_736.RoughCutterSimulation':
        '''RoughCutterSimulation: 'CutterSimulation' is the original name of this property.

        Note:
            This property is readonly.
        '''

        if self.wrapped.CutterSimulation.__class__.__qualname__ != 'RoughCutterSimulation':
            raise CastException('Failed to cast cutter_simulation to RoughCutterSimulation. Expected: {}.'.format(self.wrapped.CutterSimulation.__class__.__qualname__))

        return constructor.new(_736.RoughCutterSimulation)(self.wrapped.CutterSimulation) if self.wrapped.CutterSimulation else None

    @property
    def minimum_thickness(self) -> '_719.CutterSimulationCalc':
        '''CutterSimulationCalc: 'MinimumThickness' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_719.CutterSimulationCalc)(self.wrapped.MinimumThickness) if self.wrapped.MinimumThickness else None

    @property
    def minimum_thickness_of_type_form_wheel_grinding_simulation_calculator(self) -> '_725.FormWheelGrindingSimulationCalculator':
        '''FormWheelGrindingSimulationCalculator: 'MinimumThickness' is the original name of this property.

        Note:
            This property is readonly.
        '''

        if self.wrapped.MinimumThickness.__class__.__qualname__ != 'FormWheelGrindingSimulationCalculator':
            raise CastException('Failed to cast minimum_thickness to FormWheelGrindingSimulationCalculator. Expected: {}.'.format(self.wrapped.MinimumThickness.__class__.__qualname__))

        return constructor.new(_725.FormWheelGrindingSimulationCalculator)(self.wrapped.MinimumThickness) if self.wrapped.MinimumThickness else None

    @property
    def minimum_thickness_of_type_shaper_simulation_calculator(self) -> '_737.ShaperSimulationCalculator':
        '''ShaperSimulationCalculator: 'MinimumThickness' is the original name of this property.

        Note:
            This property is readonly.
        '''

        if self.wrapped.MinimumThickness.__class__.__qualname__ != 'ShaperSimulationCalculator':
            raise CastException('Failed to cast minimum_thickness to ShaperSimulationCalculator. Expected: {}.'.format(self.wrapped.MinimumThickness.__class__.__qualname__))

        return constructor.new(_737.ShaperSimulationCalculator)(self.wrapped.MinimumThickness) if self.wrapped.MinimumThickness else None

    @property
    def minimum_thickness_of_type_shaving_simulation_calculator(self) -> '_738.ShavingSimulationCalculator':
        '''ShavingSimulationCalculator: 'MinimumThickness' is the original name of this property.

        Note:
            This property is readonly.
        '''

        if self.wrapped.MinimumThickness.__class__.__qualname__ != 'ShavingSimulationCalculator':
            raise CastException('Failed to cast minimum_thickness to ShavingSimulationCalculator. Expected: {}.'.format(self.wrapped.MinimumThickness.__class__.__qualname__))

        return constructor.new(_738.ShavingSimulationCalculator)(self.wrapped.MinimumThickness) if self.wrapped.MinimumThickness else None

    @property
    def minimum_thickness_of_type_virtual_simulation_calculator(self) -> '_739.VirtualSimulationCalculator':
        '''VirtualSimulationCalculator: 'MinimumThickness' is the original name of this property.

        Note:
            This property is readonly.
        '''

        if self.wrapped.MinimumThickness.__class__.__qualname__ != 'VirtualSimulationCalculator':
            raise CastException('Failed to cast minimum_thickness to VirtualSimulationCalculator. Expected: {}.'.format(self.wrapped.MinimumThickness.__class__.__qualname__))

        return constructor.new(_739.VirtualSimulationCalculator)(self.wrapped.MinimumThickness) if self.wrapped.MinimumThickness else None

    @property
    def minimum_thickness_of_type_hob_simulation_calculator(self) -> '_734.HobSimulationCalculator':
        '''HobSimulationCalculator: 'MinimumThickness' is the original name of this property.

        Note:
            This property is readonly.
        '''

        if self.wrapped.MinimumThickness.__class__.__qualname__ != 'HobSimulationCalculator':
            raise CastException('Failed to cast minimum_thickness to HobSimulationCalculator. Expected: {}.'.format(self.wrapped.MinimumThickness.__class__.__qualname__))

        return constructor.new(_734.HobSimulationCalculator)(self.wrapped.MinimumThickness) if self.wrapped.MinimumThickness else None

    @property
    def minimum_thickness_of_type_worm_grinder_simulation_calculator(self) -> '_740.WormGrinderSimulationCalculator':
        '''WormGrinderSimulationCalculator: 'MinimumThickness' is the original name of this property.

        Note:
            This property is readonly.
        '''

        if self.wrapped.MinimumThickness.__class__.__qualname__ != 'WormGrinderSimulationCalculator':
            raise CastException('Failed to cast minimum_thickness to WormGrinderSimulationCalculator. Expected: {}.'.format(self.wrapped.MinimumThickness.__class__.__qualname__))

        return constructor.new(_740.WormGrinderSimulationCalculator)(self.wrapped.MinimumThickness) if self.wrapped.MinimumThickness else None

    @property
    def average_thickness(self) -> '_719.CutterSimulationCalc':
        '''CutterSimulationCalc: 'AverageThickness' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_719.CutterSimulationCalc)(self.wrapped.AverageThickness) if self.wrapped.AverageThickness else None

    @property
    def average_thickness_of_type_form_wheel_grinding_simulation_calculator(self) -> '_725.FormWheelGrindingSimulationCalculator':
        '''FormWheelGrindingSimulationCalculator: 'AverageThickness' is the original name of this property.

        Note:
            This property is readonly.
        '''

        if self.wrapped.AverageThickness.__class__.__qualname__ != 'FormWheelGrindingSimulationCalculator':
            raise CastException('Failed to cast average_thickness to FormWheelGrindingSimulationCalculator. Expected: {}.'.format(self.wrapped.AverageThickness.__class__.__qualname__))

        return constructor.new(_725.FormWheelGrindingSimulationCalculator)(self.wrapped.AverageThickness) if self.wrapped.AverageThickness else None

    @property
    def average_thickness_of_type_shaper_simulation_calculator(self) -> '_737.ShaperSimulationCalculator':
        '''ShaperSimulationCalculator: 'AverageThickness' is the original name of this property.

        Note:
            This property is readonly.
        '''

        if self.wrapped.AverageThickness.__class__.__qualname__ != 'ShaperSimulationCalculator':
            raise CastException('Failed to cast average_thickness to ShaperSimulationCalculator. Expected: {}.'.format(self.wrapped.AverageThickness.__class__.__qualname__))

        return constructor.new(_737.ShaperSimulationCalculator)(self.wrapped.AverageThickness) if self.wrapped.AverageThickness else None

    @property
    def average_thickness_of_type_shaving_simulation_calculator(self) -> '_738.ShavingSimulationCalculator':
        '''ShavingSimulationCalculator: 'AverageThickness' is the original name of this property.

        Note:
            This property is readonly.
        '''

        if self.wrapped.AverageThickness.__class__.__qualname__ != 'ShavingSimulationCalculator':
            raise CastException('Failed to cast average_thickness to ShavingSimulationCalculator. Expected: {}.'.format(self.wrapped.AverageThickness.__class__.__qualname__))

        return constructor.new(_738.ShavingSimulationCalculator)(self.wrapped.AverageThickness) if self.wrapped.AverageThickness else None

    @property
    def average_thickness_of_type_virtual_simulation_calculator(self) -> '_739.VirtualSimulationCalculator':
        '''VirtualSimulationCalculator: 'AverageThickness' is the original name of this property.

        Note:
            This property is readonly.
        '''

        if self.wrapped.AverageThickness.__class__.__qualname__ != 'VirtualSimulationCalculator':
            raise CastException('Failed to cast average_thickness to VirtualSimulationCalculator. Expected: {}.'.format(self.wrapped.AverageThickness.__class__.__qualname__))

        return constructor.new(_739.VirtualSimulationCalculator)(self.wrapped.AverageThickness) if self.wrapped.AverageThickness else None

    @property
    def average_thickness_of_type_hob_simulation_calculator(self) -> '_734.HobSimulationCalculator':
        '''HobSimulationCalculator: 'AverageThickness' is the original name of this property.

        Note:
            This property is readonly.
        '''

        if self.wrapped.AverageThickness.__class__.__qualname__ != 'HobSimulationCalculator':
            raise CastException('Failed to cast average_thickness to HobSimulationCalculator. Expected: {}.'.format(self.wrapped.AverageThickness.__class__.__qualname__))

        return constructor.new(_734.HobSimulationCalculator)(self.wrapped.AverageThickness) if self.wrapped.AverageThickness else None

    @property
    def average_thickness_of_type_worm_grinder_simulation_calculator(self) -> '_740.WormGrinderSimulationCalculator':
        '''WormGrinderSimulationCalculator: 'AverageThickness' is the original name of this property.

        Note:
            This property is readonly.
        '''

        if self.wrapped.AverageThickness.__class__.__qualname__ != 'WormGrinderSimulationCalculator':
            raise CastException('Failed to cast average_thickness to WormGrinderSimulationCalculator. Expected: {}.'.format(self.wrapped.AverageThickness.__class__.__qualname__))

        return constructor.new(_740.WormGrinderSimulationCalculator)(self.wrapped.AverageThickness) if self.wrapped.AverageThickness else None

    @property
    def maximum_thickness(self) -> '_719.CutterSimulationCalc':
        '''CutterSimulationCalc: 'MaximumThickness' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_719.CutterSimulationCalc)(self.wrapped.MaximumThickness) if self.wrapped.MaximumThickness else None

    @property
    def maximum_thickness_of_type_form_wheel_grinding_simulation_calculator(self) -> '_725.FormWheelGrindingSimulationCalculator':
        '''FormWheelGrindingSimulationCalculator: 'MaximumThickness' is the original name of this property.

        Note:
            This property is readonly.
        '''

        if self.wrapped.MaximumThickness.__class__.__qualname__ != 'FormWheelGrindingSimulationCalculator':
            raise CastException('Failed to cast maximum_thickness to FormWheelGrindingSimulationCalculator. Expected: {}.'.format(self.wrapped.MaximumThickness.__class__.__qualname__))

        return constructor.new(_725.FormWheelGrindingSimulationCalculator)(self.wrapped.MaximumThickness) if self.wrapped.MaximumThickness else None

    @property
    def maximum_thickness_of_type_shaper_simulation_calculator(self) -> '_737.ShaperSimulationCalculator':
        '''ShaperSimulationCalculator: 'MaximumThickness' is the original name of this property.

        Note:
            This property is readonly.
        '''

        if self.wrapped.MaximumThickness.__class__.__qualname__ != 'ShaperSimulationCalculator':
            raise CastException('Failed to cast maximum_thickness to ShaperSimulationCalculator. Expected: {}.'.format(self.wrapped.MaximumThickness.__class__.__qualname__))

        return constructor.new(_737.ShaperSimulationCalculator)(self.wrapped.MaximumThickness) if self.wrapped.MaximumThickness else None

    @property
    def maximum_thickness_of_type_shaving_simulation_calculator(self) -> '_738.ShavingSimulationCalculator':
        '''ShavingSimulationCalculator: 'MaximumThickness' is the original name of this property.

        Note:
            This property is readonly.
        '''

        if self.wrapped.MaximumThickness.__class__.__qualname__ != 'ShavingSimulationCalculator':
            raise CastException('Failed to cast maximum_thickness to ShavingSimulationCalculator. Expected: {}.'.format(self.wrapped.MaximumThickness.__class__.__qualname__))

        return constructor.new(_738.ShavingSimulationCalculator)(self.wrapped.MaximumThickness) if self.wrapped.MaximumThickness else None

    @property
    def maximum_thickness_of_type_virtual_simulation_calculator(self) -> '_739.VirtualSimulationCalculator':
        '''VirtualSimulationCalculator: 'MaximumThickness' is the original name of this property.

        Note:
            This property is readonly.
        '''

        if self.wrapped.MaximumThickness.__class__.__qualname__ != 'VirtualSimulationCalculator':
            raise CastException('Failed to cast maximum_thickness to VirtualSimulationCalculator. Expected: {}.'.format(self.wrapped.MaximumThickness.__class__.__qualname__))

        return constructor.new(_739.VirtualSimulationCalculator)(self.wrapped.MaximumThickness) if self.wrapped.MaximumThickness else None

    @property
    def maximum_thickness_of_type_hob_simulation_calculator(self) -> '_734.HobSimulationCalculator':
        '''HobSimulationCalculator: 'MaximumThickness' is the original name of this property.

        Note:
            This property is readonly.
        '''

        if self.wrapped.MaximumThickness.__class__.__qualname__ != 'HobSimulationCalculator':
            raise CastException('Failed to cast maximum_thickness to HobSimulationCalculator. Expected: {}.'.format(self.wrapped.MaximumThickness.__class__.__qualname__))

        return constructor.new(_734.HobSimulationCalculator)(self.wrapped.MaximumThickness) if self.wrapped.MaximumThickness else None

    @property
    def maximum_thickness_of_type_worm_grinder_simulation_calculator(self) -> '_740.WormGrinderSimulationCalculator':
        '''WormGrinderSimulationCalculator: 'MaximumThickness' is the original name of this property.

        Note:
            This property is readonly.
        '''

        if self.wrapped.MaximumThickness.__class__.__qualname__ != 'WormGrinderSimulationCalculator':
            raise CastException('Failed to cast maximum_thickness to WormGrinderSimulationCalculator. Expected: {}.'.format(self.wrapped.MaximumThickness.__class__.__qualname__))

        return constructor.new(_740.WormGrinderSimulationCalculator)(self.wrapped.MaximumThickness) if self.wrapped.MaximumThickness else None

    @property
    def smallest_active_profile(self) -> '_719.CutterSimulationCalc':
        '''CutterSimulationCalc: 'SmallestActiveProfile' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_719.CutterSimulationCalc)(self.wrapped.SmallestActiveProfile) if self.wrapped.SmallestActiveProfile else None

    @property
    def smallest_active_profile_of_type_form_wheel_grinding_simulation_calculator(self) -> '_725.FormWheelGrindingSimulationCalculator':
        '''FormWheelGrindingSimulationCalculator: 'SmallestActiveProfile' is the original name of this property.

        Note:
            This property is readonly.
        '''

        if self.wrapped.SmallestActiveProfile.__class__.__qualname__ != 'FormWheelGrindingSimulationCalculator':
            raise CastException('Failed to cast smallest_active_profile to FormWheelGrindingSimulationCalculator. Expected: {}.'.format(self.wrapped.SmallestActiveProfile.__class__.__qualname__))

        return constructor.new(_725.FormWheelGrindingSimulationCalculator)(self.wrapped.SmallestActiveProfile) if self.wrapped.SmallestActiveProfile else None

    @property
    def smallest_active_profile_of_type_shaper_simulation_calculator(self) -> '_737.ShaperSimulationCalculator':
        '''ShaperSimulationCalculator: 'SmallestActiveProfile' is the original name of this property.

        Note:
            This property is readonly.
        '''

        if self.wrapped.SmallestActiveProfile.__class__.__qualname__ != 'ShaperSimulationCalculator':
            raise CastException('Failed to cast smallest_active_profile to ShaperSimulationCalculator. Expected: {}.'.format(self.wrapped.SmallestActiveProfile.__class__.__qualname__))

        return constructor.new(_737.ShaperSimulationCalculator)(self.wrapped.SmallestActiveProfile) if self.wrapped.SmallestActiveProfile else None

    @property
    def smallest_active_profile_of_type_shaving_simulation_calculator(self) -> '_738.ShavingSimulationCalculator':
        '''ShavingSimulationCalculator: 'SmallestActiveProfile' is the original name of this property.

        Note:
            This property is readonly.
        '''

        if self.wrapped.SmallestActiveProfile.__class__.__qualname__ != 'ShavingSimulationCalculator':
            raise CastException('Failed to cast smallest_active_profile to ShavingSimulationCalculator. Expected: {}.'.format(self.wrapped.SmallestActiveProfile.__class__.__qualname__))

        return constructor.new(_738.ShavingSimulationCalculator)(self.wrapped.SmallestActiveProfile) if self.wrapped.SmallestActiveProfile else None

    @property
    def smallest_active_profile_of_type_virtual_simulation_calculator(self) -> '_739.VirtualSimulationCalculator':
        '''VirtualSimulationCalculator: 'SmallestActiveProfile' is the original name of this property.

        Note:
            This property is readonly.
        '''

        if self.wrapped.SmallestActiveProfile.__class__.__qualname__ != 'VirtualSimulationCalculator':
            raise CastException('Failed to cast smallest_active_profile to VirtualSimulationCalculator. Expected: {}.'.format(self.wrapped.SmallestActiveProfile.__class__.__qualname__))

        return constructor.new(_739.VirtualSimulationCalculator)(self.wrapped.SmallestActiveProfile) if self.wrapped.SmallestActiveProfile else None

    @property
    def smallest_active_profile_of_type_hob_simulation_calculator(self) -> '_734.HobSimulationCalculator':
        '''HobSimulationCalculator: 'SmallestActiveProfile' is the original name of this property.

        Note:
            This property is readonly.
        '''

        if self.wrapped.SmallestActiveProfile.__class__.__qualname__ != 'HobSimulationCalculator':
            raise CastException('Failed to cast smallest_active_profile to HobSimulationCalculator. Expected: {}.'.format(self.wrapped.SmallestActiveProfile.__class__.__qualname__))

        return constructor.new(_734.HobSimulationCalculator)(self.wrapped.SmallestActiveProfile) if self.wrapped.SmallestActiveProfile else None

    @property
    def smallest_active_profile_of_type_worm_grinder_simulation_calculator(self) -> '_740.WormGrinderSimulationCalculator':
        '''WormGrinderSimulationCalculator: 'SmallestActiveProfile' is the original name of this property.

        Note:
            This property is readonly.
        '''

        if self.wrapped.SmallestActiveProfile.__class__.__qualname__ != 'WormGrinderSimulationCalculator':
            raise CastException('Failed to cast smallest_active_profile to WormGrinderSimulationCalculator. Expected: {}.'.format(self.wrapped.SmallestActiveProfile.__class__.__qualname__))

        return constructor.new(_740.WormGrinderSimulationCalculator)(self.wrapped.SmallestActiveProfile) if self.wrapped.SmallestActiveProfile else None

    @property
    def minimum_thickness_virtual(self) -> '_739.VirtualSimulationCalculator':
        '''VirtualSimulationCalculator: 'MinimumThicknessVirtual' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_739.VirtualSimulationCalculator)(self.wrapped.MinimumThicknessVirtual) if self.wrapped.MinimumThicknessVirtual else None

    @property
    def average_thickness_virtual(self) -> '_739.VirtualSimulationCalculator':
        '''VirtualSimulationCalculator: 'AverageThicknessVirtual' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_739.VirtualSimulationCalculator)(self.wrapped.AverageThicknessVirtual) if self.wrapped.AverageThicknessVirtual else None

    @property
    def maximum_thickness_virtual(self) -> '_739.VirtualSimulationCalculator':
        '''VirtualSimulationCalculator: 'MaximumThicknessVirtual' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_739.VirtualSimulationCalculator)(self.wrapped.MaximumThicknessVirtual) if self.wrapped.MaximumThicknessVirtual else None

    @property
    def thickness_calculators(self) -> 'List[_719.CutterSimulationCalc]':
        '''List[CutterSimulationCalc]: 'ThicknessCalculators' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.ThicknessCalculators, constructor.new(_719.CutterSimulationCalc))
        return value

    @property
    def virtual_thickness_calculators(self) -> 'List[_739.VirtualSimulationCalculator]':
        '''List[VirtualSimulationCalculator]: 'VirtualThicknessCalculators' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.VirtualThicknessCalculators, constructor.new(_739.VirtualSimulationCalculator))
        return value

    @property
    def gear_mesh_cutter_simulations(self) -> 'List[_721.CylindricalManufacturedRealGearInMesh]':
        '''List[CylindricalManufacturedRealGearInMesh]: 'GearMeshCutterSimulations' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.GearMeshCutterSimulations, constructor.new(_721.CylindricalManufacturedRealGearInMesh))
        return value

    @property
    def gear_mesh_cutter_simulations_virtual(self) -> 'List[_722.CylindricalManufacturedVirtualGearInMesh]':
        '''List[CylindricalManufacturedVirtualGearInMesh]: 'GearMeshCutterSimulationsVirtual' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.GearMeshCutterSimulationsVirtual, constructor.new(_722.CylindricalManufacturedVirtualGearInMesh))
        return value
