﻿'''_3239.py

AssemblyPowerFlow
'''


from typing import List

from mastapy.system_model.part_model import _1995
from mastapy._internal import constructor, conversion
from mastapy.system_model.analyses_and_results.static_loads import _6073
from mastapy.gears.analysis import _961
from mastapy.system_model.analyses_and_results.power_flows import (
    _3240, _3242, _3245, _3252,
    _3251, _3255, _3260, _3263,
    _3273, _3278, _3284, _3285,
    _3292, _3293, _3300, _3303,
    _3304, _3305, _3307, _3311,
    _3314, _3315, _3318, _3324,
    _3320, _3325, _3330, _3333,
    _3336, _3339, _3344, _3348,
    _3351, _3355, _3358, _3288,
    _3234
)
from mastapy._internal.python_net import python_net_import

_ASSEMBLY_POWER_FLOW = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.PowerFlows', 'AssemblyPowerFlow')


__docformat__ = 'restructuredtext en'
__all__ = ('AssemblyPowerFlow',)


class AssemblyPowerFlow(_3234.AbstractAssemblyPowerFlow):
    '''AssemblyPowerFlow

    This is a mastapy class.
    '''

    TYPE = _ASSEMBLY_POWER_FLOW

    __hash__ = None

    def __init__(self, instance_to_wrap: 'AssemblyPowerFlow.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def assembly_design(self) -> '_1995.Assembly':
        '''Assembly: 'AssemblyDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_1995.Assembly)(self.wrapped.AssemblyDesign) if self.wrapped.AssemblyDesign else None

    @property
    def assembly_load_case(self) -> '_6073.AssemblyLoadCase':
        '''AssemblyLoadCase: 'AssemblyLoadCase' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_6073.AssemblyLoadCase)(self.wrapped.AssemblyLoadCase) if self.wrapped.AssemblyLoadCase else None

    @property
    def rating_for_all_gear_sets(self) -> '_961.GearSetGroupDutyCycle':
        '''GearSetGroupDutyCycle: 'RatingForAllGearSets' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_961.GearSetGroupDutyCycle)(self.wrapped.RatingForAllGearSets) if self.wrapped.RatingForAllGearSets else None

    @property
    def bearings(self) -> 'List[_3240.BearingPowerFlow]':
        '''List[BearingPowerFlow]: 'Bearings' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.Bearings, constructor.new(_3240.BearingPowerFlow))
        return value

    @property
    def belt_drives(self) -> 'List[_3242.BeltDrivePowerFlow]':
        '''List[BeltDrivePowerFlow]: 'BeltDrives' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.BeltDrives, constructor.new(_3242.BeltDrivePowerFlow))
        return value

    @property
    def bevel_differential_gear_sets(self) -> 'List[_3245.BevelDifferentialGearSetPowerFlow]':
        '''List[BevelDifferentialGearSetPowerFlow]: 'BevelDifferentialGearSets' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.BevelDifferentialGearSets, constructor.new(_3245.BevelDifferentialGearSetPowerFlow))
        return value

    @property
    def bolts(self) -> 'List[_3252.BoltPowerFlow]':
        '''List[BoltPowerFlow]: 'Bolts' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.Bolts, constructor.new(_3252.BoltPowerFlow))
        return value

    @property
    def bolted_joints(self) -> 'List[_3251.BoltedJointPowerFlow]':
        '''List[BoltedJointPowerFlow]: 'BoltedJoints' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.BoltedJoints, constructor.new(_3251.BoltedJointPowerFlow))
        return value

    @property
    def clutches(self) -> 'List[_3255.ClutchPowerFlow]':
        '''List[ClutchPowerFlow]: 'Clutches' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.Clutches, constructor.new(_3255.ClutchPowerFlow))
        return value

    @property
    def concept_couplings(self) -> 'List[_3260.ConceptCouplingPowerFlow]':
        '''List[ConceptCouplingPowerFlow]: 'ConceptCouplings' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.ConceptCouplings, constructor.new(_3260.ConceptCouplingPowerFlow))
        return value

    @property
    def concept_gear_sets(self) -> 'List[_3263.ConceptGearSetPowerFlow]':
        '''List[ConceptGearSetPowerFlow]: 'ConceptGearSets' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.ConceptGearSets, constructor.new(_3263.ConceptGearSetPowerFlow))
        return value

    @property
    def cv_ts(self) -> 'List[_3273.CVTPowerFlow]':
        '''List[CVTPowerFlow]: 'CVTs' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.CVTs, constructor.new(_3273.CVTPowerFlow))
        return value

    @property
    def cylindrical_gear_sets(self) -> 'List[_3278.CylindricalGearSetPowerFlow]':
        '''List[CylindricalGearSetPowerFlow]: 'CylindricalGearSets' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.CylindricalGearSets, constructor.new(_3278.CylindricalGearSetPowerFlow))
        return value

    @property
    def face_gear_sets(self) -> 'List[_3284.FaceGearSetPowerFlow]':
        '''List[FaceGearSetPowerFlow]: 'FaceGearSets' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.FaceGearSets, constructor.new(_3284.FaceGearSetPowerFlow))
        return value

    @property
    def flexible_pin_assemblies(self) -> 'List[_3285.FlexiblePinAssemblyPowerFlow]':
        '''List[FlexiblePinAssemblyPowerFlow]: 'FlexiblePinAssemblies' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.FlexiblePinAssemblies, constructor.new(_3285.FlexiblePinAssemblyPowerFlow))
        return value

    @property
    def hypoid_gear_sets(self) -> 'List[_3292.HypoidGearSetPowerFlow]':
        '''List[HypoidGearSetPowerFlow]: 'HypoidGearSets' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.HypoidGearSets, constructor.new(_3292.HypoidGearSetPowerFlow))
        return value

    @property
    def imported_fe_components(self) -> 'List[_3293.ImportedFEComponentPowerFlow]':
        '''List[ImportedFEComponentPowerFlow]: 'ImportedFEComponents' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.ImportedFEComponents, constructor.new(_3293.ImportedFEComponentPowerFlow))
        return value

    @property
    def klingelnberg_cyclo_palloid_hypoid_gear_sets(self) -> 'List[_3300.KlingelnbergCycloPalloidHypoidGearSetPowerFlow]':
        '''List[KlingelnbergCycloPalloidHypoidGearSetPowerFlow]: 'KlingelnbergCycloPalloidHypoidGearSets' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.KlingelnbergCycloPalloidHypoidGearSets, constructor.new(_3300.KlingelnbergCycloPalloidHypoidGearSetPowerFlow))
        return value

    @property
    def klingelnberg_cyclo_palloid_spiral_bevel_gear_sets(self) -> 'List[_3303.KlingelnbergCycloPalloidSpiralBevelGearSetPowerFlow]':
        '''List[KlingelnbergCycloPalloidSpiralBevelGearSetPowerFlow]: 'KlingelnbergCycloPalloidSpiralBevelGearSets' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.KlingelnbergCycloPalloidSpiralBevelGearSets, constructor.new(_3303.KlingelnbergCycloPalloidSpiralBevelGearSetPowerFlow))
        return value

    @property
    def mass_discs(self) -> 'List[_3304.MassDiscPowerFlow]':
        '''List[MassDiscPowerFlow]: 'MassDiscs' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.MassDiscs, constructor.new(_3304.MassDiscPowerFlow))
        return value

    @property
    def measurement_components(self) -> 'List[_3305.MeasurementComponentPowerFlow]':
        '''List[MeasurementComponentPowerFlow]: 'MeasurementComponents' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.MeasurementComponents, constructor.new(_3305.MeasurementComponentPowerFlow))
        return value

    @property
    def oil_seals(self) -> 'List[_3307.OilSealPowerFlow]':
        '''List[OilSealPowerFlow]: 'OilSeals' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.OilSeals, constructor.new(_3307.OilSealPowerFlow))
        return value

    @property
    def part_to_part_shear_couplings(self) -> 'List[_3311.PartToPartShearCouplingPowerFlow]':
        '''List[PartToPartShearCouplingPowerFlow]: 'PartToPartShearCouplings' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.PartToPartShearCouplings, constructor.new(_3311.PartToPartShearCouplingPowerFlow))
        return value

    @property
    def planet_carriers(self) -> 'List[_3314.PlanetCarrierPowerFlow]':
        '''List[PlanetCarrierPowerFlow]: 'PlanetCarriers' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.PlanetCarriers, constructor.new(_3314.PlanetCarrierPowerFlow))
        return value

    @property
    def point_loads(self) -> 'List[_3315.PointLoadPowerFlow]':
        '''List[PointLoadPowerFlow]: 'PointLoads' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.PointLoads, constructor.new(_3315.PointLoadPowerFlow))
        return value

    @property
    def power_loads(self) -> 'List[_3318.PowerLoadPowerFlow]':
        '''List[PowerLoadPowerFlow]: 'PowerLoads' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.PowerLoads, constructor.new(_3318.PowerLoadPowerFlow))
        return value

    @property
    def shaft_hub_connections(self) -> 'List[_3324.ShaftHubConnectionPowerFlow]':
        '''List[ShaftHubConnectionPowerFlow]: 'ShaftHubConnections' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.ShaftHubConnections, constructor.new(_3324.ShaftHubConnectionPowerFlow))
        return value

    @property
    def rolling_ring_assemblies(self) -> 'List[_3320.RollingRingAssemblyPowerFlow]':
        '''List[RollingRingAssemblyPowerFlow]: 'RollingRingAssemblies' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.RollingRingAssemblies, constructor.new(_3320.RollingRingAssemblyPowerFlow))
        return value

    @property
    def shafts(self) -> 'List[_3325.ShaftPowerFlow]':
        '''List[ShaftPowerFlow]: 'Shafts' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.Shafts, constructor.new(_3325.ShaftPowerFlow))
        return value

    @property
    def spiral_bevel_gear_sets(self) -> 'List[_3330.SpiralBevelGearSetPowerFlow]':
        '''List[SpiralBevelGearSetPowerFlow]: 'SpiralBevelGearSets' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.SpiralBevelGearSets, constructor.new(_3330.SpiralBevelGearSetPowerFlow))
        return value

    @property
    def spring_dampers(self) -> 'List[_3333.SpringDamperPowerFlow]':
        '''List[SpringDamperPowerFlow]: 'SpringDampers' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.SpringDampers, constructor.new(_3333.SpringDamperPowerFlow))
        return value

    @property
    def straight_bevel_diff_gear_sets(self) -> 'List[_3336.StraightBevelDiffGearSetPowerFlow]':
        '''List[StraightBevelDiffGearSetPowerFlow]: 'StraightBevelDiffGearSets' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.StraightBevelDiffGearSets, constructor.new(_3336.StraightBevelDiffGearSetPowerFlow))
        return value

    @property
    def straight_bevel_gear_sets(self) -> 'List[_3339.StraightBevelGearSetPowerFlow]':
        '''List[StraightBevelGearSetPowerFlow]: 'StraightBevelGearSets' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.StraightBevelGearSets, constructor.new(_3339.StraightBevelGearSetPowerFlow))
        return value

    @property
    def synchronisers(self) -> 'List[_3344.SynchroniserPowerFlow]':
        '''List[SynchroniserPowerFlow]: 'Synchronisers' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.Synchronisers, constructor.new(_3344.SynchroniserPowerFlow))
        return value

    @property
    def torque_converters(self) -> 'List[_3348.TorqueConverterPowerFlow]':
        '''List[TorqueConverterPowerFlow]: 'TorqueConverters' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.TorqueConverters, constructor.new(_3348.TorqueConverterPowerFlow))
        return value

    @property
    def unbalanced_masses(self) -> 'List[_3351.UnbalancedMassPowerFlow]':
        '''List[UnbalancedMassPowerFlow]: 'UnbalancedMasses' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.UnbalancedMasses, constructor.new(_3351.UnbalancedMassPowerFlow))
        return value

    @property
    def worm_gear_sets(self) -> 'List[_3355.WormGearSetPowerFlow]':
        '''List[WormGearSetPowerFlow]: 'WormGearSets' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.WormGearSets, constructor.new(_3355.WormGearSetPowerFlow))
        return value

    @property
    def zerol_bevel_gear_sets(self) -> 'List[_3358.ZerolBevelGearSetPowerFlow]':
        '''List[ZerolBevelGearSetPowerFlow]: 'ZerolBevelGearSets' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.ZerolBevelGearSets, constructor.new(_3358.ZerolBevelGearSetPowerFlow))
        return value

    @property
    def loaded_gear_sets(self) -> 'List[_3288.GearSetPowerFlow]':
        '''List[GearSetPowerFlow]: 'LoadedGearSets' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.LoadedGearSets, constructor.new(_3288.GearSetPowerFlow))
        return value
