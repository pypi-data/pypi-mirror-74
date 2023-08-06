Zabbix Agent extension to monitor CouchDB 3
===========================================

This is an extension for the Zabbix Agent to enable it to monitor CouchDB
3 servers.


Requirements
------------

* Python 3.5+
* `py-zabbix <https://github.com/adubkov/py-zabbix>`_


Installation (agent side)
-------------------------

You first have to install the extension on the server that runs the Zabbix
Agent.


From PyPI
~~~~~~~~~

Run the following command (as root)::

    pip3 install zabbix-agent-extension-couchdb3

Then copy the ``zabbix-agent-extension-couchdb3.conf`` file from this
repository to the ``/etc/zabbix/zabbix_agentd.conf.d/`` folder on the server.

And finally, restart the Zabbix Agent (with systemd: ``systemctl restart
zabbix-agent``).


Installation (zabbix side)
--------------------------

TODO (import template)


About polling interval
----------------------

The default polling interval of this probe in Zabbix is ``30s``. In order to
have accurate stats, you must configure the "stats interval" setting of your
CouchDB to twice this value (``60s``)::

    [stats]
    interval = 60

Read more `in the CouchDB documentation
<https://docs.couchdb.org/en/stable/api/server/common.html#node-node-name-stats>`_.


CLI Usage
---------

This extension also provides a CLI to simplify debugging.

::

    usage: zabbix-agent-extension-couchdb3 [-h] [--host HOST] [--port PORT] [--user USER]
                        --password PASSWORD [--proto PROTO] [--show-json] [--show-stats]

    optional arguments:
      -h, --help           show this help message and exit
      --host HOST          The CouchDB server host (default: localhost)
      --port PORT          The CouchDB server port (default: 5984)
      --user USER          The username to use for the connexion (default: admin)
      --password PASSWORD  The password to use for the connexion (mandatory)
      --proto PROTO        The protocol to use (default: http)
      --show-json          Display the raw JSON stats from CouchDB and exit (no stats will be
                           sent to Zabbix)
      --show-stats         Display the available stats with their values and description and exit
                           (no stats will be sent to Zabbix)

Example: dumping CouchDB stats as JSON::

    zabbix-agent-extension-couchdb3 --password=XXXXX --show-json

Example: displaying CouchDB stats in a more friendly format::

    zabbix-agent-extension-couchdb3 --password=XXXXX --show-stats


Changelog
---------

* **v0.2.0:** Handles histogram-type values
* **v0.1.1:** Fixes an issue with the entry point
* **v0.1.0:** Initial release
