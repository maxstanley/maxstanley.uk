+++
title = "VOIP Example"
description = ""
date = 2021-06-10
tags = [ "cisco", "packet tracer" ]
draft = false
+++

## Layout

3 IP Phones connected to a 2960 Switch, with a 2811 Router connected to the switch. Each IP Phone has a PC on its PC Port.

## Configuring the Switch

### Creating VLANs

```ios
Switch>enable
Switch#configure terminal
Switch(config)#vlan 20
Switch(config-vlan)#name PC
Switch(config-vlan)#vlan 30
Switch(config-vlan)#name VOICE
```

### Configuring Ports

```ios
Switch>enable
Switch#configure terminal
Switch(config)#interface fa0/24
Switch(config-if)#switchport mode trunk
Switch(config-if)#interface range fa0/1-3
Switch(config-if-range)#switchport mode access
Switch(config-if-range)#switchport access vlan 20
Switch(config-if-range)#switchport voice vlan 30
Switch(config-if-range)#interface range fa0/4-23
Switch(config-if-range)#switchport mode access
Switch(config-if-range)#shutdown
Switch(config-if-range)#interface range gig0/1-2
Switch(config-if-range)#switchport mode access
Switch(config-if-range)#shutdown
```

### Save Configuration

```ios
Switch>enable
Switch#copy running-config startup-config
```

## Configuring the Router

### Configuring VLANs

```ios
Router>enable
Router#configure terminal
Router(config)#interface fa0/0.20
Router(config-subif)#encapsulation dot1Q 20
Router(config-subif)#ip address 192.168.20.1 255.255.255.0
Router(config-subif)#interface fa0/0.30
Router(config-subif)#encapsulation dot1Q 30
Router(config-subif)#ip address 192.168.30.1 255.255.255.0
Router(config-subif)#interface fa0/0
Router(config-if)#no shutdown
```

### Configuring DHCP

```ios
Router>enable
Router#configure terminal
Router(config)#ip dhcp excluded-address 192.168.20.1 192.168.20.99
Router(config)#ip dhcp excluded-address 192.168.30.1 192.168.30.99
Router(config)#ip dhcp pool PC20
Router(dhcp-config)#network 192.168.20.0 255.255.255.0
Router(dhcp-config)#default-router 192.168.20.1
Router(dhcp-config)#ip dhcp pool VOICE30
Router(dhcp-config)#network 192.168.30.0 255.255.255.0
Router(dhcp-config)#default-router 192.168.30.1
```

### Configure VOIP

```ios
Router>enable
Router#configure terminal
Router(config)#ip dhcp pool VOICE30
Router(dhcp-config)#option 150 ip 192.168.30.1
Router(dhcp-config)#exit
Router(config)#telephony-service
Router(config=telephony)#max-dn 3
Router(config=telephony)#max-ephones 3
Router(config=telephony)#ip source-address 192.168.30.1 port 2000
Router(config=telephony)#exit
Router(config)#ephone-dn 1
Router(config-ephone-dn)#number 1010
Router(config-ephone-dn)#ephone-dn 2
Router(config-ephone-dn)#number 1020
Router(config-ephone-dn)#ephone-dn 3
Router(config-ephone-dn)#number 1030
Router(config-ephone-dn)#exit
Router(config)#ephone 1
Router(config-ephone)#type 7960
Router(config-ephone)#button 1:1
Router(config-ephone)#ephone 2
Router(config-ephone)#type 7960
Router(config-ephone)#button 1:2
Router(config-ephone)#ephone 3
Router(config-ephone)#type 7960
Router(config-ephone)#button 1:3
Router(config-ephone)#exit
Router(config)#exit
Router#copy running-config startup-config
```

## Result

Now the IP Phones can be plugged in, they will recieve a DHPC lease and will be registered with the VOIP Service.
The Phones can be dialed to each other from the GUI by dialing the number and clicking on the handset.

The PCs should also be able to ping each other, ensure that they are set to DHCP so they can also get a lease on their VLAN.

