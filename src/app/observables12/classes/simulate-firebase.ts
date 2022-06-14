import { interval, of } from "rxjs";
import {delay, map} from "rxjs/operators";


export class SimulateFirebase {

    constructor() { }

    simulateHttp(val: any, delay23:number) {
        return of(val).pipe(delay(delay23));
    }

    simulateFirebase(val: any, delay23: number) {
        return interval(delay23).pipe(map(index => val + " " + index));
    }
}