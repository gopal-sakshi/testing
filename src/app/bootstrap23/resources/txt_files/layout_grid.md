`Responsive web design`
- creating web sites which automatically adjust themselves to look good on all devices, from small phones to large desktops.
- (or) desing/coding should respond to 
	user's behaviour
	user's environment (screen size, platform, orientation)
	
`Box model`
- CSS box model = box that wraps around every HTML element... it consists of margins, borders, padding and actual content

`Container`
- containers = most common, most basic layout design in bootstrap... used to pad the content inside them
- Bootstrap contains 2 classes
	.container class 		= provides a responsive fixed width container = based on screen sizes, width is decided
	.container-fluid class 	= to create a full width container, that will always span the entire width of the screen (width is always 100%)

<div class="container"></div>
<div class="container-fluid"></div>
<div class="container pt-3"></div>			padding 

<div class="container"></div>                   // fixed width (540px, 720px, 960px, 1140px)
<div class="container-fluid"></div>             // width is 100%

Even though bootstrap is responsive webdesign, there are certain usecases where fixed width is desirable
- like login screen
------------------------------------------------------------------------------------------------------------------------
`Layouts & Grids`
- Steps while building a website
	what kind of layout a website needs... whether 3-column (or) 4-column

-------------------------------------------------------------------------------------------------------------------

Fluid container = always occupy 100% width of the device (be it mobile, iPad, desktop, large screens, etc)

`Fixed Layouts`
- it's in static pixels (or) fixed width always (whatever may be the screen)
- use cases = login screens... static websites

`Fluid design`
- design is always about percentage design
- 40% for  sidebar, 60% main content
---------------------------------------------------------------------------------------------
`Bootstrap Grid`
- to design layout, template of the website
- it allows upto 12 columns in a row
- Grid = it consists of rows & columns
- supports various screen resolutions ----> xs, sm, md, lg, xl


Bootstrap 5 = it has 5 classes

.col            = auto column value
.col-xs-        (extra small devices,       < 576 px)
.col-sm-        (small devices              > 576px)
.col-md-        (medium devices             768px - 992px)
.col-xxl        (xlarge devices             > 1440px)
---------------------------------------------------------------------------------------------


