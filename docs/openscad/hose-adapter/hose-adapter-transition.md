---
layout: default
title: Transitions
nav_order: 1
has_children: true
parent: OpenSCAD Hose adapters
permalink: /docs/openscad/hose-adapter/transitions
---
# Transition
This covers the way that the two end of the adapter are connected. The transition will take in to account the size, wall and thickness of each end and using the provided settings created a shape. <br>

## Transition

Setting | Description
-|-
`Transition_Style` | tapered for hose connections, flat for attaching to a device [flat, taper+bend: Taper then bend, bend+taper: Bend then taper, organicbend: Tapered bend, hull: Hull for multiple end count]
`Transition_Length` | Length of the transition between the two ends
`Transition_Bend_Radius` | Radius of transition bend (mm)
`Transition_Angle` | Angle of bend through the transition section.
`Transition_xOffset` | X offset for the connector, not supported on taperedbend.
`Transition_yOffset` | Y offset for the connector, not supported on taperedbend.

## Transition Multiple connector settings

Setting | Description
-|-
`Transition_End2_Count` | Duplicate the second connector. Adjust angle and bend radius to make it work. [1, 2, 3, 4, 5, 6]
`Transition_HullLength` | MultiConnector, connector in hull length.
`Transition_HullyOffset` | MultiConnector, connector in hull offset.
`Transition_HullCenter` | MultiConnector, add center connector.
`Transition_HullCenterHeight` | MultiConnector, center connector height. `default is 2*lengthInHull`

## Transition Support For Angled Pipes

Setting | Description
-|-
`Transition_Base_Type` | Include a flat section on the transition to assist with printing `[none, oval, rectangle]`
`Transition_Base_Thickness` | Support Base Additional Thickness
`Transition_Base_Width` | Support Base Width. `default is half diameter`
`Transition_Base_Length` | Support Base Length `Default is 2/3 diameter`
`Transition_Base_Angle` | Support Base Angle position, `default half of Bend Radius`

## other

Setting | Description
-|-
`Enable_Debug_Slice` | Slice model in half to be able to easy see inside