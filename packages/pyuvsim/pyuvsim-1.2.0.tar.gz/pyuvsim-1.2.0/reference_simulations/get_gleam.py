#!/bin/env python

# Downloads the gleam catalog as a VOTable from Vizier
# This is required for running reference sim 1.4.

import os
import sys

try:
    from astroquery.vizier import Vizier
except ImportError as e:
    raise ImportError("astroquery module required to use the download_gleam script") from e

catalog_dir = "first_reference_simulations/catalog_files/"
name = "gleam.vot"

opath = os.path.join(catalog_dir, name)
if os.path.exists(opath):
    print("GLEAM already downloaded to {}.".format(opath))
    sys.exit()
Vizier.ROW_LIMIT = -1
Vizier.columns = ['GLEAM', 'RAJ2000', 'DEJ2000', 'Fintwide']
catname = 'VIII/100/gleamegc'
tab = Vizier.get_catalogs(catname)[0]
tab.write(opath, format='votable')

print("GLEAM catalog downloaded and saved to " + opath)
