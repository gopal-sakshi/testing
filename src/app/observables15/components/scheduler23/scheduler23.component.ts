import { Component, OnInit } from '@angular/core';
import { of, asyncScheduler } from "rxjs";
import { observeOn, tap } from "rxjs/operators";

@Component({
    selector: 'app69-scheduler23',
    templateUrl: './scheduler23.component.html',
    styleUrls: ['./scheduler23.component.scss']
})
export class Scheduler23Component implements OnInit {

    constructor() { }

    ngOnInit(): void {
        const observable = of(1, 2, 3);
        console.log("Before sync subscribe");
        observable.subscribe({
            next(x) { console.log(`Got sync value ${x}`); },
            error(err) { console.error(`Something wrong occurred: ${err}`); },
            complete() { console.log("This is done now."); }
        });
        console.log("After sync subscribe");
    }

    asyncScheduler23() {
        const observable = of(1, 2, 3);
        console.log("Before async subscribe");
        observable.pipe(observeOn(asyncScheduler)).subscribe({
            next(x) { console.log(`Got async value ${x}`); },
            error(err) { console.error(`Gomething wrong occurred: ${err}`); },
            complete() { console.log("This is done now."); }
        });
        console.log("After async subscribe");
    }

    asyncScheduler24() {
        setTimeout(() => console.log('It will runs just after this Macrotask'))
        let source$ = of(1, 2, 3, asyncScheduler).pipe(
            tap((v) => console.log('tap ', v))
        )
        console.log("nenu oka sync statement ni");
        source$.subscribe((v) => {
            console.log('Value ', v);
            Promise.resolve().then(() => console.log('Microtask value ', v));
            setTimeout(() => console.log('MAcrotask value ', v), 0);
        });
    }
}
