import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
    selector: 'app-home-router12',
    templateUrl: './home-router12.component.html',
    styleUrls: ['./home-router12.component.scss']
})
export class HomeRouter12Component implements OnInit {

    blah1:string = 'itemDetail';
    blah2:string = '2';

    constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void { console.log("ngOnOnit called ") }
    ngOnDestroy():void { console.log("comp destroyed")  }

    navigateToApple() {
        let navigationExtras: NavigationExtras = {
            queryParams: { player1: 'Luka', player2: 'Casemiro' }
        }
        // this.router.navigate(['router-12', 'itemDetail'], navigationExtras);
        /*
            Cannot match any routes. URL Segment: 'router-12/itemDetail' 
            router-12/itemDetail/22     (OR)        router-12/itemDetail/edo_path_param
            router-12/itemDetail    ===> WRONG
        */
             

        // ARRAY of single Element (or) multiple elements ---> both are same
        // this.router.navigate(['router-12', 'itemDetail', '2'], navigationExtras);
        this.router.navigate(['router-12/itemDetail/3'], navigationExtras);
    }

    navigateToParams12() {
        // ====> starts with backward_slash ===> absolute navigation
        // this.router.navigate(['/router-12/params12']);
        this.router.navigate(['/styling12', 'flex12']);           
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