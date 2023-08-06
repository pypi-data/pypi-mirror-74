"""Unit Tests for the imap.py functions"""

import numpy as np
import pytest

import ginga.imap
from ginga.imap import IntensityMap


class TestCmap(object):

    def test_IntensityMap_init(self):
        test_ilst = tuple(np.linspace(0, 1, ginga.imap.min_imap_len))
        test_intensity_map = IntensityMap('test-name', test_ilst)

        expected = 'test-name'
        actual = test_intensity_map.name
        assert expected == actual

        expected = ginga.imap.min_imap_len
        actual = len(test_intensity_map.ilst)
        assert expected == actual

        expected = test_ilst
        actual = test_intensity_map.ilst
        np.testing.assert_allclose(expected, actual)

    def test_IntensityMap_init_exception(self):
        with pytest.raises(TypeError):
            IntensityMap('test-name')

    def test_imaps(self):
        count = 0
        for attribute_name in dir(ginga.imap):
            if attribute_name.startswith('imap_'):
                count = count + 1

        expected = count
        actual = len(ginga.imap.imaps)
        assert expected == actual

    def test_add_imap(self):
        test_ilst = tuple(np.linspace(0, 1, ginga.imap.min_imap_len))

        ginga.imap.add_imap('test-name', test_ilst)

        expected = IntensityMap('test-name', test_ilst)
        actual = ginga.imap.imaps['test-name']
        assert expected.name == actual.name
        np.testing.assert_allclose(expected.ilst, actual.ilst)

        # Teardown
        del ginga.imap.imaps['test-name']

    def test_add_imap_exception(self):
        test_ilst = (0.0, 1.0)
        with pytest.raises(AssertionError):
            ginga.imap.add_imap('test-name', test_ilst)

    def test_get_imap(self):
        test_ilst = tuple(np.linspace(0, 1, ginga.imap.min_imap_len))

        ginga.imap.add_imap('test-name', test_ilst)

        expected = IntensityMap('test-name', test_ilst)
        actual = ginga.imap.get_imap('test-name')
        assert expected.name == actual.name
        np.testing.assert_allclose(expected.ilst, actual.ilst)

        # Teardown
        del ginga.imap.imaps['test-name']

    def test_get_imap_exception(self):
        with pytest.raises(KeyError):
            ginga.imap.get_imap('non-existent-name')

    def test_get_names(self):
        names = []
        for attribute_name in dir(ginga.imap):
            if attribute_name.startswith('imap_'):
                names.append(attribute_name[5:])

        expected = sorted(names)
        actual = ginga.imap.get_names()
        assert expected == actual

# END
