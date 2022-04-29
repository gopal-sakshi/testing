import { Injectable } from "@angular/core";
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MiddleManService {

    public footballMsgSubject = new Subject();
    public countryMsgReplaySubject = new ReplaySubject(2);
    public heroMsgBehaviourSubject = new BehaviorSubject('initialValue');
    public animalMsgAsyncSubject = new AsyncSubject();

    constructor() { }

    sendFootballMsg(msgObj:any) {
        this.footballMsgSubject.next(msgObj);
    }

    getFootballMsg():Subject<any> {
        return this.footballMsgSubject;
    }

    sendCountryMsg(countryObj) {
        this.countryMsgReplaySubject.next(countryObj);
    }

    getCountryMsg():Subject<any> {
        return this.countryMsgReplaySubject;
    }

    sendHeroMsg(heroObj) {
        console.log(heroObj);
        this.heroMsgBehaviourSubject.next(heroObj);
    }

    getHeroMsg():Subject<any> {
        return this.heroMsgBehaviourSubject;
    }

    sendAnimalMsg(animalObj) {
        this.animalMsgAsyncSubject.next(animalObj);
    }

    getAnimalMsg():Subject<any> {
        return this.animalMsgAsyncSubject;
    }

}