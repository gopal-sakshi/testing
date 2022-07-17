import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from "@angular/router";

export class RouteReuse23 extends RouteReuseStrategy {

    // this is to store component & its data
    private savedHandles = new Map<string, DetachedRouteHandle>();


    // This loads the detached route if the method above returns true.
    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
        return this.savedHandles.get(this.getRouteKey(route));
        // return null;
    }

    // This determines if the route the user is navigating to should load the component state.
    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        return this.savedHandles.has(this.getRouteKey(route));
        // return false;
    }

    // This determines if the route the user is leaving should save the component state.  
    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        return route.data.saveComponent;
        // return false;                Angular default ---> returns false
    }

    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        // APPROACH I (angular default) 
        return future.routeConfig === curr.routeConfig;

        /*  EXPLANATION for APPROACH I:

            a) if both current & future routes are same --> returns true
            b) In case of ----> /parent/detail/:Id
                navigate FROM /parent/detail/23 ---- TO ---->  /parent/detail/44       
                both current & future routes are same
            c) If future & current routes are different
                returns false... entire 'urlTree' is recreated

        */

        // APPROACH II  (USING for PARENT-CHILD DESIGN)

        // if (future.routeConfig === curr.routeConfig) {
        //     return !future.data.alwaysRefresh;          // if alwaysRefresh is set to true ---> we dont want to reuse the route
        //                                                         // hence, we return false...
        // } else {
        //     return false;
        // }

        // APPROACH III (using for search Design)
    }

    // This stores the detached route if the method above returns true.
    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
        const key = this.getRouteKey(route);
        // if we need to save a component ---> then it is enough, 
        // if we store the DetachedRouteHandle corresponding to our route,
        this.savedHandles.set(key, handle);
    }

    getRouteKey(route): string {
        // console.log(route);
        return route.pathFromRoot.filter(u => u.url).map(u => u.url).join('/');
    }

    clearSavedHandle(key: string): void {
        this.savedHandles.delete(key);
    }
}