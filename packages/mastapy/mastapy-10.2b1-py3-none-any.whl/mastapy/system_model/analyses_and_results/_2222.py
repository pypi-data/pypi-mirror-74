﻿'''_2222.py

CompoundSystemDeflectionAnalysis
'''


from typing import Iterable

from mastapy.system_model.part_model import (
    _1996, _1997, _2000, _2002,
    _2003, _2004, _2007, _2008,
    _2011, _2012, _1995, _2013,
    _2016, _2020, _2021, _2022,
    _2024, _2026, _2027, _2029,
    _2030, _2032, _2034, _2035,
    _2036
)
from mastapy.system_model.analyses_and_results.system_deflections.compound import (
    _2373, _2374, _2379, _2390,
    _2391, _2396, _2407, _2418,
    _2419, _2423, _2378, _2427,
    _2431, _2442, _2443, _2444,
    _2445, _2446, _2452, _2453,
    _2454, _2459, _2464, _2487,
    _2488, _2460, _2400, _2402,
    _2420, _2422, _2375, _2377,
    _2382, _2384, _2385, _2386,
    _2387, _2389, _2403, _2405,
    _2414, _2416, _2417, _2424,
    _2426, _2428, _2430, _2433,
    _2435, _2436, _2438, _2439,
    _2441, _2451, _2465, _2467,
    _2471, _2473, _2474, _2476,
    _2477, _2478, _2489, _2491,
    _2492, _2494, _2447, _2449,
    _2381, _2392, _2394, _2397,
    _2399, _2408, _2410, _2412,
    _2413, _2455, _2462, _2457,
    _2456, _2468, _2470, _2479,
    _2480, _2481, _2482, _2483,
    _2485, _2486, _2411, _2380,
    _2395, _2406, _2432, _2450,
    _2458, _2463, _2383, _2401,
    _2421, _2472, _2388, _2404,
    _2376, _2415, _2429, _2434,
    _2437, _2440, _2466, _2475,
    _2490, _2493, _2425, _2448,
    _2393, _2398, _2409, _2469,
    _2484
)
from mastapy._internal import constructor, conversion
from mastapy.system_model.part_model.shaft_model import _2039
from mastapy.system_model.part_model.gears import (
    _2077, _2078, _2084, _2085,
    _2069, _2070, _2071, _2072,
    _2073, _2074, _2075, _2076,
    _2079, _2080, _2081, _2082,
    _2083, _2086, _2088, _2090,
    _2091, _2092, _2093, _2094,
    _2095, _2096, _2097, _2098,
    _2099, _2100, _2101, _2102,
    _2103, _2104, _2105, _2106,
    _2107, _2108, _2109, _2110
)
from mastapy.system_model.part_model.couplings import (
    _2139, _2140, _2128, _2130,
    _2131, _2133, _2134, _2135,
    _2136, _2137, _2138, _2141,
    _2149, _2147, _2148, _2150,
    _2151, _2152, _2154, _2155,
    _2156, _2157, _2158, _2160
)
from mastapy.system_model.connections_and_sockets import (
    _1852, _1847, _1848, _1851,
    _1860, _1863, _1867, _1871
)
from mastapy.system_model.connections_and_sockets.gears import (
    _1877, _1881, _1887, _1901,
    _1879, _1883, _1875, _1885,
    _1891, _1894, _1895, _1896,
    _1899, _1903, _1905, _1907,
    _1889
)
from mastapy.system_model.connections_and_sockets.couplings import (
    _1915, _1909, _1911, _1913,
    _1917, _1919
)
from mastapy.system_model.analyses_and_results import _2169
from mastapy._internal.python_net import python_net_import

_COMPOUND_SYSTEM_DEFLECTION_ANALYSIS = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults', 'CompoundSystemDeflectionAnalysis')


__docformat__ = 'restructuredtext en'
__all__ = ('CompoundSystemDeflectionAnalysis',)


class CompoundSystemDeflectionAnalysis(_2169.CompoundAnalysis):
    '''CompoundSystemDeflectionAnalysis

    This is a mastapy class.
    '''

    TYPE = _COMPOUND_SYSTEM_DEFLECTION_ANALYSIS

    __hash__ = None

    def __init__(self, instance_to_wrap: 'CompoundSystemDeflectionAnalysis.TYPE'):
        super().__init__(instance_to_wrap)

    def results_for_abstract_assembly(self, design_entity: '_1996.AbstractAssembly') -> 'Iterable[_2373.AbstractAssemblyCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.AbstractAssembly)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.AbstractAssemblyCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2373.AbstractAssemblyCompoundSystemDeflection))

    def results_for_abstract_shaft_or_housing(self, design_entity: '_1997.AbstractShaftOrHousing') -> 'Iterable[_2374.AbstractShaftOrHousingCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.AbstractShaftOrHousing)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.AbstractShaftOrHousingCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2374.AbstractShaftOrHousingCompoundSystemDeflection))

    def results_for_bearing(self, design_entity: '_2000.Bearing') -> 'Iterable[_2379.BearingCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.Bearing)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.BearingCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2379.BearingCompoundSystemDeflection))

    def results_for_bolt(self, design_entity: '_2002.Bolt') -> 'Iterable[_2390.BoltCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.Bolt)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.BoltCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2390.BoltCompoundSystemDeflection))

    def results_for_bolted_joint(self, design_entity: '_2003.BoltedJoint') -> 'Iterable[_2391.BoltedJointCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.BoltedJoint)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.BoltedJointCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2391.BoltedJointCompoundSystemDeflection))

    def results_for_component(self, design_entity: '_2004.Component') -> 'Iterable[_2396.ComponentCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.Component)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.ComponentCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2396.ComponentCompoundSystemDeflection))

    def results_for_connector(self, design_entity: '_2007.Connector') -> 'Iterable[_2407.ConnectorCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.Connector)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.ConnectorCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2407.ConnectorCompoundSystemDeflection))

    def results_for_datum(self, design_entity: '_2008.Datum') -> 'Iterable[_2418.DatumCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.Datum)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.DatumCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2418.DatumCompoundSystemDeflection))

    def results_for_external_cad_model(self, design_entity: '_2011.ExternalCADModel') -> 'Iterable[_2419.ExternalCADModelCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.ExternalCADModel)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.ExternalCADModelCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2419.ExternalCADModelCompoundSystemDeflection))

    def results_for_flexible_pin_assembly(self, design_entity: '_2012.FlexiblePinAssembly') -> 'Iterable[_2423.FlexiblePinAssemblyCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.FlexiblePinAssembly)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.FlexiblePinAssemblyCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2423.FlexiblePinAssemblyCompoundSystemDeflection))

    def results_for_assembly(self, design_entity: '_1995.Assembly') -> 'Iterable[_2378.AssemblyCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.Assembly)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.AssemblyCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2378.AssemblyCompoundSystemDeflection))

    def results_for_guide_dxf_model(self, design_entity: '_2013.GuideDxfModel') -> 'Iterable[_2427.GuideDxfModelCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.GuideDxfModel)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.GuideDxfModelCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2427.GuideDxfModelCompoundSystemDeflection))

    def results_for_imported_fe_component(self, design_entity: '_2016.ImportedFEComponent') -> 'Iterable[_2431.ImportedFEComponentCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.ImportedFEComponent)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.ImportedFEComponentCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2431.ImportedFEComponentCompoundSystemDeflection))

    def results_for_mass_disc(self, design_entity: '_2020.MassDisc') -> 'Iterable[_2442.MassDiscCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.MassDisc)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.MassDiscCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2442.MassDiscCompoundSystemDeflection))

    def results_for_measurement_component(self, design_entity: '_2021.MeasurementComponent') -> 'Iterable[_2443.MeasurementComponentCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.MeasurementComponent)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.MeasurementComponentCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2443.MeasurementComponentCompoundSystemDeflection))

    def results_for_mountable_component(self, design_entity: '_2022.MountableComponent') -> 'Iterable[_2444.MountableComponentCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.MountableComponent)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.MountableComponentCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2444.MountableComponentCompoundSystemDeflection))

    def results_for_oil_seal(self, design_entity: '_2024.OilSeal') -> 'Iterable[_2445.OilSealCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.OilSeal)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.OilSealCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2445.OilSealCompoundSystemDeflection))

    def results_for_part(self, design_entity: '_2026.Part') -> 'Iterable[_2446.PartCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.Part)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.PartCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2446.PartCompoundSystemDeflection))

    def results_for_planet_carrier(self, design_entity: '_2027.PlanetCarrier') -> 'Iterable[_2452.PlanetCarrierCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.PlanetCarrier)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.PlanetCarrierCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2452.PlanetCarrierCompoundSystemDeflection))

    def results_for_point_load(self, design_entity: '_2029.PointLoad') -> 'Iterable[_2453.PointLoadCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.PointLoad)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.PointLoadCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2453.PointLoadCompoundSystemDeflection))

    def results_for_power_load(self, design_entity: '_2030.PowerLoad') -> 'Iterable[_2454.PowerLoadCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.PowerLoad)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.PowerLoadCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2454.PowerLoadCompoundSystemDeflection))

    def results_for_root_assembly(self, design_entity: '_2032.RootAssembly') -> 'Iterable[_2459.RootAssemblyCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.RootAssembly)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.RootAssemblyCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2459.RootAssemblyCompoundSystemDeflection))

    def results_for_specialised_assembly(self, design_entity: '_2034.SpecialisedAssembly') -> 'Iterable[_2464.SpecialisedAssemblyCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.SpecialisedAssembly)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.SpecialisedAssemblyCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2464.SpecialisedAssemblyCompoundSystemDeflection))

    def results_for_unbalanced_mass(self, design_entity: '_2035.UnbalancedMass') -> 'Iterable[_2487.UnbalancedMassCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.UnbalancedMass)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.UnbalancedMassCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2487.UnbalancedMassCompoundSystemDeflection))

    def results_for_virtual_component(self, design_entity: '_2036.VirtualComponent') -> 'Iterable[_2488.VirtualComponentCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.VirtualComponent)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.VirtualComponentCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2488.VirtualComponentCompoundSystemDeflection))

    def results_for_shaft(self, design_entity: '_2039.Shaft') -> 'Iterable[_2460.ShaftCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.shaft_model.Shaft)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.ShaftCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2460.ShaftCompoundSystemDeflection))

    def results_for_concept_gear(self, design_entity: '_2077.ConceptGear') -> 'Iterable[_2400.ConceptGearCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.gears.ConceptGear)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.ConceptGearCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2400.ConceptGearCompoundSystemDeflection))

    def results_for_concept_gear_set(self, design_entity: '_2078.ConceptGearSet') -> 'Iterable[_2402.ConceptGearSetCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.gears.ConceptGearSet)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.ConceptGearSetCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2402.ConceptGearSetCompoundSystemDeflection))

    def results_for_face_gear(self, design_entity: '_2084.FaceGear') -> 'Iterable[_2420.FaceGearCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.gears.FaceGear)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.FaceGearCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2420.FaceGearCompoundSystemDeflection))

    def results_for_face_gear_set(self, design_entity: '_2085.FaceGearSet') -> 'Iterable[_2422.FaceGearSetCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.gears.FaceGearSet)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.FaceGearSetCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2422.FaceGearSetCompoundSystemDeflection))

    def results_for_agma_gleason_conical_gear(self, design_entity: '_2069.AGMAGleasonConicalGear') -> 'Iterable[_2375.AGMAGleasonConicalGearCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.gears.AGMAGleasonConicalGear)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.AGMAGleasonConicalGearCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2375.AGMAGleasonConicalGearCompoundSystemDeflection))

    def results_for_agma_gleason_conical_gear_set(self, design_entity: '_2070.AGMAGleasonConicalGearSet') -> 'Iterable[_2377.AGMAGleasonConicalGearSetCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.gears.AGMAGleasonConicalGearSet)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.AGMAGleasonConicalGearSetCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2377.AGMAGleasonConicalGearSetCompoundSystemDeflection))

    def results_for_bevel_differential_gear(self, design_entity: '_2071.BevelDifferentialGear') -> 'Iterable[_2382.BevelDifferentialGearCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.gears.BevelDifferentialGear)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.BevelDifferentialGearCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2382.BevelDifferentialGearCompoundSystemDeflection))

    def results_for_bevel_differential_gear_set(self, design_entity: '_2072.BevelDifferentialGearSet') -> 'Iterable[_2384.BevelDifferentialGearSetCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.gears.BevelDifferentialGearSet)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.BevelDifferentialGearSetCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2384.BevelDifferentialGearSetCompoundSystemDeflection))

    def results_for_bevel_differential_planet_gear(self, design_entity: '_2073.BevelDifferentialPlanetGear') -> 'Iterable[_2385.BevelDifferentialPlanetGearCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.gears.BevelDifferentialPlanetGear)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.BevelDifferentialPlanetGearCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2385.BevelDifferentialPlanetGearCompoundSystemDeflection))

    def results_for_bevel_differential_sun_gear(self, design_entity: '_2074.BevelDifferentialSunGear') -> 'Iterable[_2386.BevelDifferentialSunGearCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.gears.BevelDifferentialSunGear)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.BevelDifferentialSunGearCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2386.BevelDifferentialSunGearCompoundSystemDeflection))

    def results_for_bevel_gear(self, design_entity: '_2075.BevelGear') -> 'Iterable[_2387.BevelGearCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.gears.BevelGear)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.BevelGearCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2387.BevelGearCompoundSystemDeflection))

    def results_for_bevel_gear_set(self, design_entity: '_2076.BevelGearSet') -> 'Iterable[_2389.BevelGearSetCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.gears.BevelGearSet)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.BevelGearSetCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2389.BevelGearSetCompoundSystemDeflection))

    def results_for_conical_gear(self, design_entity: '_2079.ConicalGear') -> 'Iterable[_2403.ConicalGearCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.gears.ConicalGear)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.ConicalGearCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2403.ConicalGearCompoundSystemDeflection))

    def results_for_conical_gear_set(self, design_entity: '_2080.ConicalGearSet') -> 'Iterable[_2405.ConicalGearSetCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.gears.ConicalGearSet)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.ConicalGearSetCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2405.ConicalGearSetCompoundSystemDeflection))

    def results_for_cylindrical_gear(self, design_entity: '_2081.CylindricalGear') -> 'Iterable[_2414.CylindricalGearCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.gears.CylindricalGear)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.CylindricalGearCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2414.CylindricalGearCompoundSystemDeflection))

    def results_for_cylindrical_gear_set(self, design_entity: '_2082.CylindricalGearSet') -> 'Iterable[_2416.CylindricalGearSetCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.gears.CylindricalGearSet)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.CylindricalGearSetCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2416.CylindricalGearSetCompoundSystemDeflection))

    def results_for_cylindrical_planet_gear(self, design_entity: '_2083.CylindricalPlanetGear') -> 'Iterable[_2417.CylindricalPlanetGearCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.gears.CylindricalPlanetGear)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.CylindricalPlanetGearCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2417.CylindricalPlanetGearCompoundSystemDeflection))

    def results_for_gear(self, design_entity: '_2086.Gear') -> 'Iterable[_2424.GearCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.gears.Gear)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.GearCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2424.GearCompoundSystemDeflection))

    def results_for_gear_set(self, design_entity: '_2088.GearSet') -> 'Iterable[_2426.GearSetCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.gears.GearSet)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.GearSetCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2426.GearSetCompoundSystemDeflection))

    def results_for_hypoid_gear(self, design_entity: '_2090.HypoidGear') -> 'Iterable[_2428.HypoidGearCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.gears.HypoidGear)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.HypoidGearCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2428.HypoidGearCompoundSystemDeflection))

    def results_for_hypoid_gear_set(self, design_entity: '_2091.HypoidGearSet') -> 'Iterable[_2430.HypoidGearSetCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.gears.HypoidGearSet)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.HypoidGearSetCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2430.HypoidGearSetCompoundSystemDeflection))

    def results_for_klingelnberg_cyclo_palloid_conical_gear(self, design_entity: '_2092.KlingelnbergCycloPalloidConicalGear') -> 'Iterable[_2433.KlingelnbergCycloPalloidConicalGearCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.gears.KlingelnbergCycloPalloidConicalGear)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.KlingelnbergCycloPalloidConicalGearCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2433.KlingelnbergCycloPalloidConicalGearCompoundSystemDeflection))

    def results_for_klingelnberg_cyclo_palloid_conical_gear_set(self, design_entity: '_2093.KlingelnbergCycloPalloidConicalGearSet') -> 'Iterable[_2435.KlingelnbergCycloPalloidConicalGearSetCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.gears.KlingelnbergCycloPalloidConicalGearSet)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.KlingelnbergCycloPalloidConicalGearSetCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2435.KlingelnbergCycloPalloidConicalGearSetCompoundSystemDeflection))

    def results_for_klingelnberg_cyclo_palloid_hypoid_gear(self, design_entity: '_2094.KlingelnbergCycloPalloidHypoidGear') -> 'Iterable[_2436.KlingelnbergCycloPalloidHypoidGearCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.gears.KlingelnbergCycloPalloidHypoidGear)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.KlingelnbergCycloPalloidHypoidGearCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2436.KlingelnbergCycloPalloidHypoidGearCompoundSystemDeflection))

    def results_for_klingelnberg_cyclo_palloid_hypoid_gear_set(self, design_entity: '_2095.KlingelnbergCycloPalloidHypoidGearSet') -> 'Iterable[_2438.KlingelnbergCycloPalloidHypoidGearSetCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.gears.KlingelnbergCycloPalloidHypoidGearSet)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.KlingelnbergCycloPalloidHypoidGearSetCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2438.KlingelnbergCycloPalloidHypoidGearSetCompoundSystemDeflection))

    def results_for_klingelnberg_cyclo_palloid_spiral_bevel_gear(self, design_entity: '_2096.KlingelnbergCycloPalloidSpiralBevelGear') -> 'Iterable[_2439.KlingelnbergCycloPalloidSpiralBevelGearCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.gears.KlingelnbergCycloPalloidSpiralBevelGear)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.KlingelnbergCycloPalloidSpiralBevelGearCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2439.KlingelnbergCycloPalloidSpiralBevelGearCompoundSystemDeflection))

    def results_for_klingelnberg_cyclo_palloid_spiral_bevel_gear_set(self, design_entity: '_2097.KlingelnbergCycloPalloidSpiralBevelGearSet') -> 'Iterable[_2441.KlingelnbergCycloPalloidSpiralBevelGearSetCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.gears.KlingelnbergCycloPalloidSpiralBevelGearSet)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.KlingelnbergCycloPalloidSpiralBevelGearSetCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2441.KlingelnbergCycloPalloidSpiralBevelGearSetCompoundSystemDeflection))

    def results_for_planetary_gear_set(self, design_entity: '_2098.PlanetaryGearSet') -> 'Iterable[_2451.PlanetaryGearSetCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.gears.PlanetaryGearSet)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.PlanetaryGearSetCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2451.PlanetaryGearSetCompoundSystemDeflection))

    def results_for_spiral_bevel_gear(self, design_entity: '_2099.SpiralBevelGear') -> 'Iterable[_2465.SpiralBevelGearCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.gears.SpiralBevelGear)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.SpiralBevelGearCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2465.SpiralBevelGearCompoundSystemDeflection))

    def results_for_spiral_bevel_gear_set(self, design_entity: '_2100.SpiralBevelGearSet') -> 'Iterable[_2467.SpiralBevelGearSetCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.gears.SpiralBevelGearSet)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.SpiralBevelGearSetCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2467.SpiralBevelGearSetCompoundSystemDeflection))

    def results_for_straight_bevel_diff_gear(self, design_entity: '_2101.StraightBevelDiffGear') -> 'Iterable[_2471.StraightBevelDiffGearCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.gears.StraightBevelDiffGear)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.StraightBevelDiffGearCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2471.StraightBevelDiffGearCompoundSystemDeflection))

    def results_for_straight_bevel_diff_gear_set(self, design_entity: '_2102.StraightBevelDiffGearSet') -> 'Iterable[_2473.StraightBevelDiffGearSetCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.gears.StraightBevelDiffGearSet)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.StraightBevelDiffGearSetCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2473.StraightBevelDiffGearSetCompoundSystemDeflection))

    def results_for_straight_bevel_gear(self, design_entity: '_2103.StraightBevelGear') -> 'Iterable[_2474.StraightBevelGearCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.gears.StraightBevelGear)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.StraightBevelGearCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2474.StraightBevelGearCompoundSystemDeflection))

    def results_for_straight_bevel_gear_set(self, design_entity: '_2104.StraightBevelGearSet') -> 'Iterable[_2476.StraightBevelGearSetCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.gears.StraightBevelGearSet)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.StraightBevelGearSetCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2476.StraightBevelGearSetCompoundSystemDeflection))

    def results_for_straight_bevel_planet_gear(self, design_entity: '_2105.StraightBevelPlanetGear') -> 'Iterable[_2477.StraightBevelPlanetGearCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.gears.StraightBevelPlanetGear)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.StraightBevelPlanetGearCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2477.StraightBevelPlanetGearCompoundSystemDeflection))

    def results_for_straight_bevel_sun_gear(self, design_entity: '_2106.StraightBevelSunGear') -> 'Iterable[_2478.StraightBevelSunGearCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.gears.StraightBevelSunGear)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.StraightBevelSunGearCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2478.StraightBevelSunGearCompoundSystemDeflection))

    def results_for_worm_gear(self, design_entity: '_2107.WormGear') -> 'Iterable[_2489.WormGearCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.gears.WormGear)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.WormGearCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2489.WormGearCompoundSystemDeflection))

    def results_for_worm_gear_set(self, design_entity: '_2108.WormGearSet') -> 'Iterable[_2491.WormGearSetCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.gears.WormGearSet)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.WormGearSetCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2491.WormGearSetCompoundSystemDeflection))

    def results_for_zerol_bevel_gear(self, design_entity: '_2109.ZerolBevelGear') -> 'Iterable[_2492.ZerolBevelGearCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.gears.ZerolBevelGear)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.ZerolBevelGearCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2492.ZerolBevelGearCompoundSystemDeflection))

    def results_for_zerol_bevel_gear_set(self, design_entity: '_2110.ZerolBevelGearSet') -> 'Iterable[_2494.ZerolBevelGearSetCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.gears.ZerolBevelGearSet)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.ZerolBevelGearSetCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2494.ZerolBevelGearSetCompoundSystemDeflection))

    def results_for_part_to_part_shear_coupling(self, design_entity: '_2139.PartToPartShearCoupling') -> 'Iterable[_2447.PartToPartShearCouplingCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.couplings.PartToPartShearCoupling)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.PartToPartShearCouplingCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2447.PartToPartShearCouplingCompoundSystemDeflection))

    def results_for_part_to_part_shear_coupling_half(self, design_entity: '_2140.PartToPartShearCouplingHalf') -> 'Iterable[_2449.PartToPartShearCouplingHalfCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.couplings.PartToPartShearCouplingHalf)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.PartToPartShearCouplingHalfCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2449.PartToPartShearCouplingHalfCompoundSystemDeflection))

    def results_for_belt_drive(self, design_entity: '_2128.BeltDrive') -> 'Iterable[_2381.BeltDriveCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.couplings.BeltDrive)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.BeltDriveCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2381.BeltDriveCompoundSystemDeflection))

    def results_for_clutch(self, design_entity: '_2130.Clutch') -> 'Iterable[_2392.ClutchCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.couplings.Clutch)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.ClutchCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2392.ClutchCompoundSystemDeflection))

    def results_for_clutch_half(self, design_entity: '_2131.ClutchHalf') -> 'Iterable[_2394.ClutchHalfCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.couplings.ClutchHalf)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.ClutchHalfCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2394.ClutchHalfCompoundSystemDeflection))

    def results_for_concept_coupling(self, design_entity: '_2133.ConceptCoupling') -> 'Iterable[_2397.ConceptCouplingCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.couplings.ConceptCoupling)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.ConceptCouplingCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2397.ConceptCouplingCompoundSystemDeflection))

    def results_for_concept_coupling_half(self, design_entity: '_2134.ConceptCouplingHalf') -> 'Iterable[_2399.ConceptCouplingHalfCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.couplings.ConceptCouplingHalf)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.ConceptCouplingHalfCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2399.ConceptCouplingHalfCompoundSystemDeflection))

    def results_for_coupling(self, design_entity: '_2135.Coupling') -> 'Iterable[_2408.CouplingCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.couplings.Coupling)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.CouplingCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2408.CouplingCompoundSystemDeflection))

    def results_for_coupling_half(self, design_entity: '_2136.CouplingHalf') -> 'Iterable[_2410.CouplingHalfCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.couplings.CouplingHalf)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.CouplingHalfCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2410.CouplingHalfCompoundSystemDeflection))

    def results_for_cvt(self, design_entity: '_2137.CVT') -> 'Iterable[_2412.CVTCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.couplings.CVT)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.CVTCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2412.CVTCompoundSystemDeflection))

    def results_for_cvt_pulley(self, design_entity: '_2138.CVTPulley') -> 'Iterable[_2413.CVTPulleyCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.couplings.CVTPulley)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.CVTPulleyCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2413.CVTPulleyCompoundSystemDeflection))

    def results_for_pulley(self, design_entity: '_2141.Pulley') -> 'Iterable[_2455.PulleyCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.couplings.Pulley)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.PulleyCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2455.PulleyCompoundSystemDeflection))

    def results_for_shaft_hub_connection(self, design_entity: '_2149.ShaftHubConnection') -> 'Iterable[_2462.ShaftHubConnectionCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.couplings.ShaftHubConnection)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.ShaftHubConnectionCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2462.ShaftHubConnectionCompoundSystemDeflection))

    def results_for_rolling_ring(self, design_entity: '_2147.RollingRing') -> 'Iterable[_2457.RollingRingCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.couplings.RollingRing)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.RollingRingCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2457.RollingRingCompoundSystemDeflection))

    def results_for_rolling_ring_assembly(self, design_entity: '_2148.RollingRingAssembly') -> 'Iterable[_2456.RollingRingAssemblyCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.couplings.RollingRingAssembly)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.RollingRingAssemblyCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2456.RollingRingAssemblyCompoundSystemDeflection))

    def results_for_spring_damper(self, design_entity: '_2150.SpringDamper') -> 'Iterable[_2468.SpringDamperCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.couplings.SpringDamper)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.SpringDamperCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2468.SpringDamperCompoundSystemDeflection))

    def results_for_spring_damper_half(self, design_entity: '_2151.SpringDamperHalf') -> 'Iterable[_2470.SpringDamperHalfCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.couplings.SpringDamperHalf)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.SpringDamperHalfCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2470.SpringDamperHalfCompoundSystemDeflection))

    def results_for_synchroniser(self, design_entity: '_2152.Synchroniser') -> 'Iterable[_2479.SynchroniserCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.couplings.Synchroniser)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.SynchroniserCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2479.SynchroniserCompoundSystemDeflection))

    def results_for_synchroniser_half(self, design_entity: '_2154.SynchroniserHalf') -> 'Iterable[_2480.SynchroniserHalfCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.couplings.SynchroniserHalf)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.SynchroniserHalfCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2480.SynchroniserHalfCompoundSystemDeflection))

    def results_for_synchroniser_part(self, design_entity: '_2155.SynchroniserPart') -> 'Iterable[_2481.SynchroniserPartCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.couplings.SynchroniserPart)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.SynchroniserPartCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2481.SynchroniserPartCompoundSystemDeflection))

    def results_for_synchroniser_sleeve(self, design_entity: '_2156.SynchroniserSleeve') -> 'Iterable[_2482.SynchroniserSleeveCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.couplings.SynchroniserSleeve)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.SynchroniserSleeveCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2482.SynchroniserSleeveCompoundSystemDeflection))

    def results_for_torque_converter(self, design_entity: '_2157.TorqueConverter') -> 'Iterable[_2483.TorqueConverterCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.couplings.TorqueConverter)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.TorqueConverterCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2483.TorqueConverterCompoundSystemDeflection))

    def results_for_torque_converter_pump(self, design_entity: '_2158.TorqueConverterPump') -> 'Iterable[_2485.TorqueConverterPumpCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.couplings.TorqueConverterPump)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.TorqueConverterPumpCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2485.TorqueConverterPumpCompoundSystemDeflection))

    def results_for_torque_converter_turbine(self, design_entity: '_2160.TorqueConverterTurbine') -> 'Iterable[_2486.TorqueConverterTurbineCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.part_model.couplings.TorqueConverterTurbine)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.TorqueConverterTurbineCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2486.TorqueConverterTurbineCompoundSystemDeflection))

    def results_for_cvt_belt_connection(self, design_entity: '_1852.CVTBeltConnection') -> 'Iterable[_2411.CVTBeltConnectionCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.connections_and_sockets.CVTBeltConnection)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.CVTBeltConnectionCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2411.CVTBeltConnectionCompoundSystemDeflection))

    def results_for_belt_connection(self, design_entity: '_1847.BeltConnection') -> 'Iterable[_2380.BeltConnectionCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.connections_and_sockets.BeltConnection)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.BeltConnectionCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2380.BeltConnectionCompoundSystemDeflection))

    def results_for_coaxial_connection(self, design_entity: '_1848.CoaxialConnection') -> 'Iterable[_2395.CoaxialConnectionCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.connections_and_sockets.CoaxialConnection)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.CoaxialConnectionCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2395.CoaxialConnectionCompoundSystemDeflection))

    def results_for_connection(self, design_entity: '_1851.Connection') -> 'Iterable[_2406.ConnectionCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.connections_and_sockets.Connection)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.ConnectionCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2406.ConnectionCompoundSystemDeflection))

    def results_for_inter_mountable_component_connection(self, design_entity: '_1860.InterMountableComponentConnection') -> 'Iterable[_2432.InterMountableComponentConnectionCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.connections_and_sockets.InterMountableComponentConnection)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.InterMountableComponentConnectionCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2432.InterMountableComponentConnectionCompoundSystemDeflection))

    def results_for_planetary_connection(self, design_entity: '_1863.PlanetaryConnection') -> 'Iterable[_2450.PlanetaryConnectionCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.connections_and_sockets.PlanetaryConnection)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.PlanetaryConnectionCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2450.PlanetaryConnectionCompoundSystemDeflection))

    def results_for_rolling_ring_connection(self, design_entity: '_1867.RollingRingConnection') -> 'Iterable[_2458.RollingRingConnectionCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.connections_and_sockets.RollingRingConnection)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.RollingRingConnectionCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2458.RollingRingConnectionCompoundSystemDeflection))

    def results_for_shaft_to_mountable_component_connection(self, design_entity: '_1871.ShaftToMountableComponentConnection') -> 'Iterable[_2463.ShaftToMountableComponentConnectionCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.connections_and_sockets.ShaftToMountableComponentConnection)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.ShaftToMountableComponentConnectionCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2463.ShaftToMountableComponentConnectionCompoundSystemDeflection))

    def results_for_bevel_differential_gear_mesh(self, design_entity: '_1877.BevelDifferentialGearMesh') -> 'Iterable[_2383.BevelDifferentialGearMeshCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.connections_and_sockets.gears.BevelDifferentialGearMesh)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.BevelDifferentialGearMeshCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2383.BevelDifferentialGearMeshCompoundSystemDeflection))

    def results_for_concept_gear_mesh(self, design_entity: '_1881.ConceptGearMesh') -> 'Iterable[_2401.ConceptGearMeshCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.connections_and_sockets.gears.ConceptGearMesh)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.ConceptGearMeshCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2401.ConceptGearMeshCompoundSystemDeflection))

    def results_for_face_gear_mesh(self, design_entity: '_1887.FaceGearMesh') -> 'Iterable[_2421.FaceGearMeshCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.connections_and_sockets.gears.FaceGearMesh)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.FaceGearMeshCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2421.FaceGearMeshCompoundSystemDeflection))

    def results_for_straight_bevel_diff_gear_mesh(self, design_entity: '_1901.StraightBevelDiffGearMesh') -> 'Iterable[_2472.StraightBevelDiffGearMeshCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.connections_and_sockets.gears.StraightBevelDiffGearMesh)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.StraightBevelDiffGearMeshCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2472.StraightBevelDiffGearMeshCompoundSystemDeflection))

    def results_for_bevel_gear_mesh(self, design_entity: '_1879.BevelGearMesh') -> 'Iterable[_2388.BevelGearMeshCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.connections_and_sockets.gears.BevelGearMesh)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.BevelGearMeshCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2388.BevelGearMeshCompoundSystemDeflection))

    def results_for_conical_gear_mesh(self, design_entity: '_1883.ConicalGearMesh') -> 'Iterable[_2404.ConicalGearMeshCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.connections_and_sockets.gears.ConicalGearMesh)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.ConicalGearMeshCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2404.ConicalGearMeshCompoundSystemDeflection))

    def results_for_agma_gleason_conical_gear_mesh(self, design_entity: '_1875.AGMAGleasonConicalGearMesh') -> 'Iterable[_2376.AGMAGleasonConicalGearMeshCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.connections_and_sockets.gears.AGMAGleasonConicalGearMesh)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.AGMAGleasonConicalGearMeshCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2376.AGMAGleasonConicalGearMeshCompoundSystemDeflection))

    def results_for_cylindrical_gear_mesh(self, design_entity: '_1885.CylindricalGearMesh') -> 'Iterable[_2415.CylindricalGearMeshCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.connections_and_sockets.gears.CylindricalGearMesh)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.CylindricalGearMeshCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2415.CylindricalGearMeshCompoundSystemDeflection))

    def results_for_hypoid_gear_mesh(self, design_entity: '_1891.HypoidGearMesh') -> 'Iterable[_2429.HypoidGearMeshCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.connections_and_sockets.gears.HypoidGearMesh)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.HypoidGearMeshCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2429.HypoidGearMeshCompoundSystemDeflection))

    def results_for_klingelnberg_cyclo_palloid_conical_gear_mesh(self, design_entity: '_1894.KlingelnbergCycloPalloidConicalGearMesh') -> 'Iterable[_2434.KlingelnbergCycloPalloidConicalGearMeshCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.connections_and_sockets.gears.KlingelnbergCycloPalloidConicalGearMesh)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.KlingelnbergCycloPalloidConicalGearMeshCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2434.KlingelnbergCycloPalloidConicalGearMeshCompoundSystemDeflection))

    def results_for_klingelnberg_cyclo_palloid_hypoid_gear_mesh(self, design_entity: '_1895.KlingelnbergCycloPalloidHypoidGearMesh') -> 'Iterable[_2437.KlingelnbergCycloPalloidHypoidGearMeshCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.connections_and_sockets.gears.KlingelnbergCycloPalloidHypoidGearMesh)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.KlingelnbergCycloPalloidHypoidGearMeshCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2437.KlingelnbergCycloPalloidHypoidGearMeshCompoundSystemDeflection))

    def results_for_klingelnberg_cyclo_palloid_spiral_bevel_gear_mesh(self, design_entity: '_1896.KlingelnbergCycloPalloidSpiralBevelGearMesh') -> 'Iterable[_2440.KlingelnbergCycloPalloidSpiralBevelGearMeshCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.connections_and_sockets.gears.KlingelnbergCycloPalloidSpiralBevelGearMesh)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.KlingelnbergCycloPalloidSpiralBevelGearMeshCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2440.KlingelnbergCycloPalloidSpiralBevelGearMeshCompoundSystemDeflection))

    def results_for_spiral_bevel_gear_mesh(self, design_entity: '_1899.SpiralBevelGearMesh') -> 'Iterable[_2466.SpiralBevelGearMeshCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.connections_and_sockets.gears.SpiralBevelGearMesh)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.SpiralBevelGearMeshCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2466.SpiralBevelGearMeshCompoundSystemDeflection))

    def results_for_straight_bevel_gear_mesh(self, design_entity: '_1903.StraightBevelGearMesh') -> 'Iterable[_2475.StraightBevelGearMeshCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.connections_and_sockets.gears.StraightBevelGearMesh)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.StraightBevelGearMeshCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2475.StraightBevelGearMeshCompoundSystemDeflection))

    def results_for_worm_gear_mesh(self, design_entity: '_1905.WormGearMesh') -> 'Iterable[_2490.WormGearMeshCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.connections_and_sockets.gears.WormGearMesh)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.WormGearMeshCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2490.WormGearMeshCompoundSystemDeflection))

    def results_for_zerol_bevel_gear_mesh(self, design_entity: '_1907.ZerolBevelGearMesh') -> 'Iterable[_2493.ZerolBevelGearMeshCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.connections_and_sockets.gears.ZerolBevelGearMesh)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.ZerolBevelGearMeshCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2493.ZerolBevelGearMeshCompoundSystemDeflection))

    def results_for_gear_mesh(self, design_entity: '_1889.GearMesh') -> 'Iterable[_2425.GearMeshCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.connections_and_sockets.gears.GearMesh)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.GearMeshCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2425.GearMeshCompoundSystemDeflection))

    def results_for_part_to_part_shear_coupling_connection(self, design_entity: '_1915.PartToPartShearCouplingConnection') -> 'Iterable[_2448.PartToPartShearCouplingConnectionCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.connections_and_sockets.couplings.PartToPartShearCouplingConnection)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.PartToPartShearCouplingConnectionCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2448.PartToPartShearCouplingConnectionCompoundSystemDeflection))

    def results_for_clutch_connection(self, design_entity: '_1909.ClutchConnection') -> 'Iterable[_2393.ClutchConnectionCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.connections_and_sockets.couplings.ClutchConnection)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.ClutchConnectionCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2393.ClutchConnectionCompoundSystemDeflection))

    def results_for_concept_coupling_connection(self, design_entity: '_1911.ConceptCouplingConnection') -> 'Iterable[_2398.ConceptCouplingConnectionCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.connections_and_sockets.couplings.ConceptCouplingConnection)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.ConceptCouplingConnectionCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2398.ConceptCouplingConnectionCompoundSystemDeflection))

    def results_for_coupling_connection(self, design_entity: '_1913.CouplingConnection') -> 'Iterable[_2409.CouplingConnectionCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.connections_and_sockets.couplings.CouplingConnection)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.CouplingConnectionCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2409.CouplingConnectionCompoundSystemDeflection))

    def results_for_spring_damper_connection(self, design_entity: '_1917.SpringDamperConnection') -> 'Iterable[_2469.SpringDamperConnectionCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.connections_and_sockets.couplings.SpringDamperConnection)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.SpringDamperConnectionCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2469.SpringDamperConnectionCompoundSystemDeflection))

    def results_for_torque_converter_connection(self, design_entity: '_1919.TorqueConverterConnection') -> 'Iterable[_2484.TorqueConverterConnectionCompoundSystemDeflection]':
        ''' 'ResultsFor' is the original name of this method.

        Args:
            design_entity (mastapy.system_model.connections_and_sockets.couplings.TorqueConverterConnection)

        Returns:
            Iterable[mastapy.system_model.analyses_and_results.system_deflections.compound.TorqueConverterConnectionCompoundSystemDeflection]
        '''

        return conversion.pn_to_mp_objects_in_iterable(self.wrapped.ResultsFor(design_entity.wrapped if design_entity else None), constructor.new(_2484.TorqueConverterConnectionCompoundSystemDeflection))
