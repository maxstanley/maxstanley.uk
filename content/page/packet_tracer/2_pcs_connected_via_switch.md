+++
title = "Connecting 2 PCs via a switch"
description = ""
date = 2021-06-10
tags = [ "cisco", "packet tracer" ]
draft = false
+++

Placing the two PCs into the network. And Network Devices > Switch > 2960, connect the PCs to the first 2 switch ports, using either Cross-Over or Direct connect cables.

Then we must configure the 2 PCs with IP Addresses to allow them to communicate.

PC0: 192.168.0.2
PC1: 192.168.0.3

From PC1, Desktop > Command Prompt

```bash
ping 192.168.0.2 
```

We can now see the two PCs are able to communicate with each other, whilst connected to a switch.

