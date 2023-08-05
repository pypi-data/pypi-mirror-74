**Welcome to the DOMAuto repository, with Auto standing for Autopsy and Automatic!**

Thanks to Tamás Gal and Daan van Eijk for their codes and help that enabled this project.

The programs in this repository are intended to be used for performing post-mortem analyses of DOMs in the detector.

* In *./autopsy*, scan JRA files to find runs in which DOMs die or exhibit other interesting behavior, and to find runs which are present in the database but which have missing JRA files.

* In *./plotting*, plot the statuses of each DOM over the lifetime of all detectors, and plot the slow control parameters for each DOM and each DU for chosen runs.

* In *./web*, compile all created plots into a website and send for publication on a public server.

* *./easy_autopsy.sh* is a script which finds interesting runs, plots all DOM statuses, plots all slow control parameters for interesting runs, and publishes all plots on a website; or any one of the previously mentioned actions.

* *./DOMAuto_notebook.ipynb* is a jupyter notebook which provides basic interaction with the database, and possibility of producing slow control parameter plots for a chosen detector, run and du.