import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';



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

    testVariable: boolean = true;

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | Observable<boolean> | boolean {
        console.log("canActivate");
        console.log(route);
        console.log(state);


        const p1 = new Promise((resolve, reject) => {
          if(this.testVariable) {
            setTimeout(() => {
              console.log('waited 5 seconds');
              resolve('route can be activated');
            }, 5000)
          } else {
            setTimeout(() => {
              console.log('waited 5 seconds in else');
              reject('cart value must be 250');
            }, 5000)
          }
        });

        return p1.then(this.doStuff1).catch(this.doStuff2);

    }

    doStuff1() : boolean {
      console.log('ehllo dostuff 1');
      return true;
    }
    doStuff2() : boolean {
      console.log('ehllo dostuff 2');
      return false;
    }



}
