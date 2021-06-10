+++
title = "Multiple Switches Multiple VLAN Core Switches"
description = ""
date = 2021-06-10
tags = [ "cisco", "packet tracer" ]
draft = false
+++

## Laying out the network

Place 8 PCs, 2 2960 (Switch) & 1 4331 (Router), attach 4 PCs to each of the swtiches.

Then we must configure the 4 PCs with IP Addresses to allow them to communicate, with the other computer in their local network.

PC0: 192.168.0.2  
PC1: 192.168.0.3  
PC2: 192.168.1.2  
PC3: 192.168.1.3  
PC4: 192.168.2.2  
PC5: 192.168.3.2  
PC6: 192.168.4.2  
PC7: 192.168.4.3

We should also configure the default gateways for each of the PCs.

PC0-1: 192.168.0.1  
PC2-3: 192.168.1.1  
PC4:   192.168.2.1  
PC5:   192.168.3.1  
PC6-7: 192.168.4.1

## Connecting the two networks with a router

Connect Gig0/0/0 from the Router to CoreSwitch0 Gig0/1. Connect CoreSwitch0 Gig1/1 to Switch0 Gig0/1, and CoreSwitch0 Gig2/1 to Switch1 Gig0/1.

### Configuring the Router

```ios
Router#configure terminal
Router(config)#interface gigabitEthernet 0/0/0.100
Router(config-subif)#encapsulation dot1Q 100
Router(config-subif)#ip address 192.168.0.1 255.255.255.0
Router(config-subif)#interface gigabitEthernet 0/0/0.200
Router(config-subif)#encapsulation dot1Q 200
Router(config-subif)#ip address 192.168.1.1 255.255.255.0
Router(config-subif)#interface gigabitEthernet 0/0/0.300
Router(config-subif)#encapsulation dot1Q 300
Router(config-subif)#ip address 192.168.2.1 255.255.255.0
Router(config-subif)#interface gigabitEthernet 0/0/0.400
Router(config-subif)#encapsulation dot1Q 400
Router(config-subif)#ip address 192.168.3.1 255.255.255.0
Router(config-subif)#interface gigabitEthernet 0/0/0.500
Router(config-subif)#encapsulation dot1Q 500
Router(config-subif)#ip address 192.168.4.1 255.255.255.0
Router(config-subif)#interface gigabitEthernet 0/0/0
Router(config-if)#no shutdown
```

### Configuring the Switches.

#### CoreSwitch0

```ios
Switch>enable
Switch#configure terminal
Switch(config)#interface gigabitEthernet 0/1
Switch(config-if)#switchport mode trunk
Switch(config-if)#interface gigabitEthernet 1/1
Switch(config-if)#switchport mode trunk
Switch(config-if)#interface gigabitEthernet 2/1
Switch(config-if)#switchport mode trunk
Switch(config-if)#vlan 100
Switch(config-vlan)#name Accounting
Switch(config-vlan)#vlan 200
Switch(config-vlan)#name HR
Switch(config-vlan)#vlan 300
Switch(config-vlan)#name Director
Switch(config-vlan)#vlan 400
Switch(config-vlan)#name Marketing 
Switch(config-vlan)#vlan 500
Switch(config-vlan)#name IT
```

#### Switch0

```ios
Switch>enable
Switch#configure terminal
Switch(config)#vlan 100
Switch(config-vlan)#name Accounting
Switch(config-vlan)#vlan 300
Switch(config-vlan)#name Director
Switch(config-vlan)#vlan 500
Switch(config-vlan)#name IT
Switch(config-vlan)#interface range fastEthernet 0/1-4
Switch(config-if-range)#switchport mode access
Switch(config-if-range)#interface range fastEthernet 0/1-2
Switch(config-if-range)#switchport access vlan 100
Switch(config-if-range)#interface fastEthernet 0/3
Switch(config-if-range)#switchport access vlan 300
Switch(config-if-range)#interface fastEthernet 0/4
Switch(config-if-range)#switchport access vlan 500
Switch(config-if-range)#interface gigabitEthernet 0/1
Switch(config-if)#switchport mode trunk
```

#### Switch1

```ios
Switch>enable
Switch#configure terminal
Switch(config)#vlan 200
Switch(config-vlan)#name HR
Switch(config-vlan)#vlan 400
Switch(config-vlan)#name Marketing 
Switch(config-vlan)#vlan 500
Switch(config-vlan)#name IT
Switch(config-vlan)#interface range fastEthernet 0/1-4
Switch(config-if-range)#switchport mode access
Switch(config-if-range)#interface range fastEthernet 0/1-2
Switch(config-if-range)#switchport access vlan 200
Switch(config-if-range)#interface fastEthernet 0/3
Switch(config-if-range)#switchport access vlan 400
Switch(config-if-range)#interface fastEthernet 0/4
Switch(config-if-range)#switchport access vlan 500
Switch(config-if-range)#interface gigabitEthernet 0/1
Switch(config-if)#switchport mode trunk
```

All PCs should now be able to communicate within their L2 Networks across the switches. And can communicate over VLANS using L3 routing on the Router.
 
