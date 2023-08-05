﻿'''_491.py

CylindricalGearMeshDesign
'''


from typing import List

from mastapy._internal import constructor, conversion
from mastapy.gears.gear_designs.cylindrical import (
    _564, _566, _387, _971,
    _537, _989
)
from mastapy._internal.implicit import enum_with_selected_value, overridable
from mastapy.gears import _312, _290
from mastapy.math_utility.measured_ranges import _1108
from mastapy.gears.gear_designs import _943
from mastapy._internal.python_net import python_net_import

_CYLINDRICAL_GEAR_MESH_DESIGN = python_net_import('SMT.MastaAPI.Gears.GearDesigns.Cylindrical', 'CylindricalGearMeshDesign')


__docformat__ = 'restructuredtext en'
__all__ = ('CylindricalGearMeshDesign',)


class CylindricalGearMeshDesign(_943.GearMeshDesign):
    '''CylindricalGearMeshDesign

    This is a mastapy class.
    '''

    TYPE = _CYLINDRICAL_GEAR_MESH_DESIGN
    __hash__ = None

    def __init__(self, instance_to_wrap: 'CylindricalGearMeshDesign.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def surface_condition_factor(self) -> 'float':
        '''float: 'SurfaceConditionFactor' is the original name of this property.'''

        return self.wrapped.SurfaceConditionFactor

    @surface_condition_factor.setter
    def surface_condition_factor(self, value: 'float'):
        self.wrapped.SurfaceConditionFactor = float(value) if value else 0.0

    @property
    def profile_modification(self) -> '_564.CylindricalGearProfileModifications':
        '''CylindricalGearProfileModifications: 'ProfileModification' is the original name of this property.'''

        value = conversion.pn_to_mp_enum(self.wrapped.ProfileModification)
        return constructor.new(_564.CylindricalGearProfileModifications)(value) if value else None

    @profile_modification.setter
    def profile_modification(self, value: '_564.CylindricalGearProfileModifications'):
        value = value if value else None
        value = conversion.mp_to_pn_enum(value)
        self.wrapped.ProfileModification = value

    @property
    def filter_cutoff_wave_length(self) -> 'float':
        '''float: 'FilterCutoffWaveLength' is the original name of this property.'''

        return self.wrapped.FilterCutoffWaveLength

    @filter_cutoff_wave_length.setter
    def filter_cutoff_wave_length(self, value: 'float'):
        self.wrapped.FilterCutoffWaveLength = float(value) if value else 0.0

    @property
    def centre_distance(self) -> 'float':
        '''float: 'CentreDistance' is the original name of this property.'''

        return self.wrapped.CentreDistance

    @centre_distance.setter
    def centre_distance(self, value: 'float'):
        self.wrapped.CentreDistance = float(value) if value else 0.0

    @property
    def centre_distance_calculating_gear_teeth_numbers(self) -> 'float':
        '''float: 'CentreDistanceCalculatingGearTeethNumbers' is the original name of this property.'''

        return self.wrapped.CentreDistanceCalculatingGearTeethNumbers

    @centre_distance_calculating_gear_teeth_numbers.setter
    def centre_distance_calculating_gear_teeth_numbers(self, value: 'float'):
        self.wrapped.CentreDistanceCalculatingGearTeethNumbers = float(value) if value else 0.0

    @property
    def centre_distance_at_tight_mesh_minimum_metal(self) -> 'float':
        '''float: 'CentreDistanceAtTightMeshMinimumMetal' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return self.wrapped.CentreDistanceAtTightMeshMinimumMetal

    @property
    def centre_distance_at_tight_mesh_maximum_metal(self) -> 'float':
        '''float: 'CentreDistanceAtTightMeshMaximumMetal' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return self.wrapped.CentreDistanceAtTightMeshMaximumMetal

    @property
    def bearing_span(self) -> 'float':
        '''float: 'BearingSpan' is the original name of this property.'''

        return self.wrapped.BearingSpan

    @bearing_span.setter
    def bearing_span(self, value: 'float'):
        self.wrapped.BearingSpan = float(value) if value else 0.0

    @property
    def pinion_offset_from_bearing(self) -> 'float':
        '''float: 'PinionOffsetFromBearing' is the original name of this property.'''

        return self.wrapped.PinionOffsetFromBearing

    @pinion_offset_from_bearing.setter
    def pinion_offset_from_bearing(self, value: 'float'):
        self.wrapped.PinionOffsetFromBearing = float(value) if value else 0.0

    @property
    def lubrication_method(self) -> 'enum_with_selected_value.EnumWithSelectedValue_LubricationMethods':
        '''enum_with_selected_value.EnumWithSelectedValue_LubricationMethods: 'LubricationMethod' is the original name of this property.'''

        return constructor.new(enum_with_selected_value.EnumWithSelectedValue_LubricationMethods)(self.wrapped.LubricationMethod) if self.wrapped.LubricationMethod else None

    @lubrication_method.setter
    def lubrication_method(self, value: 'enum_with_selected_value.EnumWithSelectedValue_LubricationMethods.implicit_type()'):
        wrapper_type = enum_with_selected_value.EnumWithSelectedValue_LubricationMethods.TYPE
        enclosed_type = enum_with_selected_value.EnumWithSelectedValue_LubricationMethods.implicit_type()
        value = wrapper_type[enclosed_type](value if value else None)
        self.wrapped.LubricationMethod = value

    @property
    def user_specified_coefficient_of_friction(self) -> 'float':
        '''float: 'UserSpecifiedCoefficientOfFriction' is the original name of this property.'''

        return self.wrapped.UserSpecifiedCoefficientOfFriction

    @user_specified_coefficient_of_friction.setter
    def user_specified_coefficient_of_friction(self, value: 'float'):
        self.wrapped.UserSpecifiedCoefficientOfFriction = float(value) if value else 0.0

    @property
    def working_depth(self) -> 'float':
        '''float: 'WorkingDepth' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return self.wrapped.WorkingDepth

    @property
    def working_transverse_pressure_angle(self) -> 'float':
        '''float: 'WorkingTransversePressureAngle' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return self.wrapped.WorkingTransversePressureAngle

    @property
    def working_normal_pressure_angle(self) -> 'float':
        '''float: 'WorkingNormalPressureAngle' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return self.wrapped.WorkingNormalPressureAngle

    @property
    def working_helix_angle(self) -> 'float':
        '''float: 'WorkingHelixAngle' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return self.wrapped.WorkingHelixAngle

    @property
    def virtual_contact_ratio(self) -> 'float':
        '''float: 'VirtualContactRatio' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return self.wrapped.VirtualContactRatio

    @property
    def total_contact_ratio(self) -> 'float':
        '''float: 'TotalContactRatio' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return self.wrapped.TotalContactRatio

    @property
    def axial_contact_ratio(self) -> 'float':
        '''float: 'AxialContactRatio' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return self.wrapped.AxialContactRatio

    @property
    def transverse_contact_ratio(self) -> 'float':
        '''float: 'TransverseContactRatio' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return self.wrapped.TransverseContactRatio

    @property
    def sum_of_profile_shift_coefficient(self) -> 'float':
        '''float: 'SumOfProfileShiftCoefficient' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return self.wrapped.SumOfProfileShiftCoefficient

    @property
    def effective_face_width(self) -> 'float':
        '''float: 'EffectiveFaceWidth' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return self.wrapped.EffectiveFaceWidth

    @property
    def coefficient_of_friction(self) -> 'overridable.Overridable_float':
        '''overridable.Overridable_float: 'CoefficientOfFriction' is the original name of this property.'''

        return constructor.new(overridable.Overridable_float)(self.wrapped.CoefficientOfFriction) if self.wrapped.CoefficientOfFriction else None

    @coefficient_of_friction.setter
    def coefficient_of_friction(self, value: 'overridable.Overridable_float.implicit_type()'):
        wrapper_type = overridable.Overridable_float.TYPE
        enclosed_type = overridable.Overridable_float.implicit_type()
        value = wrapper_type[enclosed_type](enclosed_type(value) if value else 0.0)
        self.wrapped.CoefficientOfFriction = value

    @property
    def relative_tooth_engagement_time(self) -> 'overridable.Overridable_float':
        '''overridable.Overridable_float: 'RelativeToothEngagementTime' is the original name of this property.'''

        return constructor.new(overridable.Overridable_float)(self.wrapped.RelativeToothEngagementTime) if self.wrapped.RelativeToothEngagementTime else None

    @relative_tooth_engagement_time.setter
    def relative_tooth_engagement_time(self, value: 'overridable.Overridable_float.implicit_type()'):
        wrapper_type = overridable.Overridable_float.TYPE
        enclosed_type = overridable.Overridable_float.implicit_type()
        value = wrapper_type[enclosed_type](enclosed_type(value) if value else 0.0)
        self.wrapped.RelativeToothEngagementTime = value

    @property
    def heat_transfer_resistance_of_housing(self) -> 'overridable.Overridable_float':
        '''overridable.Overridable_float: 'HeatTransferResistanceOfHousing' is the original name of this property.'''

        return constructor.new(overridable.Overridable_float)(self.wrapped.HeatTransferResistanceOfHousing) if self.wrapped.HeatTransferResistanceOfHousing else None

    @heat_transfer_resistance_of_housing.setter
    def heat_transfer_resistance_of_housing(self, value: 'overridable.Overridable_float.implicit_type()'):
        wrapper_type = overridable.Overridable_float.TYPE
        enclosed_type = overridable.Overridable_float.implicit_type()
        value = wrapper_type[enclosed_type](enclosed_type(value) if value else 0.0)
        self.wrapped.HeatTransferResistanceOfHousing = value

    @property
    def type_of_mechanism_housing(self) -> '_566.TypeOfMechanismHousing':
        '''TypeOfMechanismHousing: 'TypeOfMechanismHousing' is the original name of this property.'''

        value = conversion.pn_to_mp_enum(self.wrapped.TypeOfMechanismHousing)
        return constructor.new(_566.TypeOfMechanismHousing)(value) if value else None

    @type_of_mechanism_housing.setter
    def type_of_mechanism_housing(self, value: '_566.TypeOfMechanismHousing'):
        value = value if value else None
        value = conversion.mp_to_pn_enum(value)
        self.wrapped.TypeOfMechanismHousing = value

    @property
    def percentage_of_openings_in_the_housing_surface(self) -> 'float':
        '''float: 'PercentageOfOpeningsInTheHousingSurface' is the original name of this property.'''

        return self.wrapped.PercentageOfOpeningsInTheHousingSurface

    @percentage_of_openings_in_the_housing_surface.setter
    def percentage_of_openings_in_the_housing_surface(self, value: 'float'):
        self.wrapped.PercentageOfOpeningsInTheHousingSurface = float(value) if value else 0.0

    @property
    def heat_dissipating_surface_of_housing(self) -> 'float':
        '''float: 'HeatDissipatingSurfaceOfHousing' is the original name of this property.'''

        return self.wrapped.HeatDissipatingSurfaceOfHousing

    @heat_dissipating_surface_of_housing.setter
    def heat_dissipating_surface_of_housing(self, value: 'float'):
        self.wrapped.HeatDissipatingSurfaceOfHousing = float(value) if value else 0.0

    @property
    def degree_of_tooth_loss(self) -> 'float':
        '''float: 'DegreeOfToothLoss' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return self.wrapped.DegreeOfToothLoss

    @property
    def wear_coefficient_for_a_driving_pinion(self) -> 'overridable.Overridable_float':
        '''overridable.Overridable_float: 'WearCoefficientForADrivingPinion' is the original name of this property.'''

        return constructor.new(overridable.Overridable_float)(self.wrapped.WearCoefficientForADrivingPinion) if self.wrapped.WearCoefficientForADrivingPinion else None

    @wear_coefficient_for_a_driving_pinion.setter
    def wear_coefficient_for_a_driving_pinion(self, value: 'overridable.Overridable_float.implicit_type()'):
        wrapper_type = overridable.Overridable_float.TYPE
        enclosed_type = overridable.Overridable_float.implicit_type()
        value = wrapper_type[enclosed_type](enclosed_type(value) if value else 0.0)
        self.wrapped.WearCoefficientForADrivingPinion = value

    @property
    def wear_coefficient_for_a_driven_pinion(self) -> 'overridable.Overridable_float':
        '''overridable.Overridable_float: 'WearCoefficientForADrivenPinion' is the original name of this property.'''

        return constructor.new(overridable.Overridable_float)(self.wrapped.WearCoefficientForADrivenPinion) if self.wrapped.WearCoefficientForADrivenPinion else None

    @wear_coefficient_for_a_driven_pinion.setter
    def wear_coefficient_for_a_driven_pinion(self, value: 'overridable.Overridable_float.implicit_type()'):
        wrapper_type = overridable.Overridable_float.TYPE
        enclosed_type = overridable.Overridable_float.implicit_type()
        value = wrapper_type[enclosed_type](enclosed_type(value) if value else 0.0)
        self.wrapped.WearCoefficientForADrivenPinion = value

    @property
    def ratio(self) -> 'float':
        '''float: 'Ratio' is the original name of this property.'''

        return self.wrapped.Ratio

    @ratio.setter
    def ratio(self, value: 'float'):
        self.wrapped.Ratio = float(value) if value else 0.0

    @property
    def reference_centre_distance(self) -> 'float':
        '''float: 'ReferenceCentreDistance' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return self.wrapped.ReferenceCentreDistance

    @property
    def centre_distance_with_normal_module_adjustment(self) -> 'float':
        '''float: 'CentreDistanceWithNormalModuleAdjustment' is the original name of this property.'''

        return self.wrapped.CentreDistanceWithNormalModuleAdjustment

    @centre_distance_with_normal_module_adjustment.setter
    def centre_distance_with_normal_module_adjustment(self, value: 'float'):
        self.wrapped.CentreDistanceWithNormalModuleAdjustment = float(value) if value else 0.0

    @property
    def length_of_contact(self) -> 'float':
        '''float: 'LengthOfContact' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return self.wrapped.LengthOfContact

    @property
    def tooth_loss_factor(self) -> 'float':
        '''float: 'ToothLossFactor' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return self.wrapped.ToothLossFactor

    @property
    def centre_distance_change_method(self) -> '_290.CentreDistanceChangeMethod':
        '''CentreDistanceChangeMethod: 'CentreDistanceChangeMethod' is the original name of this property.'''

        value = conversion.pn_to_mp_enum(self.wrapped.CentreDistanceChangeMethod)
        return constructor.new(_290.CentreDistanceChangeMethod)(value) if value else None

    @centre_distance_change_method.setter
    def centre_distance_change_method(self, value: '_290.CentreDistanceChangeMethod'):
        value = value if value else None
        value = conversion.mp_to_pn_enum(value)
        self.wrapped.CentreDistanceChangeMethod = value

    @property
    def cylindrical_gear_set(self) -> '_387.CylindricalGearSetDesign':
        '''CylindricalGearSetDesign: 'CylindricalGearSet' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_387.CylindricalGearSetDesign)(self.wrapped.CylindricalGearSet) if self.wrapped.CylindricalGearSet else None

    @property
    def backlash_specification(self) -> '_971.BacklashSpecification':
        '''BacklashSpecification: 'BacklashSpecification' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_971.BacklashSpecification)(self.wrapped.BacklashSpecification) if self.wrapped.BacklashSpecification else None

    @property
    def valid_normal_module_range(self) -> '_1108.ShortLengthRange':
        '''ShortLengthRange: 'ValidNormalModuleRange' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_1108.ShortLengthRange)(self.wrapped.ValidNormalModuleRange) if self.wrapped.ValidNormalModuleRange else None

    @property
    def cylindrical_gears(self) -> 'List[_537.CylindricalGearDesign]':
        '''List[CylindricalGearDesign]: 'CylindricalGears' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.CylindricalGears, constructor.new(_537.CylindricalGearDesign))
        return value

    @property
    def cylindrical_meshed_gear(self) -> 'List[_989.CylindricalMeshedGear]':
        '''List[CylindricalMeshedGear]: 'CylindricalMeshedGear' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.CylindricalMeshedGear, constructor.new(_989.CylindricalMeshedGear))
        return value

    @property
    def gear_a(self) -> '_537.CylindricalGearDesign':
        '''CylindricalGearDesign: 'GearA' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_537.CylindricalGearDesign)(self.wrapped.GearA) if self.wrapped.GearA else None

    @property
    def gear_b(self) -> '_537.CylindricalGearDesign':
        '''CylindricalGearDesign: 'GearB' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_537.CylindricalGearDesign)(self.wrapped.GearB) if self.wrapped.GearB else None

    def center_distance_for(self, helix_angle: 'float', pressure_angle: 'float', sum_of_adden_mod: 'float', sum_of_number_of_teeth: 'float', normal_module: 'float') -> 'float':
        ''' 'CenterDistanceFor' is the original name of this method.

        Args:
            helix_angle (float)
            pressure_angle (float)
            sum_of_adden_mod (float)
            sum_of_number_of_teeth (float)
            normal_module (float)

        Returns:
            float
        '''

        helix_angle = float(helix_angle)
        pressure_angle = float(pressure_angle)
        sum_of_adden_mod = float(sum_of_adden_mod)
        sum_of_number_of_teeth = float(sum_of_number_of_teeth)
        normal_module = float(normal_module)
        method_result = self.wrapped.CenterDistanceFor(helix_angle if helix_angle else 0.0, pressure_angle if pressure_angle else 0.0, sum_of_adden_mod if sum_of_adden_mod else 0.0, sum_of_number_of_teeth if sum_of_number_of_teeth else 0.0, normal_module if normal_module else 0.0)
        return method_result
