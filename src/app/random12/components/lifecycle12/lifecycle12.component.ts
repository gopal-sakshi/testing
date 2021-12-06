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

  Resolvers let us prefetch component data during routing
    this is to avoid displaying partially loaded templates to the user by prefetching any data
    Remember, a component’s template will be visible to the user during OnInit...
    instead of using resolver, we can make service call in the OnInit() method, then display the data
    But, we wont show partially loaded page to user... only after data is fetched, route is loaded

  (a) whether or not to prefetch data
      The decision of whether or not to prefetch data is up to you, but it’s usually best to have a partial page load with a nice loading animation instead of using resolvers.
  (b) runResolve() method
      Internally, the router has a runResolve method which will execute the resolver, and store its results on the ActivatedRoute snapshot.
  (c) router finished processing all resolvers
      Once the router has processed all resolvers, the next step is to start rendering components using the appropriate router outlets.

  ResolveStart
  ResolveEnd

(D) Activating Routes

ActivationStart, ActivationEnd, ChildActivationStart, ChildActivationEnd

(a) router extracts information
  router can extract the information it needs about the component from the tree of ActivatedRouteSnapshots that it built during the previous steps of the navigation cycle.

(b) The component property on ActivatedRouteSnapshot tells the router which component is to be created.

(c) router's activateWith() function
    helps in dynamically creating component
    A ComponentFactoryResolver is used to create an instance of the DisplayUsersComponent
    .... something more ....

(d) the laststep = update the url to /displayUsers
    now, the router is ready to listen for another URL change & start the cycle all over again
    events    =   ActivationStart, ActivationEnd, ChildActivationStart, ChildActivationEnd
*/
