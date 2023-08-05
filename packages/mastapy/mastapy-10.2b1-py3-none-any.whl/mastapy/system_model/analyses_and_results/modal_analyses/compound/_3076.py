﻿'''_3076.py

SpiralBevelGearCompoundModalAnalysis
'''


from typing import List

from mastapy.system_model.part_model.gears import _2004
from mastapy._internal import constructor, conversion
from mastapy.system_model.analyses_and_results.modal_analyses import _3964
from mastapy.system_model.analyses_and_results.modal_analyses.compound import _3058
from mastapy._internal.python_net import python_net_import

_SPIRAL_BEVEL_GEAR_COMPOUND_MODAL_ANALYSIS = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.ModalAnalyses.Compound', 'SpiralBevelGearCompoundModalAnalysis')


__docformat__ = 'restructuredtext en'
__all__ = ('SpiralBevelGearCompoundModalAnalysis',)


class SpiralBevelGearCompoundModalAnalysis(_3058.BevelGearCompoundModalAnalysis):
    '''SpiralBevelGearCompoundModalAnalysis

    This is a mastapy class.
    '''

    TYPE = _SPIRAL_BEVEL_GEAR_COMPOUND_MODAL_ANALYSIS
    __hash__ = None

    def __init__(self, instance_to_wrap: 'SpiralBevelGearCompoundModalAnalysis.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def component_design(self) -> '_2004.SpiralBevelGear':
        '''SpiralBevelGear: 'ComponentDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_2004.SpiralBevelGear)(self.wrapped.ComponentDesign) if self.wrapped.ComponentDesign else None

    @property
    def load_case_analyses_ready(self) -> 'List[_3964.SpiralBevelGearModalAnalysis]':
        '''List[SpiralBevelGearModalAnalysis]: 'LoadCaseAnalysesReady' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.LoadCaseAnalysesReady, constructor.new(_3964.SpiralBevelGearModalAnalysis))
        return value

    @property
    def component_modal_analysis_load_cases(self) -> 'List[_3964.SpiralBevelGearModalAnalysis]':
        '''List[SpiralBevelGearModalAnalysis]: 'ComponentModalAnalysisLoadCases' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.ComponentModalAnalysisLoadCases, constructor.new(_3964.SpiralBevelGearModalAnalysis))
        return value
