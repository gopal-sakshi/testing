import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class Common23Service {
    
    subject23 = new Subject<any>();
    signInAgainSubject23 = new Subject<any>();
    isSignInHappening:boolean = false;
    constructor() {}

    sendMessage(payload) {
        console.log(payload);
        this.subject23.next(payload);
    }

    getMessage():Observable<any> {
        return this.subject23.asObservable();
    }

    signInAgain(payload) {
        console.log(payload);
        this.isSignInHappening = true;
        this.signInAgainSubject23.next(payload);
    }

    getSignInDetails() {
        return this.signInAgainSubject23.asObservable();
    }
}