import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable()
export class RxJsService {
    
    tenSecondsObservable: Observable<any>;

    constructor() {}

    getStrikers():Observable<string[]> {
        return of(['benz', 'jovic', 'mariano']);
    }
    getMidfielders():Observable<string[]> {
        return of(['modric', 'kroos', 'casemiro', 'valverde']);
    }
    getFibonacci():Observable<number[]> {
        return of([1,1,2,3,5,8,13]);
    }
}