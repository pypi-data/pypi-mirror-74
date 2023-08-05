=========
IDEM-SALT
=========

Installation
============
Installing this package via pip will copy the idem state and execution
modules to the proper locations in /srv/salt::

    pip install idem-salt --global-option install_scripts

You can also install to a custom location::

    pip install idem-salt --global-option install_scripts --global-option="--install-dir=/srv/file/root"

States
======
Create a salt state that references idem sls files or sources directly::

    state_name:
        idem.state:
            - idem.sls
            - sls_source

Execution Modules
=================
Idem execution modules can be called directly from the command line::

    salt '*' idem.exec test.ping
