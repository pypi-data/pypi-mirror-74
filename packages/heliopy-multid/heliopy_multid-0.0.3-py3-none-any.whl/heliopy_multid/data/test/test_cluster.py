from datetime import datetime
import pytest

from heliopy import config
from heliopy_multid.data.test.util import check_data_output_xr

cluster = pytest.importorskip('heliopy_multid.data.cluster')
#pytest.mark.data()
if config['cluster_cookie'] == 'none':
    pytest.skip('Cluster download cookie not set', allow_module_level=True)

probe = '3'


def test_fgm_xr():
    starttime = datetime(2004, 6, 18, 11, 35, 0)
    endtime = datetime(2004, 6, 19, 18, 35, 0)
    data = cluster.fgm(probe, starttime, endtime, xarray=True)
    check_data_output_xr(data)


def test_peace_moments_xr():
    starttime = datetime(2009, 12, 22, 4, 0, 0)
    endtime = datetime(2009, 12, 22, 6)
    data = cluster.peace_moments(probe, starttime, endtime, xarray=True)
    check_data_output_xr(data)


def test_cis_hia_onboard_moms_xr():
    starttime = datetime(2009, 1, 1, 0, 0, 0)
    endtime = datetime(2009, 1, 1, 2, 0, 0)
    data = cluster.cis_hia_onboard_moms(probe,
                                        starttime, endtime, xarray=True)
    check_data_output_xr(data)


def test_cis_codif_h1_moms_xr():
    starttime = datetime(2009, 1, 1, 0, 0, 0)
    endtime = datetime(2009, 1, 1, 2, 0, 0)
    data = cluster.cis_codif_h1_moms(probe, starttime, endtime, xarray=True)
    check_data_output_xr(data)
