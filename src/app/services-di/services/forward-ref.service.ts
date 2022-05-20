import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable()
export class ForwardRefService {
    
    constructor() {}

    getPlayers() {
        return of('benz', 'vini', 'rodrygo');
    }
}