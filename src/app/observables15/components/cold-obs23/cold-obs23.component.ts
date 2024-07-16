import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';


@Component({
    selector: 'app69-cold-obs23',
    templateUrl: './cold-obs23.component.html',
    styleUrls: ['./cold-obs23.component.scss']
})
export class ColdObs23Component implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    startObs() {
        const source$ = of(11).pipe(
            map(value => {
              console.log('map called - cold ', value);
              return value * 2;
            })
        );          
        source$.subscribe(value => console.log('Subscriber_Cold 1:', value));
        source$.subscribe(value => console.log('Subscriber_Cold 2:', value));
        source$.subscribe(value => console.log('Subscriber_Cold 3:', value));
    }

    hotObs() {
        const source$ = of(9).pipe(
            map(value => {
              console.log('map called - hot ', value);
              return value * 2;
            }),
            shareReplay(1)      // shares the last emitted value with all subscribers
        );
          
        source$.subscribe(value => console.log('Subscriber_Hot 1:', value));
        source$.subscribe(value => console.log('Subscriber_Hot 2:', value));
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
