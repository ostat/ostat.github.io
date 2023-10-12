---
layout: default
title: Mirabella Genio I003335
parent: IOT
---

# tuya cutter
https://github.com/tuya-cloudcutter/tuya-cloudcutter.github.io/blob/master/profiles/oem-bk7231s-light-ty-2.9.6-sdk-1.0.2-40.00.json

Follow the settings:

use the FW version from the TUYA app, mine was
- "version": "2.9.6"
- "chip": "BK7231T"

`sudo ./tuya-cloudcutter.sh -r`
Flashed with  	OpenBK7231T_UG_1.16.9.bin
# Light settings
RGB+CCT 9W Light<BR>
<BR>
Mirabella Genio I003335, I had to configure it to use a SM2135 driver.<BR>
- P24 (PWM4) SM2135DAT
- P26 (PWM5) SM2135CLK

Start up command - `SM2135_map 2,1,0,4,3`

Flag 9 - [SM2135] Use separate RGB/CW modes instead of writing all 5 values as RGB (Disabled)

After changing any of the above settings, a reboot of the device is needed. 