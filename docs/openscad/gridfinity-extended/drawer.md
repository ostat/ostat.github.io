---
layout: default
title: Gridfinity Drawers
parent: OpenSCAD Gridfinity Extended
nav_order: 4
---

# Gridfinity Drawers

{: .no_toc }
<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

Gridfinity drawers. The drawers are designed so that a gridfinity bin can fit in side the drawer.

![openscad label](/assets/openscad/gridfinity-extended/gridfinity_drawer-demo_png.gif){:.wrap-lightbox width="600" }

# Settings
## Chest Settings
![openscad label](/assets/openscad/gridfinity-extended/gridfinity_drawer-chest_png.gif){:.wrap-lightbox width="300" }

Setting | Description
-|-
`mode` | What to display `[everything, Single Drawer, Drawers, Chest]`
`drawer inner width` | Inner width of drawer in Gridfinity units
`drawer inner depth` | Inner depth of drawer in Gridfinity units
`drawer inner height` | Inner height of drawer in Gridfinity units
`drawer count` | Number of drawers
`drawer enable custom sizes` | Check to use sizes from a list
`drawer custom sizes` | Inner heights of drawers in Gridfinity units. Edit in script for more than 4 items.
`clearance` | Distance between drawer and chest, or between contents and drawer
`box wall thickness` | 
`box wall slide thickness` | Thickness of drawer slides in mm. 0 uses wall thickness
`box drawer slide width` | Width of drawer slides in mm. 0 is full box width.

## Drawer Settings
![openscad label](/assets/openscad/gridfinity-extended/gridfinity_drawer-drawer_png.gif){:.wrap-lightbox width="300" }

Setting | Description
-|-
`handle size` | ![drawer handle size](/assets/openscad/gridfinity-extended/gridfinity_drawer-drawerHandle_text.gif){:.wrap-lightbox width="150" }<br>Handle size width, depth, height, and radius. Height, less than 0 drawerHeight/abs(height). radius, 0 = depth/2. 
`wallthicknessInner` | Thickness of drawer inset walls
`drawerbase` | ![drawer base style](/assets/openscad/gridfinity-extended/gridfinity_drawer-drawerBase_text.gif){:.wrap-lightbox width="150" }<br>Type of the drawer insert floor `[Grid only, floor only, Grid and floor]`
`drawer grid style` | ![drawer grid style](/assets/openscad/gridfinity-extended/gridfinity_drawer-drawerGridStyle_text.gif){:.wrap-lightbox width="150" }<br>`[Default, Efficient magnet base]`

## Chest Top Plate Settings
![Chest Top Plate](/assets/openscad/gridfinity-extended/gridfinity_drawer-chest_png.gif){:.wrap-lightbox width="300" }

Setting | Description
-|-
`box enable top grid` | 
`box top grid style` | `[Default, Efficient magnet base]`

## Chest Base
![Chest Base](/assets/openscad/gridfinity-extended/gridfinity_drawer-chestBottom_png.gif){:.wrap-lightbox width="300" }

Setting | Description
-|-
`bottomgrid` | Check to enable bottom grid
`magnet diameter`| 
`screw depth` | 
`hole overhang remedy` | Sequential Bridging hole overhang remedy is active only when both screws and magnets are nonzero (and this option is selected)
`box corner attachments only` | Only add attachments (magnets and screw) to box corners (prints faster).
`half pitch` | Enable to subdivide bottom pads to allow half-cell offsets
`flat_base` | Removes the internal grid from base the shape

## Chest Wall Pattern Settings
![Chest Wall Pattern](/assets/openscad/gridfinity-extended/gridfinity_drawer-chestWalls_png.gif){:.wrap-lightbox width="300" }

Setting | Description
-|-
`wallpattern_enabled` | Enables a grid pattern to be removed from the walls of the bin.<br>`default=false`
`wallpattern_style` | ![OpenSCAD base wallpattern style](/assets/openscad/gridfinity-extended/gridfinity_basic_cup-wallpatternstyle_text.gif){:.wrap-lightbox width="150" }<BR> Sets the grid style for the wall pattern.<br>**Options**<br>'`grid`: Aligns the holes in a square grid<br>`hexgrid`: Aligns the holes in a hexgrid. `voronoi`: Voronoi pattern of completely random placement.<br>`voronoigrid`: Voronoi pattern aligned to a grid,`voronoihexgrid`: : Voronoi pattern aligned to a hex grid.
`wallpattern_walls` | Selects the walls to enable the wall pattern on. [front, back, left, right].<br>I.E. [1,0,0,0] front only, [1,1,1,1] all walls.
`wallpattern_fill` | ![OpenSCAD base wallpattern fill](/assets/openscad/gridfinity-extended/gridfinity_basic_cup-wallpatternfill_text.gif){:.wrap-lightbox width="150" }<BR>The pattern wont fill the space completely. These options allow for extending the patter to fill the space. Note, the pattern is rotated to make the hex shape easier to print. As such you need to swap vertical and horizontal.<br>**Options**<br>`none`: no fill<br>`space`: Increase Space between grid to fill<br>`crop`: Over fill and crop the the allowed space<br>`crophorizontal`:Crop horizontal only<br>`cropvertical`: Crop vertical only<br>`crophorizontal_spacevertical`: Crop horizontal space vertical<br>`cropvertical_spacehorizontal`: Crop vertical space horizontal<br>`spacevertical`:Space vertical<br>`spacehorizontal`:Space horizontal<br>Does not apply to `voronoi` styles.
`wallpattern_hole_sides` | Number of sides of the hole.<br>**Options**<br>`4`: square<br>`6`: hexagon<br>`64`: circle<br>Does not apply to `voronoi` styles.
`wallpattern_hole_size` | Size of the hole
`wallpattern_hole_spacing` | Spacing between pattern
`wallpattern_voronoi_noise` | amount of noise to add to `voronoigrid` and `voronoihexgrid`
`wallpattern_voronoi_radius` | Radius of corners on voronoi shapes 