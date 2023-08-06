import numpy as np
import pytest

from hmf.cosmology.cosmo import Cosmology
from astropy.cosmology import WMAP7


def test_string_cosmo():
    c = Cosmology(cosmo_model="WMAP7")
    assert c.cosmo.Ob0 > 0


@pytest.fixture(scope="module")
def cosmo():
    return Cosmology(cosmo_model="Planck13")


def test_cosmo_model(cosmo):
    cosmo.update(cosmo_model=WMAP7)

    assert cosmo.cosmo.Om0 == 0.272

    # this number *can* change when updated constants are used.
    assert np.isclose(cosmo.mean_density0, 75489962610.27452, atol=1e-3)


def test_cosmo_params(cosmo):
    cosmo.update(cosmo_params={"H0": 0.6})
    assert cosmo.cosmo.H0.value == 0.6
    cosmo.update(cosmo_params={"Om0": 0.2})
    assert cosmo.cosmo.Om0 == 0.2
    assert cosmo.cosmo.H0.value == 0.6
    assert cosmo.cosmo_params == {"Om0": 0.2, "H0": 0.6}
