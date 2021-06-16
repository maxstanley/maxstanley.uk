+++
title = "Small Static Routing"
description = ""
date = 2021-06-16
tags = [ "cisco", "packet tracer" ]
draft = false
+++

Start by placing 4 2911 Routers in a square configuration with each connected to 2 other routers.
Attach a 2960 Switch to each of the routers.
Attach a single PC to each of the switches.

| Network | IP Network     | Router IP   | PC IP         |
| -       | -              | -           | -             |
| 0       | 192.168.0.0/24 | 192.168.0.1 | 192.168.0.100 |
| 1       | 192.168.1.0/24 | 192.168.1.1 | 192.168.1.100 |
| 2       | 192.168.2.0/24 | 192.168.2.1 | 192.168.2.100 |
| 3       | 192.168.3.0/24 | 192.168.3.1 | 192.168.3.100 |

## Configuring the Routers

### Internal Network

Repeat the steps for each of the 4 networks, replacing the X with the network number.

```ios
Router>enable
Router#configure terminal
Router(config)#interface gigabitEthernet 0/2
Router(config-if)#ip address 192.168.X.1 255.255.255.0
Router(config-if)#no shutdown
Router(config-if)#exit
Router(config)#ip dhcp excluded-address 192.168.X.1 192.168.X.99
Router(config)#ip dhcp pool NETWORK_X 
Router(dhcp-config)#network 192.168.X.0 255.255.255.0
Router(dhcp-config)#default-router 192.168.X.1
```

### Routing Configuration

| Link X -> Y          | X IP Address | Y IP Address |
| -                    | -            | -            |
| Router 0 -> Router 1 | 10.0.0.1     | 10.0.0.2     |
| Router 1 -> Router 2 | 10.0.0.5     | 10.0.0.6     |
| Router 2 -> Router 3 | 10.0.0.9     | 10.0.0.10    |
| Router 3 -> Router 0 | 10.0.0.13    | 10.0.0.14    |

Repeat these steps for each of the 4 Routers. The interfaces and addresses will need to match that of your topology.

```ios
Router>enable
Router#configure terminal
Router(config)#interface gigabitEthernet 0/0
Router(config-if)#ip address 10.0.0.X 255.255.255.252
Router(config-if)#no shutdown
Router(config-if)#interface gigabitEthernet 0/1
Router(config-if)#ip address 10.0.0.Y 255.255.255.252
Router(config-if)#no shutdown
```

Here X and Y are the immediate neighbours of the router beinng configured.
With Z being the router that is not directly attacker to the router being configured.
The last ip route has a higher "administrative distance" than the other 3 routes, this route will act as a fail over should that link fail.

```ios
Router>enable
Router#configure terminal
Router(config)#ip route 192.168.X.0 255.255.255.0 10.0.0.X 50
Router(config)#ip route 192.168.Y.0 255.255.255.0 10.0.0.Y 50
Router(config)#ip route 192.168.Z.0 255.255.255.0 10.0.0.X 50
Router(config)#ip route 192.168.Z.0 255.255.255.0 10.0.0.Y 60
```

## Configuring the PCs

Go around each of the PCs and enable DHCP. Desktop > IP Configuration > DHCP

Each PC should now be able to ping one another.

