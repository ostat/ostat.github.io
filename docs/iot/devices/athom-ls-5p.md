---
layout: default
title: Athom LS-5P LED strip controller
parent: Devices
grand_parent: IOT
nav_order: 2
---
#Detailed saved from Athom site as the page is no longer available.#

# RGBW Light Strip Controller
The latest Tasmota version<br>
ESP8285H16 built in<br>
Official OTA supported<br>
Total local control with quick setup and updates. Control using MQTT, Web UI, HTTP or serial. Automate using timers, rules or scripts. Integration with home automation solutions. Incredibly expandable and flexible. Can be easily upgrade to ESPHome or Homekit etc. Contact us for upgrade firmware<br>

- Working voltage: DC5-12V (5 V, 9 V, 12 V, etc.)
- Output channel: RGBW channel
- Output current:  16A

## LS5P-TAS
link https://web.archive.org/web/20230315040809/https://www.athom.tech/blank-1/tasmota-rgbw-light-strip-controller

### Tasmota Template:
`{"NAME":"LS_5PIN_TAS","GPIO"[32,0,576,0,416,0,0,0,417,419,418,0,0,0],"FLAG":0,"BASE":18}`

### GPIO
```
GPIO# Component
GPIO0 Button1
GPIO1 None
GPIO2 None
GPIO3 None
GPIO4 PWM2
GPIO5 None
GPIO9 None
GPIO10 None
GPIO12 PWM1
GPIO13 PWM4
GPIO14 PWM3
GPIO15 None
GPIO16 None
FLAG None
```
## LS5P-WLED 
https://web.archive.org/web/20240523020216/https://www.athom.tech/blank-1/wled-rgbw-light-strip-controller

**GPIO**
```
R：GPIO12
G：GPIO4
B：GPIO14
W：GPIO13
Button：GPIO0
```