import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';


@Injectable()
export class PlayerResolver implements Resolve<Observable<any>> {
    constructor() { 
        console.log("player resolver constructor")
    }
    resolve(next: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<any> | Promise<any> {

        console.log("next ====> ", next.paramMap);
        console.log("state ====> ", state.url);

        console.log("player resolver method")
        return new Promise((resolve, reject) => {
            setTimeout(() => { 
                console.log("player resolver ayipoindi"); 
                resolve('player_trying23') 
            }, 500)
        })
    }
}

