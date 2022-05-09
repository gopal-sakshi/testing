import { Injectable } from "@angular/core";

@Injectable()
export class Observable61 {
    
    observer22:any;

    constructor() {}

    sendNumber(num21:number) {
        this.observer22.next(num21);
    }
}

