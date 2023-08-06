CLI plugin for ExtensiveAutomation server
===================================================

Introduction
------------

This plugin enable to interact with remote system throught the SSH protocol.

Installing from pypi
--------------------

1. Run the following command

        pip install extensiveautomation_plugin_cli

2. Execute the following command to take in account this new plugin

        ./extensiveautomation --reload
        
3. Samples are deployed on data storage.

Installing from source
----------------------

1. Clone the following repository 

        git clone https://github.com/ExtensiveAutomation/extensiveautomation-plugin-cli.git
        cd extensiveautomation-plugin-cli/src/ea/
        
2. Copy the folder `sutadapters` in the source code server and overwrite-it

        cp -rf sutadapters/ /<install_path_project>/src/ea/
        
3. Copy the folder `var` in the source code server/ and overwrite-it

        cp -rf var/ /<install_path_project>/src/ea/

4. Finally execute the following command to install depandencies

        cd /<install_path_project>/src/
        python3 extensiveautomation.py --install_adapter CLI
        python3 extensiveautomation.py --reload