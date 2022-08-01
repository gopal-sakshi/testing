no shortage of JavaScript frameworks
- Angular, Ember, React, Backbone
- VueJs

How each framework manages state
- Ember's data binding
- Angular's dirty checking
- React's virtual DOM


# First generations of JavaScript frameworks
- Backbone.js
- Ext JS
- Dojo

# Next
- Ember - Data Binding
- AngularJS - Dirty checking



# A change detection cycle can be split into two parts:
- Developer updates the application model
- Angular syncs the updated model in the view by re-rendering it
- Change Detection does not perform a deep object comparison, 
    it only compares the previous and current value of properties used by the template

# ZoneJS
- Angular patches several low-level browser APIs at startup 
    to be able to detect changes in the application
- This is done using zone.js 
    which patches APIs such as EventEmitter, DOM event listeners, XMLHttpRequest, fs API in Node.js 
- In short, the framework will trigger a change detection if one of the following events occurs:
    any browser event (click, keyup, etc.)
    setInterval() & setTimeout()
    HTTP requests via XMLHttpRequest
- Angular uses its zone called NgZone. 
    There exists only one NgZone and change detection is only triggered for async operations triggered in this zone.


https://www.youtube.com/watch?v=jvKGQSFQf10


