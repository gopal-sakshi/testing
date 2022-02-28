import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home-router12',
  templateUrl: './home-router12.component.html',
  styleUrls: ['./home-router12.component.scss']
})
export class HomeRouter12Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  itemDetail() {
    let navigationExtras:NavigationExtras = {
      queryParams: {player1: 'Luka', player2: 'Casemiro'}
    }
    // this.router.navigate(['router-12', 'itemDetail'], navigationExtras);
    // this throws error.... Error: Cannot match any routes. URL Segment: 'router-12/itemDetail'


    this.router.navigate(['router-12', '  itemDetail', '2'], navigationExtras);
    // this works fine... because, we have a route URL Segment: 'router-12/itemDetail/2'
    // this is absolute navigation... 
  }

  goBack() {
    this.router.navigate(['./']);
  }

  goToHome() {
    console.log('not implemented');
    // have to do navigateByUrl too
  }

  goToRandom12() {
    this.router.navigate(['./']);
  }


}
