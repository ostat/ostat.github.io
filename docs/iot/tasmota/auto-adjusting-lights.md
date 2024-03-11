---
layout: default
title: Auto Adjusting Lights
parent: Tasmots
grand_parent: IOT
nav_order: 2
---

# auto adjusting lights using Tasmota Rules
I want lights that can be controlled by a mains power switch. I want the brightness and colour to auto adjust during the day based on tome but also be easy disable the auto adjust as needed.

- When turning on the light it set a dull initial like, then  collect the time and set the brightness and temperature.
- Using the Mains switch, if the light is turned off before 10 seconds, the next time its turned on it will disable the time based light settings and set to max brightness.
- Also using the soft switch (un the UI) each time the light is turned on it will enable and disable the auto Colour and temp settings.
- While the auto chromatic rule is disabled the user can use the webui to set the colour and brightness.


### Tasmota commands needed to be set
 - **Timezone**: Set the time zone `Timezone +10`
 - **WebTime**: Show the time in the web ui. `WebTime 0,19`
 - **Latitude**: Set latitude in decimal degrees format (for sunrise and sunset) `Latitude -33.893681`
 - **Longitude**: Set longitude in decimal degrees format (for sunrise and sunset) `Longitude 18.619954`
 - **SetOption20**: Update of Dimmer/Color/CT without turning power on
 - **PowerOnState**: 0 / OFF = keep power(s) OFF after power up `PowerOnState 0`
 - **Speed**: 1..40 = set fade speed from fast 1 to very slow 40 `speed 5`
 ~~- **SetOption91**: Enable Fade at boot and power on. By default fading is not enabled at boot because of stuttering caused by wi-fi connection~~
 - **Fade**: enable fade `Fade 1`
 - **rule1**: enable rule1 `rule1 1`

### Tasmota Rules
```
//mem1, last boot was less 10 seconds
//val1, midday between sunrise and sunset
//val2, ct color temperature 153..500
//val3, Dimmer 1..100
//val4, 0,3 rule disabled, 1 enabled
//rule1 the setup
//rule2 actions changes to the globe. 
rule1
on Power1#Boot DO Backlog0 Dimmer 20; CT 500; event checkboot=%mem1%; RuleTimer1 20; Mem1 1; var2 500; var3 10; endon
on event#checkboot=1 do Backlog event maxbrightness; var4 0 endon
on event#checkboot!=1 do var4 1 endon 
on event#maxbrightness do Backlog var3 100; var2 339; event updateLight endon
on Rules#Timer=1 DO Mem1 0 ENDON 
on system#boot do event CalcMyMidDay endon 
on Time#Set do event CalcMyMidDay endon 
on event#CalcMyMidDay do backlog0 var1 %sunset%; sub1 %sunrise%; mult1 0.5; event calcLight=%time% endon
on event#updateLight do backlog0 Dimmer %var3%; CT %var2% endon
on Power1#state==1 do add4 1 endon
on var4#State<=1 do rule2 %value% endon
on var4#State>1 do var4 0 endon

//rule2 action updates
rule2
on Time#Minute do event calcLight=%value% endon
on event#calcLight<%sunrise% do backlog0 scale2 %value%,%var1%,%sunrise%,500,153; var3 80; event updateLight BREAK
on event#calcLight>1320 do backlog0 var2 500; var3 20; event updateLight BREAK
on event#calcLight>1200 do backlog0 var2 500; var3 35; event updateLight BREAK
on event#calcLight>%sunset% do backlog0 var2 500; var3 80; event updateLight BREAK
on event#calcLight<%var1% do backlog0 var2 153; var3 80; event updateLight BREAK
on event#calcLight>%var1% do backlog0 scale2 %value%,%var1%,%sunset%,153,500; var3 80; event updateLight BREAK
```

