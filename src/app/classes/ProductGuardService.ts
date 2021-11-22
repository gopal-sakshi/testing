import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';



/*
    import canActivate
    create a class ProductGuardService which implements canActivate
    this class must implement canActivate() method

    The canActivate method must return 
        either a True or a False value.
        If it returns true, the navigation process continues. 
        if it returns false, the navigation process stops and the user stays put.
        Guard can also return an Observable or a Promise which eventually returns a True or false


    guards are nothing but services. 
    We need to register them with the Providers array of the Angular Module
    Guards and all other services that guard depends on ------> must be provided at the module level (bcoz angular needs them ??)

    Finally, we need to add the guards to the routes array as shown below


*/

@Injectable()
export class ProductGuardService implements CanActivate { 

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log("canActivate");
        console.log(route);
        console.log(state);
        return true;
        
    }
}