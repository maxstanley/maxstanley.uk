+++
title = "Direclty Connecting 2 PCs"
description = ""
date = 2021-06-10
tags = [ "cisco", "packet tracer" ]
draft = false
+++

Placing the two PCs into the network. Select Connections > Cross-Over Cable. PCs can't be connected using a direct connection cable.

Then we must configure the 2 PCs with IP Addresses to allow them to communicate.

PC0: 192.168.0.2
PC1: 192.168.0.3

Desktop > IP Configuration > Static

IPv4 Address: From Above
Subnet Mask: 255.255.255.0

From PC1, Desktop > Command Prompt

```bash
ping 192.168.0.2 
```

We can now see the two PCs are able to communicate with each other.

