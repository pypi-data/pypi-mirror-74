# monitor-fw-13
An additional module that installs programs/config required to monitor v13 instances via Prometheus. 

# PyPi
The released versions are available on PyPi, at this link here: https://pypi.org/project/filewave-monitor-v13

# Installation
Use pip to install this module first, then run a configuration stage to integrate this module properly into the v13 server. Don't forget to restart the supervisord daemon!

> Note: you need wget to have the scripts work properly 

Instructions:

    $ sudo su -
    $ yum install -y wget
    $ /usr/local/filewave/python/bin/pip3 install --upgrade filewave-monitor-v13
    $ /usr/local/filewave/python/bin/monitor-v13-install
    $ /usr/local/filewave/python.v27/bin/supervisorctl -c /usr/local/etc/filewave/supervisor/supervisord-server.conf reload

# Validation (did it all work?): 
Check the following: 

    $ tail -f /tmp/mtail.INFO - this should produce some output and tell you that the mtail progs loaded OK
    $ ps -ajx | grep prometheus - should show prometheus running (check http://localhost:21090/targets now!)
    
# Grafana 
The last step is to add a configuration into Grafana for this data source, and to import the performance dashboard. 

Prometheus is running on port 21090 (ports were opened by the monitor-v13-install script).  You need to create a Prometheus datasource pointing to this host and port 21090.

Lastly; import a new dashboard from Grafana.com using the following ID: 12667
