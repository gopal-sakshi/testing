import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

export class AuthGuard23 implements CanActivate {

    constructor() { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        // this is a bad practice... because anyone can dynamically set "userName" in localStorage
        // just open chrome_dev_tools ===> run this ==> localStorage.setItem('dynamicGaSetChesa', "jingChakSarissa");
        if(localStorage.getItem('userName')) {
            return true;
        } else {
            return false;
        }
        
    }
    
}