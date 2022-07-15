import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, RouteReuseStrategy } from "@angular/router";
import { RouteReuse23 } from "src/app/classes/route-reuse23";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})

export class DetailComponent implements OnInit, OnDestroy {
  public routeParam;
  public randomVal: number;

  constructor(private route: ActivatedRoute, 
    private routeReuseStrategy: RouteReuseStrategy) { }

  ngOnInit(): void {
      this.route.params.subscribe(p => {
        console.log('only this gets changed everytimg');
        console.log('constructor(), ngOnInit(), ngOnDestroy() ---> they will not be invoked');
        this.routeParam = p.detailId;
      });

      this.randomVal = Math.floor(Math.random() * 100);
  }

  clearStoredRoute(): void {
    (this.routeReuseStrategy as RouteReuse23).clearSavedHandle('/router16/search/');
  }

  ngOnDestroy(): void {
      console.log(`Destroy detail: ${this.routeParam}`);
  }
}