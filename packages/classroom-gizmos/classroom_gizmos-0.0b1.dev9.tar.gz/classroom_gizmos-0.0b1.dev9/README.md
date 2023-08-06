# Classroom Gizmos
This is a collection of functions for classroom instruction in
introductory physics.
## handies
*_classroom_gizmos.handies_* is a collection of small functions
that are
useful from an ipython prompt. <br>
__Note: Imports from astropy__<br>
The **mine()** function lists all the user functions defined
in *_handies.py_*.

### handies defines:
    nowMJD(); mjd2date(), date2mjd(), cdbn(), osname(),
    hostname(), call(), rad(), deg(), sinD(), cosD(), tanD(),
    asinD(), acosD(), atanD(), atan2D(), atan2P(), nCr(), comb(),
    pltsize(), select_file(), select_file_timeout(),
    mine()
Trig Functions in Degrees<br>
&nbsp;&nbsp;&nbsp;&nbsp;'D' and 'P' trig functions work with degrees.<br>
&nbsp;&nbsp;&nbsp;&nbsp;'P' inverse functions return only positive angles.

greek  ➞ string with greek alphabet.<br>
pltsize( w, h, dpi=150) ➞ resizes plots in matplotlib.<br>
select_file() ➞ file browser to select a file.<br>
select_file_timeout( seconds) ➞ file browser with timeout<br>
&nbsp;&nbsp;&nbsp;in seconds. Uses func_timeout package which<br>
&nbsp;&nbsp;&nbsp;will usually be installed if not already installed.<br>
mine() ➞ lists what handies.py defines.
### From math imports:
pi, sqrt, cos, sin, tan, acos, asin, atan, atan2,
degrees, radians, log, log10, exp
### From astropy
astropy.units as "u", i.e. u.cm or u.GHz

## classroom_gizmos.import_install.importInstall()
    pkg = importInstall( 'pkg_name')
    OR
    pkg = importInstall( 'pkg_name, 'PyPI_name')
This function tries to import a specified package and if that fails,
it tries to install the package and then import it.<br>
_*importInstall*_ was written so that python programs can be
distributed to students without detailed instructions on checking if
package is installed
and on installing the needed packages.<br>
The function returns the package or None.<br>

**Warning:** _importInstall_ can not install all packages. It is less likely to install a package that is not pure python.

<hr>
All functions should have doc strings that give more information about usage and parameters.

