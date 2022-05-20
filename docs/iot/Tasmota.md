---
layout: default
title: Tasmota
parent: iot
---

# Firmware upgrade error
While updating firmware received error **Upload Failed** with and error message of **Upload buffer miscompare**. 

This appears to be related to space on the ESP chip.

Solution is to first install the latest minimal firmware, then update the latest full firmware.

---

# Prevent turn off
For Smart power sockets with power monitoring. When using for just use the power monitoring disable the ability to turn the power off. Prevent accidental turning off.
`PowerOnState` Display current setting.
`PowerOnState 4` On power, socket turns on, prevents turning off.
`PowerOnState 3` (default) On power on, return switch previous state prevent turning off.

[PowerOnState](https://tasmota.github.io/docs/PowerOnState/)

---

# Auto turn off
the PulseTime can be used to turn off a device after a period of time from when turned on.
`PulseTime` Display current settings.
`PulseTime1 0` Turn off pulseTime for relay1.
`PulseTime1 400` Turn off device after its been on for 5 minutes.

[PulseTime](https://tasmota.github.io/docs/Commands/#pulsetime)

---

# Home Assistant integration
Disable Tasmota device discovery (SetOption19 0)
[home assistant - tasmota](https://www.home-assistant.io/integrations/tasmota/)
[tasmota](https://tasmota.github.io/docs/Home-Assistant/#transition-from-mqtt-discovery)

---

# Rules
Single button multiout power strip. By default the button won't turn on or off all relays.
`button1#state=3`: Trigger on long press.
`SetOption1 0`: Restrict button actions to press and hold. Prevents accidental reset with long press.
`SetOption32 20`: Set long press time to 20 seconds
`Backlog`: Command/line contains multiple commands.

```
Backlog ButtonTopic 0; SetOption1 1; SetOption32 20
```

On long press turn everything off (regardless of what the sate is).
```
ON button1#state=3 DO power0 0 ENDON
```

On long press, if any relays is on turn all off, if all are off turn all on.
Solution uses a variable to record if anything is on.
```
    ON System#Boot DO var1 0 ENDON
    ON power1#state=1 DO Add1 1 ENDON
    ON power2#state=1 DO Add1 1 ENDON
    ON power3#state=1 DO Add1 1 ENDON
    ON power4#state=1 DO Add1 1 ENDON
    ON power1#state=0 DO Sub1 1 ENDON
    ON power2#state=0 DO Sub1 1 ENDON
    ON power3#state=0 DO Sub1 1 ENDON
    ON power4#state=0 DO Sub1 1 ENDON
    ON Var1#State>4 DO Var1 4 ENDON
    ON Var1#State<0 DO Var1 0 ENDON
    ON Var1#State>0 DO Var2 0 ENDON
    ON Var1#State==0 DO Var2 1 ENDON
    ON button1#state=3 DO power0 %var2% ENDON
```

[Tasmota Rules](ttps://tasmota.github.io/docs/Rules/)
[Tasmota setoptions](https://tasmota.github.io/docs/Commands/#setoptions)
