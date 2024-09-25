shouldReuseRoute
- This method get called every time when we navigate between routes. 
- There are two type future & current
- The Future is the route we are leaving and Current is the route we are landing.


`shouldAttach`
- This method is called for the <route just opened> when we land on the component of this route.
`retrieve`
- This method is called if shouldAttach returns TRUE.


`shouldDetach`
- It is invoked when we <leave the current route>
`store`
- This method is invoked only if the shouldDetach returns true.