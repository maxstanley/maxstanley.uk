+++
title = "2 Networks Connected via a Router"
description = ""
date = 2021-06-10
tags = [ "cisco", "packet tracer" ]
draft = false
+++

## Laying out the network

Place 4 PCs, 2 2960 (Switch) & 1 4331 (Router), attach the first 2 to 1 switch, and the 2nd 2 to the 2nd switch.

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

We can now see the four PCs are able to communicate within their networks, whilst connected to a switch.

## Connecting the two networks with a router

Connect Gig0/0/0 from the Router to Switch0 Gig0/1, and Gig0/0/1 to Switch1 Gig0/1.

### Configuring the Router

```ios
Would you like to enter the initial configuration dialog? [yes/no]: no

Press RETURN to get started!

Router>
```

In order to allow the two networks to communicate we must configure the Router to have an ip address on each of the networks.

First, we can check to see how the routers interfaces are currently configured.

```ios
Router>enable
Router#show ip interface brief
Interface             IP-Address  OK?  Method  Status                 Protocol
GigabitEthernet0/0/0  unassigned  YES  unset   administratively down  down
GigabitEthernet0/0/1  unassigned  YES  unset   administratively down  down
GigabitEthernet0/0/2  unassigned  YES  unset   administratively down  down
Vlan1                 unassigned  YES  unset   administratively down  down
```

As you can see from the output of the above command, no IP Addresses have been set on any interace, and the Status of the interfaces are all "administratively down".

The following commands are used to assign IP Addresses to the interfaces.

```ios
Router#configure terminal
Enter configuration commands, one per line. End with CNTL/Z.
Router(config)#interface gigabitEthernet 0/0/0
Router(config-if)#ip address 192.168.0.1 255.255.255.0
Router(config-if)#no shutdown
Router(config-if)#interface gigabitEthernet 0/0/1
Router(config-if)#ip address 192.168.1.1 255.255.255.0
Router(config-if)#no shutdown
```

We can check that the interfaces have been correctly configured by re-running the same command as before.

```ios
Router(config-if)#end
Router# show ip interface brief
Interface             IP-Address   OK?  Method  Status                 Protocol
GigabitEthernet0/0/0  192.168.0.1  YES  manual  up                     down
GigabitEthernet0/0/1  192.168.1.1  YES  manual  up                     down
GigabitEthernet0/0/2  unassigned   YES  unset   administratively down  down
Vlan1                 unassigned   YES  unset   administratively down  down
```

### Configuring the PCs

Now that we have given the Routers interfaces IP Addresses, we must now configure the PCs to use this as their default gateway.

PC0-1: 192.168.0.1
PC2-3: 192.168.1.1

Desktop > IP Configuration > Default Gateway

