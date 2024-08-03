---
layout: default
title: Extension Item Holder
parent: OpenSCAD Gridfinity Extended
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

![](/assets/openscad/gridfinity-extended/gridfinity_item_holder-demo_text.gif){:.wrap-lightbox width="300" }

# Item Holder Settings

Setting | Description
-|-
`itemholder_known_item` | List of items to select from, including hex bit shanks and batteries. See list bellow [know items](#know-items).
`itemholder_known_batteries` | List of Batteries to select from. See list bellow [Batteries](#batteries).
`itemholder_known_cell_batteries` | List of Cell Batteries to select from. See list bellow [Cell Batteries](#ce--batteries).
`itemholder_known_cards` | List of Memory cards to select from. See list bellow [memory cards](#memory-cards).
`itemholder_known_cartridges` | List of Game cartridges to select from. See list bellow [cartridges](#cartridges).
`itemholder_hex_grid` | ![](/assets/openscad/gridfinity-extended/gridfinity_item_holder-grid_text.gif){:.wrap-lightbox width="200" }<br>Should the grid be square or hex. Hex grid works well for round and hex shaped items, not so well for rectangle things.
`itemholder_hole_clearance` | ![](/assets/openscad/gridfinity-extended/gridfinity_item_holder-hole_clearance_text.gif){:.wrap-lightbox width="200" }<br>enlarges the holes by this amount for clearance. Know item lists have exact sizes, some clearance is needed.<br>`default = 0.25`
`itemholder_hole_depth` | ![](/assets/openscad/gridfinity-extended/gridfinity_item_holder-hole_depth_text.gif){:.wrap-lightbox width="200" }<br>Depth of hole, Overrides the know item depth. Depth is limited by floor height.
`itemholder_hole_chamfer` | 

# Item Holder - Sample Item

Setting | Description
-|-
`itemholder_enable_sample` | Render just a sample of the item hole, to be used as a test print `default = false`
`itemholder_sample_wall_thickness` | Wall thickness of the sample print

# Item Holder - Multi Card

Setting | Description
-|-
`itemholder_multi_cards` |  Cards to use when multi card is selected I.E. `sd;USBA;microsd`
`itemholder_multi_card_compact` | Force nesting of multi cards, This has an issue where the last item could be cropped.

# Item Holder - Custom Item

Setting | Description
-|-
`itemholder_hole_base_shape` | Should the grid be square or <br>**Options**<br>`round`<br>`square`<br>`halfround`<br>`multicard`
`itemholder_hole_sides` | ![](/assets/openscad/gridfinity-extended/gridfinity_item_holder-hole_sides_text.gif){:.wrap-lightbox width="200" }<br>The number of sides for the hole, when custom is selected. Passed as the FN to a circle.
`itemholder_hole_diameter` | Diameter of the round hole
`itemholder_hole_size` | ![](/assets/openscad/gridfinity-extended/gridfinity_item_holder-hole_size_text.gif){:.wrap-lightbox width="200" }<br>The size the hole (diameter), when custom is selected.


# Item Holder - Item Layout

Setting | Description
-|-
`itemholder_grid_style` | Should the grid be square or hex. Only round and hex shapes support hex grid.<br>**Options**<br>`square`:square grid<br>`hex`: hex grid<br>`auto`: Auto selects hex grid when more items will fit.<br>`default = auto`
`itemholder_hole_spacing` | ![](/assets/openscad/gridfinity-extended/gridfinity_item_holder-hole_spacing_text.gif){:.wrap-lightbox width="200" }<br>Spacing around the item holes.<br>`default = 2`

`itemholder_hole_gridx` | ![](/assets/openscad/gridfinity-extended/gridfinity_item_holder-hole_grid_text.gif){:.wrap-lightbox width="200" }<br>Number of items in the x axis. Override the dynamic calculated items, 0 = dynamic<br>`default = 0`
`itemholder_hole_gridy` | Number of items in the y axis. Override the dynamic calculated items, 0 = dynamic. Half values (3.5) is only valid for hex grid.<br>`default = 0`
`itemholder_auto_bin_height` | ![](/assets/openscad/gridfinity-extended/gridfinity_item_holder-auto_bin_height_text.gif){:.wrap-lightbox width="200" }<br>Auto set the bin height and floor height based on the hole depth. Ensures that the item will fit.
`itemholder_compartments` | ![](/assets/openscad/gridfinity-extended/gridfinity_item_holder-compartments_text.gif){:.wrap-lightbox width="200" }<br>Number of compartments (group of items)<br> `default = [1,1]`;
`itemholder_compartment_spacing` | ![](/assets/openscad/gridfinity-extended/gridfinity_item_holder-compartment_spacing_text.gif){:.wrap-lightbox width="200" }<br>Spacing around the compartments, including the walls if its single compartment.<br>`default = 3`
`itemholder_compartment_centered` | ![](/assets/openscad/gridfinity-extended/gridfinity_item_holder-compartment_centered_text.gif){:.wrap-lightbox width="200" }<br>Center the holes within the compartments.<br>`default=true`
`itemholder_compartment_fill` | ![](/assets/openscad/gridfinity-extended/gridfinity_item_holder-compartment_fill_text.gif){:.wrap-lightbox width="200" }<br> How to fill the compartment.<br>`default = none`<br>**Options**<br>`none`: no fill, will use `itemholder_hole_spacing`.<br>`space`: Space in increased to fill compartment.<br>`crop`: Overfill an crop, not useful here.
`itemholder_customcompartments` | TBA

# know items
Dimensions used for the **know items** dropdowns. Please verify the Dimensions before printing using something like the measurement tool in Prusa Slicer. I didn't measure most of these, measurements were sourced from various places online.

## Tools

Name | diameter | width | thickness | depth | Item height | shape | source |
--|--|--|--|--|--|--|--
`4hexshank` | 4 | 0 | 0 | 5 | 20 | hex | [](){:target='_blank' white-space='nowrap'} |
`1/4hexshank` | 6.35 | 0 | 0 | 8 | 15 | hex | [](){:target='_blank' white-space='nowrap'} |
`1/4hexshanklong` | 6.35 | 0 | 0 | 15 | 40 | hex | [](){:target='_blank' white-space='nowrap'} |
`5/16hexshank` | 7.94 | 0 | 0 | 7 | 0 | hex | [](){:target='_blank' white-space='nowrap'} |
`3/8hexshank` | 9.52 | 0 | 0 | 10 | 0 | hex | [](){:target='_blank' white-space='nowrap'} |
`1/2shank` | 12.7 | 0 | 0 | 20 | 20 | round | [wikipedia](https://en.wikipedia.org/wiki/Router_(woodworking)){:target='_blank' white-space='nowrap'} |
`12shank` | 12 | 0 | 0 | 20 | 20 | round | [wikipedia](https://en.wikipedia.org/wiki/Router_(woodworking)){:target='_blank' white-space='nowrap'} |
`10shank` | 10 | 0 | 0 | 15 | 20 | round | [wikipedia](https://en.wikipedia.org/wiki/Router_(woodworking)){:target='_blank' white-space='nowrap'} |
`3/8shank` | 9.525 | 0 | 0 | 20 | 15 | round | [wikipedia](https://en.wikipedia.org/wiki/Router_(woodworking)){:target='_blank' white-space='nowrap'} |
`8shank` | 8 | 0 | 0 | 15 | 15 | round | [wikipedia](https://en.wikipedia.org/wiki/Router_(woodworking)){:target='_blank' white-space='nowrap'} |
`1/4shank` | 6.35 | 0 | 0 | 10 | 20 | round | [wikipedia](https://en.wikipedia.org/wiki/Router_(woodworking)){:target='_blank' white-space='nowrap'} |
`6shank` | 6 | 0 | 0 | 10 | 10 | round | [wikipedia](https://en.wikipedia.org/wiki/Router_(woodworking)){:target='_blank' white-space='nowrap'} |
`1/8shank` | 3.2 | 0 | 0 | 10 | 10 | round | [wikipedia](https://en.wikipedia.org/wiki/Router_(woodworking)){:target='_blank' white-space='nowrap'} |

## Batteries

Name | diameter | width | thickness | depth | Item height | shape | source |
--|--|--|--|--|--|--|--
`aaaa` | 8.3 | 0 | 0 | 10.625 | 42.5 | round | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`aaa` | 10.5 | 0 | 0 | 11.125 | 44.5 | round | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`aa` | 14.5 | 0 | 0 | 12.625 | 50.5 | round | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`9v` | 1 | 17.5 | 26.5 | 12.5 | 48.5 | square | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`c` | 26.2 | 0 | 0 | 12.5 | 50 | round | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`d` | 34.2 | 0 | 0 | 15.375 | 61.5 | round | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`7540` | 7.5 | 0 | 0 | 10 | 40 | round | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`8570` | 8.5 | 0 | 0 | 17.5 | 70 | round | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`10180` | 10 | 0 | 0 | 4.5 | 18 | round | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`10280` | 10 | 0 | 0 | 7 | 28 | round | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`10440` | 10 | 0 | 0 | 11 | 44 | round | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`10850` | 10 | 0 | 0 | 21.25 | 85 | round | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`13400` | 13 | 0 | 0 | 10 | 40 | round | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`14250` | 14 | 0 | 0 | 6.25 | 25 | round | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`14300` | 14 | 0 | 0 | 7.5 | 30 | round | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`14430` | 14 | 0 | 0 | 10.75 | 43 | round | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`14500` | 14 | 0 | 0 | 13.25 | 53 | round | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`14650` | 14 | 0 | 0 | 16.25 | 65 | round | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`15270` | 15 | 0 | 0 | 6.75 | 27 | round | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`16340` | 16 | 0 | 0 | 8.5 | 34 | round | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`16650` | 16 | 0 | 0 | 16.25 | 65 | round | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`17500` | 17 | 0 | 0 | 12.5 | 50 | round | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`17650` | 17 | 0 | 0 | 16.25 | 65 | round | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`17670` | 17 | 0 | 0 | 16.75 | 67 | round | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`18350` | 18 | 0 | 0 | 8.75 | 35 | round | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`18490` | 18 | 0 | 0 | 12.25 | 49 | round | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`18500` | 18 | 0 | 0 | 12.5 | 50 | round | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`18650` | 18 | 0 | 0 | 16.25 | 65 | round | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`20700` | 20 | 0 | 0 | 17.5 | 70 | round | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`21700` | 21 | 0 | 0 | 17.5 | 70 | round | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`25500` | 25 | 0 | 0 | 12.5 | 50 | round | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`26500` | 26 | 0 | 0 | 12.5 | 50 | round | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`26650` | 26 | 0 | 0 | 16.25 | 65 | round | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`26700` | 26 | 0 | 0 | 17.5 | 70 | round | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`26800` | 26 | 0 | 0 | 20 | 80 | round | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`32600` | 32 | 0 | 0 | 15 | 60 | round | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`32650` | 32 | 0 | 0 | 16.925 | 67.7 | round | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`32700` | 32 | 0 | 0 | 17.5 | 70 | round | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`38120` | 38 | 0 | 0 | 30 | 120 | round | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`38140` | 38 | 0 | 0 | 35 | 140 | round | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`40152` | 40 | 0 | 0 | 38 | 152 | round | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`4680` | 46 | 0 | 0 | 20 | 80 | round | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |

## Cell Batteries

Name | diameter | width | thickness | depth | Item height | shape | source |
--|--|--|--|--|--|--|--
`cr927` | 0 | 9.5 | 2.7 | 0 | 0 | halfround | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`cr1025` | 0 | 10 | 2.5 | 0 | 0 | halfround | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`cr1130` | 0 | 11.5 | 3 | 0 | 0 | halfround | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`cr1216` | 0 | 12.5 | 1.6 | 0 | 0 | halfround | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`cr1220` | 0 | 12.5 | 2 | 0 | 0 | halfround | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`cr1225` | 0 | 12.5 | 2.5 | 0 | 0 | halfround | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`cr1616` | 0 | 16 | 1.6 | 0 | 0 | halfround | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`cr1620` | 0 | 16 | 2 | 0 | 0 | halfround | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`cr1632` | 0 | 16 | 3.2 | 0 | 0 | halfround | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`cr2012` | 0 | 20 | 1.2 | 0 | 0 | halfround | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`cr2016` | 0 | 20 | 1.6 | 0 | 0 | halfround | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`cr2020` | 0 | 20 | 2 | 0 | 0 | halfround | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`cr2025` | 0 | 20 | 2.5 | 0 | 0 | halfround | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`cr2032` | 0 | 20 | 3.2 | 0 | 0 | halfround | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`cr2040` | 0 | 20 | 4 | 0 | 0 | halfround | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`cr2050` | 0 | 20 | 5 | 0 | 0 | halfround | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`cr2320` | 0 | 23 | 2 | 0 | 0 | halfround | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`cr2325` | 0 | 23 | 2.5 | 0 | 0 | halfround | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`cr2330` | 0 | 23 | 3 | 0 | 0 | halfround | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`br2335` | 0 | 23 | 3.5 | 0 | 0 | halfround | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`cr2354` | 0 | 23 | 5.4 | 0 | 0 | halfround | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`cr2412` | 0 | 24.5 | 1.2 | 0 | 0 | halfround | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`cr2430` | 0 | 24.5 | 3 | 0 | 0 | halfround | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`cr2450` | 0 | 24.5 | 5 | 0 | 0 | halfround | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`cr2477` | 0 | 24.5 | 7.7 | 0 | 0 | halfround | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`cr3032` | 0 | 30 | 3.2 | 0 | 0 | halfround | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |
`cr11108` | 0 | 11.6 | 10.8 | 0 | 0 | halfround | [wikipedia](https://en.wikipedia.org/wiki/List_of_battery_sizes){:target='_blank' white-space='nowrap'} |

## Memory Cards

Name | diameter | width | thickness | depth | Item height | shape | source
--|--|--|--|--|--|--|--
`multicard` | 0 | 0 | 0 | 0 | 0 | square | [](){:target='_blank' white-space='nowrap'} |
`compactflashi` | 0 | 43 | 3.3 | 9 | 36 | square | [wikipedia](https://en.wikipedia.org/wiki/Comparison_of_memory_cards){:target='_blank' white-space='nowrap'} |
`compactflashii` | 0 | 43 | 5 | 9 | 36 | square | [wikipedia](https://en.wikipedia.org/wiki/Comparison_of_memory_cards){:target='_blank' white-space='nowrap'} |
`smartmedia` | 0 | 37 | 0.76 | 11.25 | 45 | square | [wikipedia](https://en.wikipedia.org/wiki/Comparison_of_memory_cards){:target='_blank' white-space='nowrap'} |
`mmc` | 0 | 24 | 1.4 | 8 | 32 | square | [wikipedia](https://en.wikipedia.org/wiki/Comparison_of_memory_cards){:target='_blank' white-space='nowrap'} |
`mmcmobile` | 0 | 24 | 1.4 | 4.5 | 18 | square | [wikipedia](https://en.wikipedia.org/wiki/Comparison_of_memory_cards){:target='_blank' white-space='nowrap'} |
`mmcmicro` | 0 | 14 | 1.1 | 3 | 12 | square | [wikipedia](https://en.wikipedia.org/wiki/Comparison_of_memory_cards){:target='_blank' white-space='nowrap'} |
`sd` | 0 | 24 | 2.1 | 18 | 32 | square | [wikipedia](https://en.wikipedia.org/wiki/Comparison_of_memory_cards){:target='_blank' white-space='nowrap'} |
`minisd` | 0 | 20 | 1.4 | 10 | 21.5 | square | [wikipedia](https://en.wikipedia.org/wiki/Comparison_of_memory_cards){:target='_blank' white-space='nowrap'} |
`microsd` | 0 | 11 | 0.7 | 9 | 15 | square | [wikipedia](https://en.wikipedia.org/wiki/Comparison_of_memory_cards){:target='_blank' white-space='nowrap'} |
`memorystickstandard` | 0 | 21.5 | 2.8 | 12.5 | 50 | square | [wikipedia](https://en.wikipedia.org/wiki/Comparison_of_memory_cards){:target='_blank' white-space='nowrap'} |
`memorystickduo` | 0 | 20 | 1.6 | 7.75 | 31 | square | [wikipedia](https://en.wikipedia.org/wiki/Comparison_of_memory_cards){:target='_blank' white-space='nowrap'} |
`memorystickmicro` | 0 | 12.5 | 1.2 | 3.75 | 15 | square | [wikipedia](https://en.wikipedia.org/wiki/Comparison_of_memory_cards){:target='_blank' white-space='nowrap'} |
`nano` | 0 | 12.3 | 0.7 | 2.2 | 8.8 | square | [wikipedia](https://en.wikipedia.org/wiki/Comparison_of_memory_cards){:target='_blank' white-space='nowrap'} |
`psvita` | 0 | 15 | 1.6 | 3.125 | 12.5 | square | [wikipedia](https://en.wikipedia.org/wiki/Comparison_of_memory_cards){:target='_blank' white-space='nowrap'} |
`xqd` | 0 | 38.5 | 3.8 | 7.45 | 29.8 | square | [wikipedia](https://en.wikipedia.org/wiki/Comparison_of_memory_cards){:target='_blank' white-space='nowrap'} |
`xd` | 0 | 25 | 1.78 | 5 | 20 | square | [wikipedia](https://en.wikipedia.org/wiki/Comparison_of_memory_cards){:target='_blank' white-space='nowrap'} |
`usba` | 0 | 12 | 4.5 | 13 | 13 | square | [](){:target='_blank' white-space='nowrap'} |
`usbc` | 0 | 8.5 | 4 | 10 | 0 | square | [](){:target='_blank' white-space='nowrap'} |

## Cartridges

Name | diameter | width | thickness | depth | Item height | shape | source
--|--|--|--|--|--|--|--
`atari800` | 0 | 68 | 21 | 19.25 | 77 | square | [reddit](https://www.reddit.com/r/gamecollecting/comments/23stkf/q_dimensions_for_game_cartridges/){:target='_blank' white-space='nowrap'} |
`atari2600` | 0 | 81 | 19 | 21.75 | 87 | square | [reddit](https://www.reddit.com/r/gamecollecting/comments/23stkf/q_dimensions_for_game_cartridges/){:target='_blank' white-space='nowrap'} |
`atari5200` | 0 | 104 | 20 | 28 | 112 | square | [reddit](https://www.reddit.com/r/gamecollecting/comments/23stkf/q_dimensions_for_game_cartridges/){:target='_blank' white-space='nowrap'} |
`atari7800` | 0 | 81 | 19 | 21.75 | 87 | square | [reddit](https://www.reddit.com/r/gamecollecting/comments/23stkf/q_dimensions_for_game_cartridges/){:target='_blank' white-space='nowrap'} |
`commodore` | 0 | 79 | 17 | 34.75 | 139 | square | [reddit](https://www.reddit.com/r/gamecollecting/comments/23stkf/q_dimensions_for_game_cartridges/){:target='_blank' white-space='nowrap'} |
`magnavoxodyssey` | 0 | 100 | 5.5 | 15 | 60 | square | [reddit](https://www.reddit.com/r/gamecollecting/comments/23stkf/q_dimensions_for_game_cartridges/){:target='_blank' white-space='nowrap'} |
`magnavoxodysseymulticard` | 0 | 105 | 15 | 27.5 | 110 | square | [reddit](https://www.reddit.com/r/gamecollecting/comments/23stkf/q_dimensions_for_game_cartridges/){:target='_blank' white-space='nowrap'} |
`magnavoxodyssey2` | 0 | 80 | 21 | 31.75 | 127 | square | [reddit](https://www.reddit.com/r/gamecollecting/comments/23stkf/q_dimensions_for_game_cartridges/){:target='_blank' white-space='nowrap'} |
`mattelintellivision` | 0 | 68 | 16 | 22 | 88 | square | [reddit](https://www.reddit.com/r/gamecollecting/comments/23stkf/q_dimensions_for_game_cartridges/){:target='_blank' white-space='nowrap'} |
`nintendofamicom` | 0 | 71 | 17 | 27 | 108 | square | [reddit](https://www.reddit.com/r/gamecollecting/comments/23stkf/q_dimensions_for_game_cartridges/){:target='_blank' white-space='nowrap'} |
`nintendofamicomdisk` | 0 | 76 | 4 | 22.5 | 90 | square | [reddit](https://www.reddit.com/r/gamecollecting/comments/23stkf/q_dimensions_for_game_cartridges/){:target='_blank' white-space='nowrap'} |
`nintendosuperfamicom` | 0 | 127 | 20 | 21.5 | 86 | square | [reddit](https://www.reddit.com/r/gamecollecting/comments/23stkf/q_dimensions_for_game_cartridges/){:target='_blank' white-space='nowrap'} |
`nes` | 0 | 120 | 17 | 33.5 | 134 | square | [reddit](https://www.reddit.com/r/gamecollecting/comments/23stkf/q_dimensions_for_game_cartridges/){:target='_blank' white-space='nowrap'} |
`snes` | 0 | 136 | 20 | 21.925 | 87.7 | square | [reddit](https://www.reddit.com/r/gamecollecting/comments/23stkf/q_dimensions_for_game_cartridges/){:target='_blank' white-space='nowrap'} |
`nintendo64` | 0 | 116 | 18 | 18.75 | 75 | square | [reddit](https://www.reddit.com/r/gamecollecting/comments/23stkf/q_dimensions_for_game_cartridges/){:target='_blank' white-space='nowrap'} |
`nintendogb` | 0 | 57 | 7.5 | 16.375 | 65.5 | square | [reddit](https://www.reddit.com/r/gamecollecting/comments/23stkf/q_dimensions_for_game_cartridges/){:target='_blank' white-space='nowrap'} |
`nintendogbc` | 0 | 57 | 9 | 16.375 | 65.5 | square | [reddit](https://www.reddit.com/r/gamecollecting/comments/23stkf/q_dimensions_for_game_cartridges/){:target='_blank' white-space='nowrap'} |
`nintendogba` | 0 | 35 | 6 | 14.25 | 57 | square | [reddit](https://www.reddit.com/r/gamecollecting/comments/23stkf/q_dimensions_for_game_cartridges/){:target='_blank' white-space='nowrap'} |
`nintendods` | 0 | 33 | 3.8 | 8.75 | 35 | square | [reddit](https://www.reddit.com/r/gamecollecting/comments/23stkf/q_dimensions_for_game_cartridges/){:target='_blank' white-space='nowrap'} |
`nintendo2ds` | 0 | 35 | 3.8 | 8.75 | 35 | square | [reddit](https://www.reddit.com/r/gamecollecting/comments/23stkf/q_dimensions_for_game_cartridges/){:target='_blank' white-space='nowrap'} |
`nintendovb` | 0 | 75 | 7 | 17 | 68 | square | [reddit](https://www.reddit.com/r/gamecollecting/comments/23stkf/q_dimensions_for_game_cartridges/){:target='_blank' white-space='nowrap'} |
`nintendoswitch` | 0 | 21 | 3 | 7.75 | 31 | square | [reddit](https://www.reddit.com/r/gamecollecting/comments/23stkf/q_dimensions_for_game_cartridges/){:target='_blank' white-space='nowrap'} |
`segagamegear` | 0 | 66 | 10 | 17 | 68 | square | [reddit](https://www.reddit.com/r/gamecollecting/comments/23stkf/q_dimensions_for_game_cartridges/){:target='_blank' white-space='nowrap'} |
`segagenesis` | 0 | 118 | 15 | 17 | 68 | square | [reddit](https://www.reddit.com/r/gamecollecting/comments/23stkf/q_dimensions_for_game_cartridges/){:target='_blank' white-space='nowrap'} |
`segagenesistall` | 0 | 96 | 16 | 22 | 88 | square | [reddit](https://www.reddit.com/r/gamecollecting/comments/23stkf/q_dimensions_for_game_cartridges/){:target='_blank' white-space='nowrap'} |
`segamegadrive` | 0 | 93 | 17 | 16.75 | 67 | square | [reddit](https://www.reddit.com/r/gamecollecting/comments/23stkf/q_dimensions_for_game_cartridges/){:target='_blank' white-space='nowrap'} |
`segamegadrivecodemasters` | 0 | 109 | 17 | 18.75 | 75 | square | [reddit](https://www.reddit.com/r/gamecollecting/comments/23stkf/q_dimensions_for_game_cartridges/){:target='_blank' white-space='nowrap'} |
`segamastersystem` | 0 | 69 | 17 | 27 | 108 | square | [reddit](https://www.reddit.com/r/gamecollecting/comments/23stkf/q_dimensions_for_game_cartridges/){:target='_blank' white-space='nowrap'} |
`sega32x` | 0 | 72 | 16 | 27.75 | 111 | square | [reddit](https://www.reddit.com/r/gamecollecting/comments/23stkf/q_dimensions_for_game_cartridges/){:target='_blank' white-space='nowrap'} |
`segacard` | 0 | 84 | 2 | 13.25 | 53 | square | [reddit](https://www.reddit.com/r/gamecollecting/comments/23stkf/q_dimensions_for_game_cartridges/){:target='_blank' white-space='nowrap'} |
`segapico` | 0 | 181 | 15 | 55.75 | 223 | square | [reddit](https://www.reddit.com/r/gamecollecting/comments/23stkf/q_dimensions_for_game_cartridges/){:target='_blank' white-space='nowrap'} |
`sonyumd` | 0 | 64 | 0 | 1.05 | 4.2 | round | [reddit](https://www.reddit.com/r/gamecollecting/comments/23stkf/q_dimensions_for_game_cartridges/){:target='_blank' white-space='nowrap'} |
`sonypsvita` | 0 | 22 | 2 | 7.5 | 30 | square | [reddit](https://www.reddit.com/r/gamecollecting/comments/23stkf/q_dimensions_for_game_cartridges/){:target='_blank' white-space='nowrap'} |
`sonypsvitamemcard` | 0 | 12.5 | 1.6 | 3.75 | 15 | square | [reddit](https://www.reddit.com/r/gamecollecting/comments/23stkf/q_dimensions_for_game_cartridges/){:target='_blank' white-space='nowrap'} |
`necpcehucard` | 0 | 53 | 2 | 21 | 84 | square | [reddit](https://www.reddit.com/r/gamecollecting/comments/23stkf/q_dimensions_for_game_cartridges/){:target='_blank' white-space='nowrap'} |
`snkneogeoaes` | 0 | 146.05 | 31.75 | 47.625 | 190.5 | square | [reddit](https://www.reddit.com/r/gamecollecting/comments/23stkf/q_dimensions_for_game_cartridges/){:target='_blank' white-space='nowrap'} |
`snkneogeomvs` | 0 | 145 | 35 | 46.25 | 185 | square | [reddit](https://www.reddit.com/r/gamecollecting/comments/23stkf/q_dimensions_for_game_cartridges/){:target='_blank' white-space='nowrap'} |
`bandai` | 0 | 41 | 6 | 16.5 | 66 | square | [reddit](https://www.reddit.com/r/gamecollecting/comments/23stkf/q_dimensions_for_game_cartridges/){:target='_blank' white-space='nowrap'} |
`msx` | 0 | 109 | 16.8 | 17.35 | 69.4 | square | [reddit](https://www.reddit.com/r/gamecollecting/comments/23stkf/q_dimensions_for_game_cartridges/){:target='_blank' white-space='nowrap'} |