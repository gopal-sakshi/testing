import { Component, OnInit, ViewChild } from '@angular/core';
import { fromEvent, interval, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { RxJsService } from '../../services/rx-js-service';

@Component({
    selector: 'app69-switch-map',
    templateUrl: './switch-map.component.html',
    styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit {

    @ViewChild('btn24', { static: true }) btn24;
    clicks$: Observable<any>;

    constructor(private rxjsService: RxJsService) { }

    ngOnInit(): void {
    }

    // switchMap subscribes to most recent observable... unsubscribes from previous ones
    ngAfterViewInit() {
        this.clicks$ = fromEvent(this.btn24.nativeElement, 'click');
        this.clicks$
            .pipe(
                switchMap(() => {
                    return of(['rm', 'bar', 'atl', 'sevilla', 'valencia', 'espanyol']);
                    // return interval(1000);
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

}
