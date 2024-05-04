---
layout: default
title: OpenSCAD Hose adapters
nav_order: 2
has_children: true
permalink: /docs/openscad/hose-adapter
---
# OpenSCAD Hose adapters
![Hose Adapter connectors](/assets/openscad/hose-adapters/vacuum_hose_adapter-demo_text.gif){:.wrap-lightbox width="500"}<br>
This is an OpenSCAD script for creating hose adapters.

## Repo
Here you can find the scripts, to create you own adapters.
[ostat/vacuum-hose-adapter-openscad](https://github.com/ostat/vacuum-hose-adapter-openscad).

## Overview
There are two groupings of parts **connectors** and **transitions**. Each (well most) Adapters are made up of three parts.
 - **End1** the first connector (shown in pink)
 - **End2** the second connector (shown in blue)
 - **transition** that connects them together (shown in green). 
The transition between the adapters can be straight or angled, and can be a one to one adapter or a one to many (of the same type).

## Connectors
There are currently eight different connectors. Some (`hose`, `flange`, `magnetic` and `nozzle`) are generic and configurable. Then there are four (`Camlock`, `CenTec`, `DW735` and `Dyson V6`) that are fixed adapters and are not configurable. All eight of the connectors can be use as **End1** or **End2** depending on your needs.

## Transitions 
There are currently five different transitions that can be used to join the connectors. Each has different options and use cases that it is suited to. Not all adapters will be easy to print so depending on your settings support may be needed.