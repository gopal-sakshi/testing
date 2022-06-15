import { Injectable } from "@angular/core";
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from "rxjs";
import { AnonymousSubject } from "rxjs/internal/Subject";       // some CommonJS, AMD dependencies can cause optimization bailouts 'warning'

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

    // trying to understand anonymous subject... for websockets thingy...
    getAnonymousSubject() {
        let observer99 = {
            next: (next) => { console.log('next called ',next)},
            error: (error) => { console.log(error,' error')},
            complete: () => { console.log('completed') }
        };
        let observable99 = new Observable(obs11 => {
            obs11.next(1);
            obs11.next(2);
            obs11.next('waiting for 14th CL');
            obs11.complete();
        });
        return new AnonymousSubject(observer99, observable99);
    }

}