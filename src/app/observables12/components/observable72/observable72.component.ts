import { Component, OnInit } from '@angular/core';
import { interval, Observable, of, Subscription, timer } from 'rxjs';
import { SimulateFirebase } from '../../classes/simulate-firebase';
import { delay, delayWhen, map, retry, retryWhen, scan, switchMap, take, tap } from 'rxjs/operators';

@Component({
    selector: 'app69-observable72',
    templateUrl: './observable72.component.html',
    styleUrls: ['./observable72.component.scss']
})
export class Observable72Component extends SimulateFirebase implements OnInit {

    stream1$: Observable<any>;
    stream2$: Observable<any>;
    stream1Sub: Subscription;
    stream2Sub: Subscription;

    constructor() {
        super();
    }

    ngOnInit(): void {
    }

    doFirebase() {
        this.stream1$ = this.simulateFirebase('STREAM', 3000);
        this.stream2$ = this.simulateFirebase('JC', 5000);

        this.stream1Sub = this.stream1$.subscribe(
            res => { console.log('val rcvd @ stream1 observer', res); },
            err => { console.log(err); },
            () => { console.log('stream1 completed') }
        );

        this.stream2Sub = this.stream2$.subscribe(
            res => { console.log('stream2 observer lo val ==>', res); },
            err => { console.log(err); },
            () => { console.log('stream2 completed') }
        );

    }

    stopFirebase() {
        this.stream1Sub.unsubscribe();
        this.stream2Sub.unsubscribe();
    }

    retry23() {
        interval(1000)
        .pipe(
            map(val => {
                console.log("rcvd value ===> ", val);
                if (val > 2) throw new Error("Invalid Value 23");
                return val;
            }),
            retry(2)
        ).subscribe(
            val => console.log("value rcvd ===> ", val),
            err => console.log("err emitted ====> ", err),
            () => console.log("obs completed")
        );
    }

    retryWhen23() {
        interval(1000).pipe(
            map(val => {
                if (val > 2) throw new Error("Invalid Value");
                return val;
            }),
            retryWhen((error) => error.pipe(
                tap(() => console.log("Retrying... "))
            ))
        ).subscribe(
            val => console.log("rtryWhen val ====>", val),
            err => console.log("rtryWhen err ===> ", err),
            () => console.log("rtryWhen Completed")
        );
    }

    /*
        https://www.tektutorialshub.com/angular/retry-retrywhen-in-angular-observable/

        retryWhen<T>(notifier: (errors: Observable<any>) => Observable<any>): MonoTypeOperatorFunction<T>

        If the notifier emits a value, then ReTryWhen re subscribes the source observable.
        In case of notifier emitting an error, then ReTryWhen also emits an error.
        If the notifier completes, then ReTryWhen does nothing.
    */


    retryWhen24() { 
        interval(1000).pipe(
            map(val => {
                if (val > 2) throw new Error("Invalid Value");
                return val;
            }),
            retryWhen((error) => error.pipe(
                tap(() => console.log("tannindi... ")),
                delay(2000),
                tap(() => console.log("malli trying... ")),
            ))
        ).subscribe(
            val => console.log("rtryWhen24 val ====>", val),
            err => console.log("rtryWhen24 err ===> ", err),
            () => console.log("rtryWhen24 Completed")
        );
    }

    retryWhen25() { 
        interval(1000).pipe(
            map(val => {
                if (val > 2) throw new Error("Invalid Value");
                return val;
            }),
            retryWhen((error) => error.pipe(
                switchMap(() =>
                    // of(1) badulu, next time of() ivvu ===> complete emit autundi
                    of(1).pipe(
                        delay(1000),
                        tap(() => console.log("of emitted"))
                    )
                ),
                tap(() => console.log("malli trying... ")),
            ))
        ).subscribe(
            val => console.log("rtryWhen25 val ====>", val),
            err => console.log("rtryWhen25 err ===> ", err),
            () => console.log("rtryWhen25 Completed")
        );
    }

    retryWhen26() {
        interval(1000).pipe(
            map(val => {
                if (val > 2) throw new Error("Invalid Value");
                return val;
            }),
            retryWhen((error) => error.pipe(
                tap(() => console.log('error tapped23')),
                switchMap(() => interval(3000).pipe(
                    tap(() => console.log("interval23"))
                )),
                tap(() => console.log("malli trying... ")),
            ))
        ).subscribe(
            val => console.log("rtryWhen26 val ====>", val),
            err => console.log("rtryWhen26 err ===> ", err),
            () => console.log("rtryWhen26 Completed")
        );
    }

    retryWhen27() {
        interval(1000).pipe(
            map(val => {
                if (val > 2) throw new Error("Invalid Value");
                return val;
            }),
            retryWhen(error => error.pipe(
                scan((acc, error) => {
                    if (acc > 2) throw error;
                    console.log("attempt " + acc);
                    return acc + 1;
                }, 1),
                delay(3000),
                tap(() => console.log("Retrying ..."))
            ))
        ).subscribe(
            val => console.log("retryWhn 27 val ===> ", val),
            err => console.error("retryWhn 27 err ===> ", err),
            () => console.log("retryWhen27 Complete")
        );
    }

    retryWhen28() {
        interval(1000).pipe(
            map(val => {
                if (val > 2) throw new Error("Invalid Value");
                return val;
            }),
            retryWhen(error => error.pipe(
                scan((acc, error) => {
                    if (acc > 2) throw error;
                    console.log("attempt " + acc);
                    return acc + 1;
                }, 1),
                delayWhen(val => timer(val * 2000)),
                tap(() => console.log("Retrying ..."))
            ))
        ).subscribe(
            val => console.log("retryWhn28 val ===> ", val),
            err => console.error("retryWhn28 err ===> ", err),
            () => console.log("retryWhn28 Complete")
        );
    }

    retryWhen29() {
        interval(1000).pipe(
            map(val => {
                if (val > 2) throw new Error("Invalid Value");
                return val;
            }),
            retryWhen(error => error.pipe(
                scan((acc, error) => {
                    console.log("attempt " + acc);
                    return acc + 1;
                }, 1),
                take(2),
                delayWhen(val => timer(val * 2000)),
                tap(() => console.log("Retrying ..."))
            ))
        ).subscribe(
            val => console.log("29 ====> ", val),
            err => console.error("29 err ====> ",err),
            () => console.log("29 ====> Complete")
        );
    }
}
