import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class Preload23Service implements PreloadingStrategy {

    constructor() { }

    // Whats happening
        // By default these get loaded ===> vendor.js, runtime.js, main.js, polyfills.js
        //                                  any other eagerly loaded modules                                    
        // But with preload ==============> firebase22.js also get loaded along side vendor/runtime/main/polyfills
        //                                  next time u navigate to firebase22 route 
        //                                  ===> u dont see firebase22.js loading in network tab
        // but try javascript route ===========> javascript_stuff.js will load asynchronously
        // not to mention: firebase22.js will NOT increase main.js as its loaded separately
    preload(route: Route, loadFn23: () => Observable<any>): Observable<any> {
        if(route.data && route.data.preload22) {
            return loadFn23();
        } else {
            return of(null);
        }
    }



}