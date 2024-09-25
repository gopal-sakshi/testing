// https://medium.com/@rajeshpillai1996/what-is-routereusestrategy-how-to-cache-components-with-angular-routereusestrategy-82da7790cd2b

import { RouteReuseStrategy, 
    ActivatedRouteSnapshot, 
    DetachedRouteHandle, 
    RouterModule,
    Routes,
    UrlSegment
} from '@angular/router';

export class RouteReuse23Service implements RouteReuseStrategy {

    private handlers: { [key: string]: DetachedRouteHandle } = {};

    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        console.log('shouldDetach called ===> ', route, this.getUrl(route));
        if (!route.routeConfig || route.routeConfig.loadChildren) {
            return false;
        }
        let shouldReuse = false;        
        if (route.routeConfig.data) {
            route.routeConfig.data.reuse ? shouldReuse = true : shouldReuse = false;
        }
        return shouldReuse;
    }

    store(route: ActivatedRouteSnapshot, handler: DetachedRouteHandle): void {
        console.log('storing handler ====> ', this.getUrl(route));
        if (handler) {
            this.handlers[this.getUrl(route)] = handler;
        }
    }

    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        console.log('shouldAttached called ===> ', this.getUrl(route), !!this.handlers[this.getUrl(route)]);
        return !!this.handlers[this.getUrl(route)];
    }

    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
        if (!route.routeConfig || route.routeConfig.loadChildren) {
            return null;
        };
        return this.handlers[this.getUrl(route)];
    }

    shouldReuseRoute(future: ActivatedRouteSnapshot, current: ActivatedRouteSnapshot): boolean {
        let reUseUrl = false;
        if (future.routeConfig) {
            if (future.routeConfig.data) {
                reUseUrl = future.routeConfig.data.reuse;
            }
        }
        const defaultReuse = (future.routeConfig === current.routeConfig);
        return reUseUrl || defaultReuse;
    }

    getUrl(route: ActivatedRouteSnapshot): string {
        if (route.routeConfig) {
            const url = route.routeConfig.path;            
            return url;
        } 
        return '';
    }
}