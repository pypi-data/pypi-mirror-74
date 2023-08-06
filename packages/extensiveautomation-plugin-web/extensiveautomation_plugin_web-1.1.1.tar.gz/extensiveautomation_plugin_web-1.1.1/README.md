WEB plugin for ExtensiveAutomation server
===================================================

Introduction
------------

This plugin enable to interact with remote web server through the HTTP protocol.
This plugin is based on the `curl` command.

Installing from pypi
--------------------

1. Run the following command

        pip install extensiveautomation_plugin_web

2. Execute the following command to take in account this new plugin

        ./extensiveautomation --reload
        
3. Samples are deployed on data storage
   
Installing from source
----------------------

1. Clone the following repository 

        git clone https://github.com/ExtensiveAutomation/extensiveautomation-plugin-web.git
        cd extensiveautomation-plugin-web/src/ea/
        
2. Copy the folder `sutadapters` in the source code server and overwrite-it

        cp -rf sutadapters/ /<install_path_project>/src/ea/
        
3. Copy the folder `var` in the source code server and overwrite-it

        cp -rf var/ /<install_path_project>/src/ea/
        
4. Finally execute the following command to install depandencies

        cd /<install_path_project>/src/
        python3 extensiveautomation.py --install_adapter WEB
        python3 extensiveautomation.py --reload
        