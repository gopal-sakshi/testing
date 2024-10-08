import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map, shareReplay } from 'rxjs/operators';


@Component({
    selector: 'app69-cold-obs23',
    templateUrl: './cold-obs23.component.html',
    styleUrls: ['./cold-obs23.component.scss']
})
export class ColdObs23Component implements OnInit {

    cold23:any; hot23:any
    constructor() { }

    ngOnInit(): void {
        // We created a cold observable
        this.cold23 = of(11, 13, 15, 17).pipe(
            map(value => { console.log('map called - cold ', value); return value * 2;}),
            delay(1000)
        );

        // we created a hot observable
        this.hot23 = of(11, 13, 15, 17).pipe(
            map(value => { console.log('map called - hot ', value); return value * 3;}),
            delay(1000),
            shareReplay(2)      // share last two emitted values only
        );
    }

    startObs1() {
        const subscriber1 = {
            next: (val:any) => console.log("sub1 val ===> ", val, Date.now()),
            err: (err:any) => console.log("sub1 err ===> ", err),
            completed23: () => console.log("sub2 completed")
        }
        this.cold23.subscribe(subscriber1)
    }

    startObs2() {
        // we are adding new subscriber
        const subscriber2 = {
            next: (val:any) => console.log("sub2 val ===> ", val, Date.now()),
            err: (err:any) => console.log("sub2 err ===> ", err),
            completed23: () => console.log("sub2 completed")
        }
        this.cold23.subscribe(subscriber2)
    }

    hotObs1() {          
        this.hot23.subscribe(value => console.log('Subscriber_Hot 1:', value));
    }

    hotObs2() {          
        this.hot23.subscribe(value => console.log('Subscriber_Hot 2:', value));
    }

    coldHot() {
        const random = Math.random();

        const observableCold = Observable.create((observer) => {
            observer.next(Math.random());
        });
        const observableHot = Observable.create((observer) => {
            observer.next(random);
        });
        
        observableCold.subscribe((data) => { console.log('cold-sub1', data); });
        observableCold.subscribe((data) => { console.log('cold-sub2', data); });

        observableHot.subscribe((data) => { console.log('hot-sub1', data); });
        observableHot.subscribe((data) => { console.log('hot-sub2', data); });
        observableHot.subscribe((data) => { console.log('hot-sub3', data); });

    }

}
