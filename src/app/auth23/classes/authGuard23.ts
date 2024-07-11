import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { Auth23Service } from "../services/auth23.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard23 implements CanActivate {

    constructor(private authService:Auth23Service) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        console.log("is Signed In ===> ", this.authService.isSignedIn);
        
        // this is a bad practice... because anyone can dynamically set "userName" in localStorage
        // just open chrome_dev_tools ===> run this ==> localStorage.setItem('dynamicGaSetChesa', "jingChakSarissa");
        // instead use --> this.authService.isSignedIn ===> to allow route navigation
        if(localStorage.getItem('userName')) {
            return true;
        } else {
            console.log("can activate fail ayindi po");
            return false;
        }
        
    }
    
}