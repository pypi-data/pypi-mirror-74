

# Classroom Gizmos
This is a collection of functions for classroom instruction in introductory physics.
## handies
classroom_gizmos.handies is a collection of small functions that are useful from an ipython prompt.
the mine() function lists all the user functions defined in handies.py

### handies defines:
&nbsp;&nbsp;&nbsp;&nbsp;nowMJD(); mjd2date(), date2mjd()
&nbsp;&nbsp;&nbsp;&nbsp;cdbn(), osname(), hostname(), call()
&nbsp;&nbsp;&nbsp;&nbsp;rad(), deg(), sinD(), cosD(), tanD(), asinD(),
&nbsp;&nbsp;&nbsp;&nbsp;acosD(), atanD(), atan2D(), atan2P()
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'D' and 'P' functions work with degrees.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'P' inverse functions return only positive angles.
Defines _nCr_ A.K.A. _comb_ or imports from math if available.
&nbsp;&nbsp;&nbsp;&nbsp;greek  ➞ string with greek alphabet.
&nbsp;&nbsp;&nbsp;&nbsp;pltsize( w, h, dpi=150) ➞ resizes plots in matplotlib.
&nbsp;&nbsp;&nbsp;&nbsp;select_file() ➞ uses file browser to select a file.
&nbsp;&nbsp;&nbsp;&nbsp;select_file_timeout() ➞ with timeout in seconds.
&nbsp;&nbsp;&nbsp;&nbsp;mine() ➞ lists what handies.py defines.
From math imports:
&nbsp;&nbsp;&nbsp;&nbsp;pi, sqrt, degrees, radians,
&nbsp;&nbsp;&nbsp;&nbsp;cos, sin, tan, atan2, asin, acos, atan, and
&nbsp;&nbsp;&nbsp;&nbsp;log, log10, exp
From astropy units as "u", i.e. u.cm or u.GHz

## import_install
This function tries to import a specified package and if that fails, it
tries to install the package and then import it.
import_install was written so that python programs can be distributed to students without detailed instructions on checking and installing the needed packages.
This capability seems especially important for using Google's Colab which deletes installed packages after a short period of non-use.

**Warning:** import_install can not install all packages. It is less likely to install a package that is not pure python.

All functions should have doc strings that give more information about usage and parameters.

