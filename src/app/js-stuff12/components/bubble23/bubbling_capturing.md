Event bubbling & capturing
- two ways of event propagation in the HTML DOM API
    when an event occurs in an element inside another element
    and both elements have registered a handle for that event. 
- The event propagation mode determines in which order the elements receive the event.

With `bubbling`
- the event is <first captured & handled by the innermost element>
- and then propagated to outer elements.

With capturing
- the event is <first captured by the outermost element> 
- and then propagated to the inner elements.


addEventListener(type, listener, useCapture) 
- to register event handlers
-------------------------------------------------------------------------------
Examples

addEventListener('click', cb23, false)      // we used bubbling mode (which is also default mode)
addEventListener('click', cb23, false)      // we used capture mode 

When capturing phase is useful
- Capture phase handlers are particularly useful when 
some element's code (code you don't control, like a plugin) is stopping propagation
and you really want to know when that event occurs. 
- You can pick it up on the way to them instead of on the way back. 
- You might not get it in the bubbling phase if they stopped its propagation


Bubbling/capturing can be stopped by 
event.stopPropagation()
-------------------------------------------------------------------------------

<div>
<ul>
    <li></li>
</ul>
</div>

(A) In the structure above, assume that a click event occurred in the li element.
(B) In capturing model
    the event will be handled by the div first (click event handlers in the div will fire first), 
    then in the ul, 
    then at the last in the target element, li.

(C) In the bubbling model the opposite will happen: 
    the event will be first handled by the li, 
    then by the ul, 
    and at last by the div element.
-------------------------------------------------------------------------------