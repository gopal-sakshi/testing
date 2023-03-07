# properties of CSS

`justify-contnet`
- along X-axis
- say flex container has 5 items... justify-content = aligns those 5 child items
- https://www.w3schools.com/cssref/playit.asp?filename=playcss_justify-content&preval=flex-start

`align-items`
- same thing what justify-content does... but, along Y-axis
- this is when fxLayout="row"
- if fxLayout="column" align-items is like justify-content

`d-flex `
- Bootstrap 4 now uses flexbox, instead of floats, to handle the layout.
- By using d-flex class:
    create a flexbox container 
    transform direct children into flex items
- To create an inline flexbox container = use the d-inline-flex class
---------------------------------------------------------------------------------------------------------------

`why justify-contet wont work sometimes`
a) justify-content only has an effect if there's space left over after your flex items have flexed to absorb the free space. 
   if there is no free space left, justify-content will do nothing.
b) Some examples where it would have an effect:
   if your flex items are all inflexible (flex: none, flex: 0 0 auto), and smaller than the container.
   if your flex items are flexible, BUT can't grow to absorb all the free space, due to a max-width on each of the flexible items.
   In both of those cases, justify-content would be in charge of distributing the excess space.
c) Say, you have flex items that have 
   flex: 1 (or) flex: 6 with no max-width limitation. 
   the flexible items will grow to absorb all of the free space, and there is no space left for justify-content to do anything.

d) it seems when we are using CSS inline, we need to use

   <div class="d-flex align-items-center justify-content-between">               // worked
   <div class="d-flex align-items-center justify-content-space-between">         // didnt work

   But what about when we are using in justify-content in separate css file      ???
---------------------------------------------------------------------------------------------------------------