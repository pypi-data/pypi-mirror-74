﻿'''_4757.py

CVTPulleyModalAnalysis
'''


from mastapy.system_model.part_model.couplings import _2138
from mastapy._internal import constructor
from mastapy.system_model.analyses_and_results.system_deflections import _2266
from mastapy.system_model.analyses_and_results.modal_analyses import _4805
from mastapy._internal.python_net import python_net_import

_CVT_PULLEY_MODAL_ANALYSIS = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.ModalAnalyses', 'CVTPulleyModalAnalysis')


__docformat__ = 'restructuredtext en'
__all__ = ('CVTPulleyModalAnalysis',)


class CVTPulleyModalAnalysis(_4805.PulleyModalAnalysis):
    '''CVTPulleyModalAnalysis

    This is a mastapy class.
    '''

    TYPE = _CVT_PULLEY_MODAL_ANALYSIS

    __hash__ = None

    def __init__(self, instance_to_wrap: 'CVTPulleyModalAnalysis.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def component_design(self) -> '_2138.CVTPulley':
        '''CVTPulley: 'ComponentDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_2138.CVTPulley)(self.wrapped.ComponentDesign) if self.wrapped.ComponentDesign else None

    @property
    def system_deflection_results(self) -> '_2266.CVTPulleySystemDeflection':
        '''CVTPulleySystemDeflection: 'SystemDeflectionResults' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_2266.CVTPulleySystemDeflection)(self.wrapped.SystemDeflectionResults) if self.wrapped.SystemDeflectionResults else None
