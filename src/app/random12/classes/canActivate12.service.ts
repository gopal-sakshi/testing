import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Auth12Service } from './auth12.service';


@Injectable()
export class CanActivate12Guard implements CanActivate {

    constructor(private auth: Auth12Service) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let isLoggedIn = route.queryParams.login || 0;
        return this.auth.isAuthorized(isLoggedIn);
    }
}