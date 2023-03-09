Some modern web application ===> Gmail

Modern web application's state can change at any time
Whenever the application's state changes ====> UI also must change accordingly

- Say you got a new mail... 
- Gmail UI will show the following changes
    Inbox ====> Inbox (1)
    a new unread mail at the top

application's State changed =====> UI also changes accordingly
---------------------------------------------------------------------------------

https://indepth.dev/posts/1058/a-gentle-introduction-into-change-detection-in-angular
https://indepth.dev/posts/1053/everything-you-need-to-know-about-change-detection-in-angular
https://indepth.dev/posts/1131/if-you-think-ngdocheck-means-your-component-is-being-checked-read-this-article

see those links
---------------------------------------------------------------------------------

When Angular creates the <DOM nodes> to render the <contents of the template> on the screen, 
- it needs a place to store the references to those DOM nodes. 

For that purpose, internally there’s a data structure known as `View`
- It’s also used to store 
    the reference to the component instance 
    the previous values of binding expressions. 

There’s a one to one relationship between a component & view. 
- see component_view1.png

As the compiler analyzes the template, 
    it identifies properties of the DOM elements 
    that may need to be updated during change detection.
For each such property, the <compiler creates a binding>
The binding defines 
    the <property name to update> 
    the <expression that Angular uses> to obtain a new value.

Each component has its own change detector (or) 
In Angular, change detection is performed for each component. 
    As components internally are represented as views
    we can say that change detection is performed for each view.
When Angular checks a view, it simply runs over all bindings generated for a view by the compiler.
It evaluates expressions & compares their result to the values stored in the <oldValues array> on the `view`
That’s where the name `dirty checking` comes from. 
If it detects the difference, it updates the DOM property relevant to the binding. 
And it also needs to put the new value into the oldValues array on the view.
And that’s it. You now have an updated UI. 
Once Angular is done checking the current component, it repeats exactly the same steps for child components.

`Only in the development mode`
After each change detection cycle, Angular synchronously runs another check 
    to ensure that expressions produce the same values as during the preceding change detection run. 
This check is not part of the original change detection cycle. 
It runs after the check is finished for the entire tree of components and performs exactly the same steps. 
However, this time, as Angular detects the difference, it doesn’t update the DOM. 
Instead, it throws the ExpressionChangedAfterItHasBeenCheckedError.

In change-detection-11 component, 
    the property "time" is used in the expression for the span's attribute "textContent"
    (or) "time" property is bound to div's attribute "innerHTML"
    So Angular creates a binding and associates it with the span element:    
---------------------------------------------------------------------------

`Approach I`
- inside constructorFn, store <Date.now()> in some <time23> property 
- return that <time23> property in getter method.
- But with this implementation, the value for the getter time will always be the same
    It'll always show the time at which component got created


`Approach II`
- The [check] that produces the error <runs synchronously> right after the [change-detection-cycle]
- So if we update it asynchronously
- But, this setInterval() starts a new changeDetection cycle in Angular
- So, this implementation ====> infinite loop of change detection cycles
    <we need a way to run setInterval and not trigger change detection>


Why setInterval triggers changeDetection
- As opposed to React, change detection in Angular can be triggered completely automatically 
    like any async event in a browser (mouse click, user scroll)
- Angular uses ZoneJs library
- The library simply provides a way to intercept async events (setInterval, setTimeout)
    and notify Angular about those async events. 
- Based on that notification, Angular runs change detection.

In a webpage, you can have many different zones
- One such zone = NgZone. 
- `NgZone` = created when Angular bootstraps. Angular application <runs in this zone>
- Angular [only] gets notifications about <events that occur inside this zone>
- Angular is [not_notified] about async <events happening in other zones>
    And no notification means no change detection
- 

# see change-detection13, change-detection-child13

The parent component declares the <text23 property>
    that is used in the binding. 
The child component injects the parent component into the constructor 
    and updates its property in the ngAfterViewChecked lifecycle hook.
We get ExpressionChangedAfterItWasChecked error. 
bcoz when `Angular calls ngAfterViewChecked lifecycle hook` in the child component `change-detection-child13`
it already checked the binding for the parent `change-detection13` 
But we’re <updating the parent’s property text23> used in the binding after the check.
