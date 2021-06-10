+++
title = "Combining 2 Switches Into 1 With VLANs"
description = ""
date = 2021-06-10
tags = [ "cisco", "packet tracer" ]
draft = false
+++

## Laying out the network

Place 4 PCs, 1 2960 (Switch) & 1 4331 (Router), attach all 4 PCs to the swtich.

Then we must configure the 4 PCs with IP Addresses to allow them to communicate, with the other computer in their local network.

PC0: 192.168.0.2  
PC1: 192.168.0.3  
PC2: 192.168.1.2  
PC3: 192.168.1.3

From PC1, Desktop > Command Prompt

```bash
ping 192.168.0.2
```

From PC3, Desktop > Command Prompt

```bash
ping 192.168.1.2
```

We should also configure the default gateways for each of the PCs.

PC0-1: 192.168.0.1  
PC2-3: 192.168.1.1

Desktop > IP Configuration > Default Gateway

## Connecting the two networks with a router

Connect Gig0/0/0 from the Router to Switch0 Gig0/1.

### Configuring the Router

This network layout is known as "Router on a Stick". To allow the Switch to handle two networks, we will be splitting the Physical switch into multiple logical switches. Virtual Local Area Networks (VLANs) allow us to perform this. The Router will need to have an IP Address on each of the VLANS, so we will need to create VLAN interfaces on the Router.

```ios
Router#configure terminal
Router(config)#interface gigabitEthernet 0/0/0.100
Router(config-subif)#ip address 192.168.0.1 255.255.255.0
Router(config-subif)#encapsulation dot1Q 100
Router(config-subif)#interface gigabitEthernet 0/0/0.200
Router(config-subif)#ip address 192.168.1.1 255.255.255.0
Router(config-subif)#encapsulation dot1Q 200
Router(config-subif)#interface gigabitEthernet 0/0/0
Router(config-if)#no shutdown
```

We can check that the interfaces have been correctly.

```ios
Router(config-if)#end
Router# show ip interface brief
Interface                 IP-Address   OK?  Method  Status                 Protocol
GigabitEthernet0/0/0      unassigned   YES  manual  up                     down
GigabitEthernet0/0/0.100  192.168.0.1  YES  manual  up                     down
GigabitEthernet0/0/0.200  192.168.1.1  YES  manual  up                     down
GigabitEthernet0/0/1      unassigned   YES  unset   administratively down  down
GigabitEthernet0/0/2      unassigned   YES  unset   administratively down  down
Vlan1                     unassigned   YES  unset   administratively down  down
```

### Configuring the Switch.

Now that the Router interfaces have been correctly configured, we now need to configure the switch so that it can pass this VLAN information between devices.

```ios
Switch>enable
Switch#configure terminal
Switch(config)#vlan 100
Switch(config-vlan)#name LeftVLAN
Switch(config-vlan)#vlan 200
Switch(config-vlan)#name RightVLAN
Switch(config-vlan)#interface range fastEthernet 0/1-4
Switch(config-if-range)#switchport mode access
Switch(config-if-range)#interface range fastEthernet 0/1-2
Switch(config-if-range)#switchport access vlan 100
Switch(config-if-range)#interface range fastEthernet 0/3-4
Switch(config-if-range)#switchport access vlan 200
Switch(config-if-range)#interface gigabitEthernet 0/1
Switch(config-if)#switchport mode trunk
```

We can now check the Switch VLAN configuration to ensure we have configured the Switch correclty.

```ios
Switch(config-if)#end
Switch#show vlan brief
VLAN Name      Status Ports
---- --------- ------ ------------
1    default   active Fa0/5 ...
100  LeftVLAN  active Fa0/1, Fa0/2
200  RightVLAN active Fa0/3, Fa0/4
....
```

Here we can see that the VLAN configuration is correct for each of the access ports. We should now be able to ping from LeftVLAN (VLAN 100) to RightVLAN (VLAN 200).

