﻿'''_4801.py

PlanetaryGearSetModalAnalysis
'''


from mastapy.system_model.part_model.gears import _2098
from mastapy._internal import constructor
from mastapy.system_model.analyses_and_results.modal_analyses import _4760
from mastapy._internal.python_net import python_net_import

_PLANETARY_GEAR_SET_MODAL_ANALYSIS = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.ModalAnalyses', 'PlanetaryGearSetModalAnalysis')


__docformat__ = 'restructuredtext en'
__all__ = ('PlanetaryGearSetModalAnalysis',)


class PlanetaryGearSetModalAnalysis(_4760.CylindricalGearSetModalAnalysis):
    '''PlanetaryGearSetModalAnalysis

    This is a mastapy class.
    '''

    TYPE = _PLANETARY_GEAR_SET_MODAL_ANALYSIS

    __hash__ = None

    def __init__(self, instance_to_wrap: 'PlanetaryGearSetModalAnalysis.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def assembly_design(self) -> '_2098.PlanetaryGearSet':
        '''PlanetaryGearSet: 'AssemblyDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_2098.PlanetaryGearSet)(self.wrapped.AssemblyDesign) if self.wrapped.AssemblyDesign else None
