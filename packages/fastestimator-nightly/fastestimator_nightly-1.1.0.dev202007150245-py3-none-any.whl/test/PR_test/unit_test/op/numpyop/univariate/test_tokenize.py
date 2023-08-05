import unittest

import numpy as np

from fastestimator.op.numpyop.univariate import Tokenize
from fastestimator.test.unittest_util import is_equal


class TestTokenize(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.single_input = ['This is a function to test tokenize op']
        cls.single_output = [['This', 'is', 'a', 'function', 'to', 'test', 'tokenize', 'op']]
        cls.multi_input = ['Now define a new list', 'that contains multiple sentences']
        cls.multi_output = [['Now', 'define', 'a', 'new', 'list'], ['that', 'contains', 'multiple', 'sentences']]
        cls.lower_case_input = ['To Test Lowercase parameter']
        cls.tokenize_fn_output = [['THIS', 'IS', 'A', 'FUNCTION', 'TO', 'TEST', 'TOKENIZE', 'OP']]

    def tokenize_fn(self, seq):
        seq = seq.upper().split()
        return seq

    def test_single_input(self):
        op = Tokenize(inputs='x', outputs='x')
        data = op.forward(data=self.single_input, state={})
        self.assertTrue(is_equal(data, self.single_output))

    def test_single_input_tokenize_function(self):
        op = Tokenize(inputs='x', outputs='x', tokenize_fn=self.tokenize_fn)
        data = op.forward(data=self.single_input, state={})
        self.assertTrue(is_equal(data, self.tokenize_fn_output))

    def test_multi_input(self):
        op = Tokenize(inputs='x', outputs='x')
        data = op.forward(data=self.multi_input, state={})
        self.assertTrue(is_equal(data, self.multi_output))

    def test_lower_case(self):
        op = Tokenize(inputs='x', outputs='x', to_lower_case=True)
        data = op.forward(data=self.lower_case_input, state={})
        self.assertTrue(is_equal(data, [['to', 'test', 'lowercase', 'parameter']]))
