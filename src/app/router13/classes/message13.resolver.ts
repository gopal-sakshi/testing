import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable()
export class Message13Resolver implements Resolve<any> {

    resolve (route: ActivatedRouteSnapshot,state: RouterStateSnapshot):Promise<any> {
        console.log(route);
        console.log(state);
        return new Promise((resolve, reject) => {
            if(2<3) resolve(44);
            else reject('rejected');
        });
    }

//     resolve(route: ActivatedRouteSnapshot,state: RouterStateSnapshot):Observable<any> {
//         console.log(route);
//         console.log(state);
//         return of(44);
//     }
}