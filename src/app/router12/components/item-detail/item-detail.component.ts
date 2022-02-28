import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  itemId: string;

  constructor(
    private router: Router,
    // private activatedRouteSnapshot: ActivatedRouteSnapshot
    // it seems we cant inject activatedRouteSnapshot... its not a service... use ActivatedRoute instead
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log(this.activatedRoute)
    this.itemId = this.activatedRoute.snapshot.params.id
  }

}
