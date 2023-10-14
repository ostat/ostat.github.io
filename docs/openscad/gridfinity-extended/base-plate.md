---
layout: default
title: Base Plate
parent: Gridfinity Extended
grand_parent: OpenSCAD Projects
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

# Base Plate Settings
<img src="../../../assets/openscad/gridfinity-extended/baseplate-basic.gif" alt="openscad Subdivisions" width="300"/><BR>
Setting | Description
-|-
`width` | X dimension in grid units  (multiples of 42mm)<br>`[ 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ]`
`depth` | Y dimension in grid units (multiples of 42mm)<br>`[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ]`
`weighted` | <img src="../../../assets/openscad/gridfinity-extended/baseplate-weighted.gif" alt="openscad label" width="150"/><br>Allow space for weighted inserts
`lid` | <img src="../../../assets/openscad/gridfinity-extended/baseplate-lid.gif" alt="openscad label" width="150"/><br>A lid that is also a Gridfinity base
`lid_flat_base` | <img src="../../../assets/openscad/gridfinity-extended/baseplate-lid-flat-base.gif" alt="openscad label" width="150"/><br>Removes the internal grid from base the lid
`lid_half_pitch` | <img src="../../../assets/openscad/gridfinity-extended/baseplate-lid-half-pitch.gif" alt="openscad label" width="150"/><br>Adds half pitch grid to the base of the lid