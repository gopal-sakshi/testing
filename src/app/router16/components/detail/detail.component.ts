import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, RouteReuseStrategy } from "@angular/router";
import { RouteReuse23 } from "../../classes/route-reuse23";

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
        this.route.params.subscribe(p => {      // search for "unique_URL_thingy"
            // console.log('only this gets changed everytimg');
            // console.log('constructor(), ngOnInit(), ngOnDestroy() ---> they will not be invoked');
            this.routeParam = p.detailId;
        });
        console.log('this is printed only once...')
        this.randomVal = Math.floor(Math.random() * 100);
    }

    // clearStoredRoute(): void {
    //     console.log("clear stored route");
    //     (this.routeReuseStrategy as RouteReuse23).clearSavedHandle('/router16/search/');
    // }

    ngOnDestroy(): void {
        console.log(`Destroy detail: ${this.routeParam}`);
    }
}