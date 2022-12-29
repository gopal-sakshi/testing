import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home-router12',
  templateUrl: './home-router12.component.html',
  styleUrls: ['./home-router12.component.scss']
})
export class HomeRouter12Component implements OnInit {

  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigateToApple() {
    let navigationExtras:NavigationExtras = {
      queryParams: {player1: 'Luka', player2: 'Casemiro'}
    }
    // this.router.navigate(['router-12', 'itemDetail'], navigationExtras);
    // this throws error.... Error: Cannot match any routes. URL Segment: 'router-12/itemDetail'
    //      URL segment should be 'router-12/itemDetail/22' 
    //      NOT 'router-12/itemDetail'

    this.router.navigate(['router-12', 'itemDetail', '2'], navigationExtras);
    // this works fine... because, we have a route URL Segment: 'router-12/itemDetail/2'
    // this is absolute navigation...
  }

  navigateToParams12() {
    this.router.navigate(['/router-12/params12']);
    // this.router.navigate(['params12']);

    // this.router.navigateByUrl('router-12/params12');    
  }

  goToHome() {
    
    // APPROACH I
    this.router.navigate(['./']);

    // // APPROACH II
    // this.router.navigateByUrl('./');

    // // APROACH III
    // this.router.navigate(['../']);

    /*
      router.navigate         = 1st argument must be ARRAY... both absolute & relative
      router.navigateByUrl    = 1st argument must be string... only absolute URLs
    */

  }

  goToBootstrap23() {
    this.router.navigateByUrl('/bootstrap23');
  }

  /*

  router.navigateByUrl()
  - changing the location bar directly
  – we are providing the “whole” new URL.
  - it will only accept absolute URLs
  - router.navigateByUrl("http://localhost/team/33/user/11")        // works
  - router.navigateByUrl("../22", {relativeTo: route})              // WONT work... eventhough relativeTo parameter is provided

  router.navigate()
  - just a convenience method that wraps router.navigateByUrl()
  - creates a new URL by applying an array of passed-in commands, a patch, to the current URL.

  currentUrl                                                =        '/inbox/11/messages/22(popup:compose)'
  router.navigate(['/inbox/33/messages/44'])                =        '/inbox/33/messages/44(popup:compose)'
  router.navigateByUrl('/inbox/33/messages/44')             =        '/inbox/33/messages/44'

  */

}
