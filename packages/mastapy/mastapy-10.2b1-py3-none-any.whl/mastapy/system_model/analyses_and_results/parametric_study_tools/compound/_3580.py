﻿'''_3580.py

ShaftCompoundParametricStudyTool
'''


from typing import List

from mastapy.system_model.part_model.shaft_model import _1942
from mastapy._internal import constructor, conversion
from mastapy.system_model.analyses_and_results.parametric_study_tools import _4055
from mastapy.system_model.analyses_and_results.parametric_study_tools.compound import _3556
from mastapy._internal.python_net import python_net_import

_SHAFT_COMPOUND_PARAMETRIC_STUDY_TOOL = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.ParametricStudyTools.Compound', 'ShaftCompoundParametricStudyTool')


__docformat__ = 'restructuredtext en'
__all__ = ('ShaftCompoundParametricStudyTool',)


class ShaftCompoundParametricStudyTool(_3556.AbstractShaftOrHousingCompoundParametricStudyTool):
    '''ShaftCompoundParametricStudyTool

    This is a mastapy class.
    '''

    TYPE = _SHAFT_COMPOUND_PARAMETRIC_STUDY_TOOL
    __hash__ = None

    def __init__(self, instance_to_wrap: 'ShaftCompoundParametricStudyTool.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def component_design(self) -> '_1942.Shaft':
        '''Shaft: 'ComponentDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_1942.Shaft)(self.wrapped.ComponentDesign) if self.wrapped.ComponentDesign else None

    @property
    def load_case_analyses_ready(self) -> 'List[_4055.ShaftParametricStudyTool]':
        '''List[ShaftParametricStudyTool]: 'LoadCaseAnalysesReady' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.LoadCaseAnalysesReady, constructor.new(_4055.ShaftParametricStudyTool))
        return value

    @property
    def component_parametric_study_tool_load_cases(self) -> 'List[_4055.ShaftParametricStudyTool]':
        '''List[ShaftParametricStudyTool]: 'ComponentParametricStudyToolLoadCases' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.ComponentParametricStudyToolLoadCases, constructor.new(_4055.ShaftParametricStudyTool))
        return value

    @property
    def planetaries(self) -> 'List[ShaftCompoundParametricStudyTool]':
        '''List[ShaftCompoundParametricStudyTool]: 'Planetaries' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.Planetaries, constructor.new(ShaftCompoundParametricStudyTool))
        return value
