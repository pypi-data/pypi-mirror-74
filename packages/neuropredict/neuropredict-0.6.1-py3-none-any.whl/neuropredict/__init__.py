
__all__ = ['base', 'classify', 'regress', 'visualize', 'config', '__version__']

__author__ = 'Pradeep Reddy Raamana, PhD'
__email__  = 'raamana@gmail.com'

from ._version import get_versions
__version__ = get_versions()['version']

# dealing with matplotlib backend
import os
import matplotlib

currently_in_CI = any([os.getenv(var, '').strip().lower() == 'true'
                       for var in ('TRAVIS', 'CONTINUOUS_INTEGRATION')])

def set_agg():
    "set agg as backend"

    matplotlib.use('Agg')
    matplotlib.interactive(False)


if 'DISPLAY' in os.environ:
    display = os.environ['DISPLAY']
    display_name, display_num = display.split(':')
    display_num = int(float(display_num))
    if display_num != 0:
        set_agg()
else:
    set_agg()
    display = None


from sys import version_info
if version_info.major > 2:
    from neuropredict import config
    from neuropredict import base, classify, regress, visualize
else:
    raise NotImplementedError('neuropredict requires Python 3+.')

del get_versions
del version_info