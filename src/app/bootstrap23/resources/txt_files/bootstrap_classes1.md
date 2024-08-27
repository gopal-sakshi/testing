`sidebar`
- collapsible
- list group

`navbar`
- in mobile view navbar collapses

# Others
- alerts, carousels, dropdowns, modals, toasts, 
- pagination, table classes (table-striped, table-responsive)

`fluid layout` - occupies full width of browser


grid classes (bootstrap4)
- col-*         < 576px
- col-sm*       576px +
- col-md*       768px + 
- col-lg*       990px +
- col-xl*       1200px + 


6-tier grid system (bootstrap5)
xs, sm, md, lg, xl, xxl

<div class="container">
    <div class="row">
        <div class="col-6 col-md-3"></div>
        <div class="col-6 col-md-3"></div>
        <div class="col-6 col-md-3"></div>
        <div class="col-6 col-md-3"></div>
    </div>
</div>

rules
- row's immediate child must be column
- row class is only for containing columns
- row must be within a container

<div class="col-6 col-md-4">Stuff</div>
columns start 50% width on mobile devices (col-6 ======= 6 out of 12 columns)
but occupy only 33% width on desktop        (col-md-4 == 4 out of 12 columns)

bootstrap's responsive CSS adapts to phones, tablets, desktops
jquery not needed since v5
