+++
title = "Securing Cisco"
description = ""
date = 2021-06-16
tags = [ "cisco", "packet tracer" ]
draft = false
+++

## Configuring a Message of the Day Banner

Whilst not a technical security solution, this is a policy security solution.
The @'s can be replaced with any other delimeter.

```ios
Device>enable
Device#configure terminal
Device(config)#banner motd @Message@
```

## Securing Access to Priveleged Mode

### Plain-Text Password

Setting the password.

```ios
Device>enable
Device#configure terminal
Device(config)#enable password PASSWORD
```

Viewing the password.

```ios
Device>enable
Device#show running-config | include enable password
enable password PASSWORD
```

### Encrypting Plain-Text Passwords

Setting the password.

```ios
Device>enable
Device#configure terminal
Device(config)#enable password PASSWORD
Device(config)#service password-encryption
```

Viewing the password.

```ios
Device>enable
Device#show running-config | include enable password
enable password 7 08116D7D3A2E2A2536
```

### Encrypted Password

Setting the password.

```ios
Device>enable
Device#configure terminal
Device(config)#enable secret PASSWORD
```

Viewing the password.

```ios
Device>enable
Device#show running-config | include enable secret
enable secret 5 $1$mERr$cP1uxB/ASHbnPQTLzT8H10
```

## Securing Access to Lines

### Securing Console

```ios
Device>enable
Device#configure terminal
Device(config)#line console 0
Device(config-line)#password PASSWORD
Device(config-line)#login
```

