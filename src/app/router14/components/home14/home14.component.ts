import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app69-home14',
  templateUrl: './home14.component.html',
  styleUrls: ['./home14.component.scss']
})
export class Home14Component implements OnInit {

  showRouteOne:boolean = false;
  showRouteTwo:boolean = false;
  
  constructor(private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  goingBack() {
    this.router.navigate(['/router14']);
  }

  goToRouteOne() {
    this.router.navigate(['route-one'], {relativeTo: this.route});    
  }

  // https://stackoverflow.com/questions/53937128/conditionally-load-module-on-the-empty-path-in-angular-router

  goToHome15() {
    this.router.navigate(['home15'], {relativeTo: this.route});
    // Note
      // In Kalgudi ----> we use this.router.navigate(url)
      // where    url =     /app/store/rfq/INPUTS/blah
      // basically ---> this is absolute routing.... because      url started with backward slash

  }

  goToRouteTwo() {
    this.router.navigateByUrl('/router14/route-two');
    // Always specify the complete absolute path when calling router's navigateByUrl method. 
    // Absolute paths must start with a leading /
    // Dont use 'relative path routing' ------> with navigateByUrl
  }

}
