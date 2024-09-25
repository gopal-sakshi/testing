import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from "@angular/router";

// this uses default angular functionality
@Injectable()
export class RouteReuse11 implements RouteReuseStrategy {
    constructor() { console.log("route reuse 11 is being used"); }
    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
        return null;
    }
    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        return false;
    }
    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        return false;
    }
    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        // return future.routeConfig === curr.routeConfig;
        console.log("should reuse route ?? ");
        return false    // coz we want ngOnDestroy() to fire while switching between details
        /*
            if both routeConfigs are same ===> 
            - angular will not destroy the component
            - meaning, ngOnInit & ngOnDestroy arent called
            - only router emits new values for route params & other observables
        */
        
    }
    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
    }
}

/*
    console logs for the application is empty, but when navigating elsewhere we see the destroy message - detail & parent. 
    PASS – Master page is maintained when switching between detail 25 & 44;
    PASS – Detail view is a unique_URL_thingy coz we subscribed to route.params detailId
    FAIL – Detail view initialization does not run 
         – the random value is the same every time even when routing between different details
         – or ngOnInit of detail is called ONLY ONCE; not called while switching between details 
    PARTIAL – Detail component is never cleaned up between detail views, but it is after navigating away 
            – or ngOnDestroy of detail isnt called while switching between details 
*/