---
layout: default
title: Auto Power Strip
parent: Tasmots
grand_parent: IOT
nav_order: 2
---

When using an IOT powerboard, with power monitoring Enable/disable some outlets based on the total power usage.

Use case:
Have a PC connected to `outlet1`, and peripherals (speakers, monitors, RGB legs) connected to `outlet2` and `outlet3`.
Shutting down the PC will cut power to the Peripherals.

Have a TV connected to `outlet1`, and peripherals (speakers, ACR, VCR, AppleTV, RGB legs) connected to `outlet2` and `outlet3`.
Shutting down the TV will cut power to the Peripherals. This can be tricky as the TV might not be the most power hungry item on the board.

The powerboards I have seen, have a single power monitor for the whole board. So it only knows the total energy usage, not the energy use of a single port. Selecting power trigger levels is tricky, and might take some fine tuning over time.

The button on the powerboard is configured so a single press will disable the automation, and a long press (or rebooting the powerboard) will re-enable the automation. This can be useful if the trigger levels need adjustment.

There are delays when setting power on and off (30 seconds), to prevent the board switching on and off quickly.

```
//Rule1
//on boot enable automation/rule2
//button single press disable automation/rule2
//button long press (hold till triggers) disable automation/rule2
//Binding to button1 overrides that action, for me that disable power1, which is a usb so is ok for me. double press for power2,3,4 still works.

//Rule2
//if power usage is over 0.65amps enable peripherals
//if power is lower than 0.45amps disable peripherals

rule1
on Power1#Boot do do Backlog var3 2; event enablePowerAutomation endon
on button1#State=2 do Backlog event disablePowerAutomation endon 
on button1#State=3 do Backlog event enablePowerAutomation endon 
on event#enablePowerAutomation do rule2 1 BREAK
on event#disablePowerAutomation do delay 1 BREAK

rule2
on energy#current>0.65 do event enablePeripherals=%var3% endon 
on energy#current<0.45 do event disablePeripherals=%var3% endon 
on event#enablePeripherals!=1 do Backlog power3 1; delay 5; power4 1; delay 150; var3 1 BREAK
on event#enablePeripherals=1 do delay 5; BREAK
on event#disablePeripherals=0 do delay 5; BREAK
on event#disablePeripherals!=0 do Backlog power3 0; delay 5; power4 0; delay 150; var3 0 BREAK
```