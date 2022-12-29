import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app69-home14',
  templateUrl: './home14.component.html',
  styleUrls: ['./home14.component.scss']
})
export class Home14Component implements OnInit {
  
  constructor(private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  goToRouteOne() {
    this.router.navigate(['route-one'], {relativeTo: this.route});    
  }

  // https://stackoverflow.com/questions/53937128/conditionally-load-module-on-the-empty-path-in-angular-router


  goToRouteTwo() {
    this.router.navigateByUrl('/router14/route-two');
    // Always specify the complete absolute path when calling router's navigateByUrl method. 
    // Absolute paths must start with a leading /
    // Dont use 'relative path routing' ------> with navigateByUrl

    // this.router.navigate(['route-two'], {relativeTo: this.route});
    // Note
      // In Kalgudi ----> we use this.router.navigate(url)
      // where    url =     /app/store/rfq/INPUTS/blah
      // basically ---> this is absolute routing.... because      url started with backward slash
  }

}
