---
layout: default
title: Basic Cup Lid
parent: Gridfinity Basic Cup
grand_parent: OpenSCAD Gridfinity Extended
---

# Navigation Structure
{: .no_toc }

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

![gridfinity extended](/assets/openscad/gridfinity-extended/gridfinity_lid.gif){:.wrap-lightbox width="300"}

Adds a sliding lit to a Gridfinity cup. The top of the lid aligns with the top of the cup of it had no lid. A small rebate and set of runners is added to the cup to support the lid and stop it lifting off. You can use any of the existing Lips, however some could result in overhand that are not very printable. Recommend `not stackable` or `reduced` if you want to stack the cups.

# General Cup Settings

Setting | Description
-|-
`mode` | Should we render the `cup`, `lid` or `both`.
`sliding_lid_enabled` | Should the lid be enabled.
`sliding_lid_thickness` | How thick the lid should be<br>Default is `wall thickness * 2`.
`sliding_min_wall_thickness` | The rebate for the lid can cut in to the cup wall. This defines the minium thickens of the wall.<br>Default is `wall thickness / 2`.<br>
`sliding_min_support` | how much wall  should be under and above the lid to to provide support. This would come in to the bin reducing the size of the opening<br>Default is `sliding_lid_thickness / 2`.<br>
`sliding_clearance`| The amount the lid is reduced compared to the rebate<br>
`sliding_lid_cutout_size`| X and Y size of the cutout in mm. Negative numbers are use as a ratio. -2 would be 1/2<BR>
`sliding_lid_cutout_radius`| Cutout corner radius size in mm<BR>
`sliding_lid_cutout_position`| The cutout is centred, this x and y value allows you offset the position<BR>