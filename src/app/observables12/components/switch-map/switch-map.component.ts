import { Component, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent, interval, Observable, of } from 'rxjs';
import { concatMap, delay, exhaustMap, filter, map, mergeMap, switchMap } from 'rxjs/operators';
import { RxJsService } from '../../services/rx-js-service';

@Component({
    selector: 'app69-switch-map',
    templateUrl: './switch-map.component.html',
    styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit {

    @ViewChild('btn24', { static: true }) btn24;
    clicks$: Observable<any>;
    obs23:Observable<any>;
    constructor(private rxjsService: RxJsService) { }

    ngOnInit(): void {
    }

    // switchMap subscribes to most recent observable... unsubscribes from previous ones
    ngAfterViewInit() {
        this.clicks$ = fromEvent(this.btn24.nativeElement, 'click');
        this.clicks$
            .pipe(
                switchMap(() => {
                    // return of(['rm', 'bar', 'atl', 'sevilla', 'valencia', 'espanyol']);
                    // return of('rm', 'bar', 'atl', 'sevilla', 'valencia', 'espanyol').pipe(delay(1000));                    
                    return interval(1000);
                })
            )
            .subscribe(val => console.log(val));
    }

    // WASTE OF AN EXAMPLE
    useSwitchMap1() {
        this.rxjsService.getStrikers().pipe(
            map(res => {
                console.log(res);
                of(['modric', 'kroos']).pipe(
                    switchMap(res => {
                        console.log(res)
                        return res;
                    })
                ).subscribe(res => { console.log(res); })
                return res;
            })
        ).subscribe(res => {
            console.log(res)
        });
    }

    useSwitchMap2() {
        let srcObservable = of(1, 2, 3, 4);
        let innerObservable = of('A', 'B', 'C', 'D');

        srcObservable.pipe(
            switchMap(val => {
                // switchMap rcvd ===> 1, 2, 3, 4;      but switchMap always sends out ===> A, B, C, D
                // switchMap receives one observable; sends another observable        
                console.log('val @ switchMap ===> ', val);
                return innerObservable;         // instead of Observable,  we can return simple string;
                // return '23';                 // switchMap takes '23' string and makes into observable
            })
        ).subscribe({
            next: res => { console.log('subscribe on srcObs ===> ', res); },
            error: () => { console.log("err @ src subscribe"); },
            complete: () => { console.log("srcObservable ==> completed ??"); }
        });


    }

    mapVsSwitchMap() {

        let obsMap = of(1, 2, 3, 4);
        obsMap.pipe(
            map(res => { return res * 2 })
        ).subscribe(res => { console.log('map = ', res); });

        let obsSwitchMap = of(1, 2, 3, 4);
        obsSwitchMap.pipe(
            switchMap(res => { return of(res * 2) })
        ).subscribe(res => { console.log('switchMap = ', res) });


    }

    mergeMap23() {
        const letters = of('a', 'b', 'c');
        const result = letters.pipe(
            // mergeMap(x => interval(1000).pipe(map(i => x + i))),
            // mergeMap(x => of(11, 12, 13, 14, 15).pipe(map(i => x + i)))
            mergeMap(x => { console.log("mergeMap ==> ", x); return of(null) })
        );
        result.subscribe(x => console.log("x ===> ", x));
        // O/P ===> a0 b0 c0 a1 b1 c1 a2 b2 c2
    }

    mergeMap24() {
        const obs23 = from([1,2,3,4]).pipe(
            mergeMap(i => this.getProductData23(i))
        )
        obs23.subscribe(val => console.log('mergeMap result, products ===> ', val));

        const obs24 = from([1,2,3,4]).pipe(
            map(i => this.getProductData23(i))
        )
        obs24.subscribe(val => console.log('map result, products ===> ', val));
    }

    getProductData23(productId:any) {
        return of(`mango__${productId}_${Date.now()}`);
    }

    switch_concat_exhaust() {
        const obs25 = from([1,2,3,4]).pipe(
            concatMap((i) => {
                console.log("concat ===> ", i);
                return interval(1000).pipe(
                );
            })
        )
        obs25.subscribe(val => console.log('concatMap result, products ===> ', val));
    }

}
