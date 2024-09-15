import { Component, OnInit } from '@angular/core';
import { from, fromEvent, Observable, Subject, Subscription } from 'rxjs';

@Component({
    selector: 'app-home-subjects',
    templateUrl: './home-subjects.component.html',
    styleUrls: ['./home-subjects.component.scss']
})
export class HomeSubjectsComponent implements OnInit {


    showSubjects: boolean = false;
    showReplaySubjects: boolean = false;
    subject23 = new Subject<number>();
    observable23:Observable<any>;
    subscription23:Subscription;
    
    constructor() { }

    ngOnInit(): void {

        // nenu observable emit chese data kosam wait chestuu untaa;
        const nenu_oka_observer_ni = {
            next: (v) => console.log(`observerA _ value vachindi roi: ${v}`),
            error: (err) => { },
            complete: () => { console.log('overeeeeeeyyyyyyyyyyy') }
        };
        this.subscription23 = this.subject23.subscribe(nenu_oka_observer_ni);

        // nenu oka observable ni; mouse move ayina prati saari data emit chestaa untaa
        this.observable23 = fromEvent(document, 'mousemove').pipe()
    }

    subjectAsObservor() {        
        this.observable23.subscribe(this.subject23);                    // subject23 is being an observer now... 
    }

    ngDestroy() {
        this.subscription23.unsubscribe();
    }

}
