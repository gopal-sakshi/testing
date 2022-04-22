import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app69-route-one',
  templateUrl: './route-one.component.html',
  styleUrls: ['./route-one.component.scss']
})
export class RouteOneComponent implements OnInit {

  constructor(private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  goToRouteTwo() {
    this.router.navigate(['route-two'], { relativeTo: this.route });
  }
}
