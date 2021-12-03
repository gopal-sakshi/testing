import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-lifecycle12',
  templateUrl: './lifecycle12.component.html',
  styleUrls: ['./lifecycle12.component.css']
})
export class Lifecycle12Component implements OnInit {

  message:string;
  displayMessage:boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(evt => {
      if (evt instanceof NavigationStart) {
        this.message = 'Loading...';
        this.displayMessage = true;
      }
      if (evt instanceof NavigationEnd) this.displayMessage = false;
    });
  }

}


/*

(A) NAVIGATION START
- Whenever the router detects a click on a router link directive, it starts the navigation cycle.
- imperative means of starting a navigation 
  Router Service’s navigate & navigateByUrl methods
- ealier there would be multiple navigations... so, there was need for navigationId

router starts by doing a depth-first search through the array of router configurations (ROUTES in our example)
and try to match the URL 'displayUsers' to one of the path properties in the router configurations
  while applying any redirects along the way.
Once path is matched...
  router emits ROUTES RECOGNIZED signal... it knows which component to navigate to (here DisplayUsersComponent)
  it means 

(B) Route Gaurds = router has to make sure that it is allowed to navigate to that new component
  Route guards are boolean functions that the router uses to determine if it can perform a navigation
    true ---> move to (C) step
    false ---> router emits NavigationCancel event
  Route Guards are similar to services, they are registered as providers and are injectable

  Some Route Guards
    canActivate
    canLoad (should a module be lazily loaded or not)
    canActivateChild 
    canDeactivate (useful for preventing a user from navigating away from a page -- like when filling out a form)
  
  GuardsCheckStart = emitted at start of step B  
  GuardsCheckEnd = emitted at end of step B


(C) Route Resolvers = use to prefetch data during navigation, before the router has rendered anything.

  router calls resolve() method defined in class (that class which is passed as resolve_property of route config)
    in our case its UserResolve class
  router stores the results on the ActivatedRoute service’s data object, under the key 'data_is_stored_here_key'

  


  ResolveStart
  ResolveEnd
*/