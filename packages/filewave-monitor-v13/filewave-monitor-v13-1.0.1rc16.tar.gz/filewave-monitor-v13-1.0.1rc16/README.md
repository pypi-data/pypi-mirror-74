# monitor-fw-13
An additional module that installs programs/config required to monitor v13 instances via Prometheus. 

# Installation
Use pip to install this module first, then run a configuration stage to integrate this module properly into the v13 server. 

Instructions:

    $ sudo su -
    $ /usr/local/filewave/python/bin/pip3 install --upgrade filewave-monitor-v13
    $ /usr/local/filewave/python/bin/monitor-v13-install

```
[2020-07-15 15:33:27,595] [monitor-v13] [INFO] downloading mtail...
[2020-07-15 15:33:29,969] [monitor-v13] [INFO] dealing with: apache_exporter_err.mtail
[2020-07-15 15:33:29,970] [monitor-v13] [INFO] dealing with: filewave_django.mtail
[2020-07-15 15:33:29,970] [monitor-v13] [INFO] dealing with: fwldap.mtail
[2020-07-15 15:33:29,971] [monitor-v13] [INFO] dealing with: postgres.mtail
[2020-07-15 15:33:29,971] [monitor-v13] [INFO] downloading postgres exporter...
[2020-07-15 15:33:34,586] [monitor-v13] [INFO] downloading node_exporter
[2020-07-15 15:33:34,596] [monitor-v13] [INFO] Looks like everything is configured, now restart the server: /usr/local/filewave/python/supervisordctl reload
```

# Restart Services
Restart supervisord (not just fwcontrol; more programs were added so don't skip this step)

    $ /usr/local/filewave/python.v27/bin/supervisorctl -c /usr/local/etc/filewave/supervisor/supervisord-server.conf reload

# Validation (did it all work?): 
Check the following: 

    $ ls -l /tmp/mtail.INFO - this should produce some output and tell you that the mtail progs loaded OK
    $ 




