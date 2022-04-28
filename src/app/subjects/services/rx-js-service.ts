import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable()
export class RxJsService {
    
    constructor() {}

    getStrikers():Observable<string[]> {
        return of(['benz', 'jovic', 'mariano'])
    }
}