---
layout: default
title: OpenSCAD Gridfinity Extended
nav_order: 1
has_children: true
permalink: /docs/openscad/gridfinity-extended
---

# Gridfinity Extended

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

![openscad label](/assets/openscad/gridfinity-extended/gridfinity_basic_cup-multi_text.gif){:.wrap-lightbox width="300" }

## Overview
Gridfinity Extended is an OpenSCAD library originally based on Jamies library https://github.com/vector76/gridfinity_openscad
Built on this library are added base features and a customisable extended feature set.

Details of the [Gridfinity specifications](https://gridfinity.xyz/specification/) can be found on the official site https://gridfinity.xyz/.

## Resources
### Online Customiser
[Offical Gridfinity Extended on MakerWorld Customiser](https://makerworld.com/en/models/481168)<br>
The Official online version Gridfinity Extended is currently hosted on MakerWord's customiser (I prefer people don't host it in other places). I chose MakerWork as this version seems to work for all my models.
The Online model gives you online access to the model generation, without the need to use OpenSCAD on a PC. You do lose a couple of features, most notably the preview option. All online generators do not support preview, so colours or debug slice or calipers.


### Repo
GitHub repo [ostat/gridfinity_openscad](https://github.com/ostat/gridfinity_extended_openscad)

## Added features included
Features added the the Base Gridfinity cups
  - Corner only magnets
  - Flat base
  - Customisable Finger slide
  - [Patterned walls]({% link docs/openscad/gridfinity-extended/basic-cup.md %}#wall-pattern)
  - [Wall cutout]({% link docs/openscad/gridfinity-extended/basic-cup.md %}#wall-cutout)
  - [Round box]({% link docs/openscad/gridfinity-extended/basic-cup.md %}#tapered-corner)

## Extended features
Extended features are features that build on the base bin but allow for unique options. These features also allow combining multiple extended features in to a single tray.

Options available
 - Item Holder    
 - Divider
 - [Tray]({% link docs/openscad/gridfinity-extended/tray.md %})
