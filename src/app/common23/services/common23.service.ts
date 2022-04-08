import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class Common23Service {
    
    subject23 = new Subject<any>();

    constructor() {}

    sendMessage(payload) {
        console.log(payload);
        this.subject23.next(payload);
    }

    getMessage():Observable<any> {
        return this.subject23.asObservable();
    }
}