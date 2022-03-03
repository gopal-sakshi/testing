import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router, RouterState } from '@angular/router';

@Component({
  selector: 'app-home-router12',
  templateUrl: './home-router12.component.html',
  styleUrls: ['./home-router12.component.scss']
})
export class HomeRouter12Component implements OnInit {

  constructor(private router:Router, private activatedRoute:ActivatedRoute, private routerState:RouterState) { }

  ngOnInit(): void {
  }

  itemDetail() {
    let navigationExtras:NavigationExtras = {
      queryParams: {player1: 'Luka', player2: 'Casemiro'}
    }
    // this.router.navigate(['router-12', 'itemDetail'], navigationExtras);
    // this throws error.... Error: Cannot match any routes. URL Segment: 'router-12/itemDetail'


    this.router.navigate(['router-12', 'itemDetail', '2'], navigationExtras);
    // this works fine... because, we have a route URL Segment: 'router-12/itemDetail/2'
    // this is absolute navigation...
  }

  goBack() {
    this.router.navigate(['./']);
  }

  goToHome() {
    console.log('not implemented');
    /*
      router.navigate         = 1st argument must be ARRAY
      router.navigateByUrl    = 1st argument must be string
    */

  }

  goToRandom12() {
    this.router.navigateByUrl('/random12');
  }

  goToRandom12Component() {
    // absolute navigation
    this.router.navigateByUrl('/random12/decorator12');

    // relative navigation
    this.router.navigateByUrl('snapshot12');
  }

  multipleOutlets() {
    this.router.navigate(['router-12','multipleOutlets']);
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
