# monitor-fw-13
An additional module that installs programs/config required to monitor v13 instances via Prometheus. 

# Installation
Use pip to install this module first, then run a configuration stage to integrate this module properly into the v13 server. 

Instructions:

    $ sudo su -
    $ /usr/local/filewave/python/bin/pip3 install --upgrade filewave-monitor-v13
    $ /usr/local/filewave/python/bin/monitor-v13-install

# Restart Services
Restart supervisord (not just fwcontrol; more programs were added so don't skip this step)

    $ /usr/local/filewave/python.v27/bin/supervisorctl -c /usr/local/etc/filewave/supervisor/supervisord-server.conf reload

# Validation (did it all work?): 
Check the following: 

    $ tail -f /tmp/mtail.INFO - this should produce some output and tell you that the mtail progs loaded OK
    $ ps -ajx | grep prometheus - should show prometheus running (check http://localhost:21090/targets now!)
    
# Grafana 
The last step is to add a configuration into Grafana for this data source, and to import the performance dashboard. 

Prometheus is running on port 21090 (ports were opened by the monitor-v13-install script).  You need to create a datasource pointing to this host and port 21090.






