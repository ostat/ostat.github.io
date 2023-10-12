---
layout: default
title: CNC Clamps
nav_order: 1
has_children: true
permalink: /docs/openscad/hoseadapter
---

# Connector 1
Setting | Description
-|-
`End1_Wall_Thickness` | Wall thickness<br>`default=2`
`End1_Style` | The style of the end<br>options <br><ul><li>`mag`, Magnetic Flange</li><li>`flange`, Flange</li><li>`hose`, Hose connector</li><li>`dyson`, Dyson connector</li></ul>
`End1_Measurement` | Is the measurement the adapter's outside or inside diameter? <br>options<ul><li>`inner`, Inner adapter measurement</li><li>`outer`, Outer adapter measurement</li></ul>
`End1_Diameter`| End 1 diameter of the adapter (mm)
`End1_Length` | Length of the start connector (including the flange).
`End1_Taper` | Taper of the start connector, use negative to taper other direction.
 


# Connector 1 - Hose connector
Setting | Description
-|-
`End1_StopThickness` | Thickness of hose stop
`End1_StopLength` | Length of hose stop
`End1_Stop_Symmetrical` | Should the stop be tapered both sides.Might easier to print.
`End1_Barbs_Count` | Number of barbs
`End1_Barbs_Thickness` | Thickness of the barbs, default is half wall thickness
`End1_Barbs_Symmetrical` | Should the barbs be tapered both sides. Might be easier to print. [0,1]
`End1_Hose_EndCap_Diameter` | End Cap Inner Diameter.
`End1_Hose_EndCap_Thickness` | Thickness of end cap.
 
# Connector 1 - Flange
Setting | Description
-|-
`End1_Flange_Width` | Width of Flange added to the connector diameter
`End1_Flange_Thickness` | Thickness of the flange
`End1_Flange_Screw_Position` | Position of the screws added to the connector diameter, 0 = middle of flange
`End1_Flange_Screw_Border` | Minium amount of the material around the magnets (mm), 0 = End1_Flange_Width / 4
`End1_Flange_Screw_Count` | Number of Screw holes flange
`End1_Flange_Screw_Diameter` | The diameter of the screws (mm)


# Connector 1 - Magnetic Connector
Setting | Description
-|-
`End1_Magnets_Count` | Number of magnets in the connector
`End1_Magnet_Diameter` | The diameter of the magnets (mm)
`End1_Magnet_Thickness` | The thickness of the magnets (mm)
`End1_Magnet_Border` | Minium amount of the material around the magnets (mm)
`End1_Magnet_Flange_Thickness` | Thickness of the magnet flange (mm)
`End1_Ring` | Include a flange alignment ring `[no: No alignment ring, protruding: protruding ring, recessed: Recessed ring]`

# Transition
Setting | Description
-|-
`Transition_Style` | tapered for hose connections, flat for attaching to a device [flat, taper+bend: Taper then bend, bend+taper: Bend then taper, organicbend: Tapered bend, hull: Hull for multiple end count]
`Transition_Length` | Length of the transition between the two ends
`Transition_Bend_Radius` | Radius of transition bend (mm)
`Transition_Angle` | Angle of bend through the transition section.
`Transition_xOffset` | X offset for the connector, not supported on taperedbend.
`Transition_yOffset` | Y offset for the connector, not supported on taperedbend.

# Transition Multiple connector settings
Setting | Description
-|-
`Transition_End2_Count` | Duplicate the second connector. Adjust angle and bend radius to make it work. [1, 2, 3, 4, 5, 6]
`Transition_HullLength` | MultiConnector, connector in hull length.
`Transition_HullyOffset` | MultiConnector, connector in hull offset.
`Transition_HullCenter` | MultiConnector, add center connector.
`Transition_HullCenterHeight` | MultiConnector, center connector height. `default is 2*lengthInHull`
  

# Transition Support For Angled Pipes
Setting | Description
-|-
`Transition_Base_Type` | Include a flat section on the transition to assist with printing `[none, oval, rectangle]`
`Transition_Base_Thickness` | Support Base Additional Thickness
`Transition_Base_Width` | Support Base Width. `default is half diameter`
`Transition_Base_Length` | Support Base Length `Default is 2/3 diameter`
`Transition_Base_Angle` | Support Base Angle position, `default half of Bend Radius`

# Connector 2
Setting | Description
-|-
`End2_Wall_Thickness` | Wall thickness
`End2_Style` | `[mag: Magnetic Flange, flange: Flange, hose: Hose connector, nozzle: Nozzle attachment]`
`End2_Measurement` | Is the measurement the adapter's outside or inside diameter? `[inner, outer]`
`End2_Diameter` | End 2 diameter of the adapter (mm)
`End2_Length` | Length of the pipe coming out of the flange.
`End2_Taper` | Taper of the start connector, use negative to taper other direction.
 
# Connector 2 - Hose connector
Setting | Description
-|-
`End2_StopThickness` | Thickness of hose stop
`End2_StopLength` | Length of hose stop
`End2_Stop_Symmetrical` | Should the stop be tapered both sides. Might easier to print.
`End2_Barbs_Count` | Number of barbs
`End2_Barbs_Thickness` | Thickness of the barbs, default is half wall thickness
`End2_Barbs_Symmetrical` | Should the barbs be tapered both sides. Might be easier to print. [0,1]
`End2_Hose_EndCap_Diameter` | End Cap Inner Diameter.
`End2_Hose_EndCap_Thickness` | Thickness of end cap.

# Connector 2 - Flange
Setting | Description
-|-
`End2_Flange_Width` | Width of Flange added to the connector diameter
`End2_Flange_Thickness` | Thickness of the flange
`End2_Flange_Screw_Position` | Position of the screws added to the connector diameter, 0 = middle of flange
`End1_Flange_Width` | Minium amount of the material around the magnets (mm), 0 =  / 4
`End2_Flange_Screw_Border` | 
`End2_Flange_Screw_Count` | Number of Screw holes flange
`End2_Flange_Screw_Diameter` | The diameter of the screws (mm)

#Connector 2 - Magnetic Flange
Setting | Description
-|-
`End2_Magnets_Count` | Number of magnets in the flange
`End2_Magnet_Diameter` | The diameter of the magnets
`End2_Magnet_Thickness` | The thickness of the magnets
`End2_Magnet_Border` | Size of the material around the magnets
`End2_Magnet_Flange_Thickness` |  Inner diameter of the Magnet flange
`End2_Ring` | Include a flange alignment ring `[no: No alignment ring, protruding: Protruding ring, recessed: Recessed ring]`

# Connector 2 - Nozzle
Setting | Description
-|-
`End2_Nozzle_Shape` | `[square, circle]`
`End2_Nozzle_Square_Width` | 
`End2_Nozzle_Square_Depth` | 
`End2_Nozzle_Tip_Wall_Thickness` | 
`End2_Nozzle_Radius` | 
`End2_Nozzle_Length` | 
`End2_Nozzle_xOffset` | 
`End2_Nozzle_yOffset` | 
`End2_Nozzle_Chamfer_Percentage` | 
`End2_Nozzle_Chamfer_Angle` | 

# Alignment Ring
Setting | Description
-|-
`Draw_Alignment_Ring` |draw just the alignment ring `default = "no"` `[end1: Draw end 1, end2: Draw end 2, no: Don't draw]`
`Alignment_Depth` | Alignment depth in to flange (mm)
`Alignment_Upper_Width` | Alignment upper width at widest part (mm)
`Alignment_Lower_Width` | Alignment lower width at narrowest part (mm)
`Alignment_Side_Clearance` | Alignment side clearance, to give nice fit (mm).
`Alignment Depth Clearance` | to prevent hitting bottom (mm).

# other
Setting | Description
-|-
`Enable_Debug_Slice` | Slice model in half to be able to easy see inside