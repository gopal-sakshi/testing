import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

export class AuthGuard23 implements CanActivate {

    constructor() { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if(localStorage.getItem('userName')) {
            return true;
        } else {
            return false;
        }
        
    }
    
}