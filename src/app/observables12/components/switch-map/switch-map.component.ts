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

  @ViewChild('btn24',{static:true}) btn24;
  clicks$:Observable<any>;
  
  constructor(private rxjsService:RxJsService) { }

  ngOnInit(): void {
  }

  // switchMap subscribes to most recent observable... unsubscribes from previous ones
  ngAfterViewInit() {
    this.clicks$ = fromEvent(this.btn24.nativeElement, 'click');
    this.clicks$
    .pipe(
      switchMap(() => {
        // return of(['rm', 'bar', 'atl', 'sevilla', 'valencia', 'espanyol']);
        return interval(1000);
      })
    )
    .subscribe( val => console.log(val));
  }

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
    let srcObservable= of(1,2,3,4);
    let innerObservable= of('A','B','C','D');
    srcObservable.pipe(
      switchMap(val => {
        console.log(val);
        return innerObservable;
        // return val;        // Type 'number' is not assignable to type 'ObservableInput<any>
                                // srcObservable emits numbers... it is those numbers - 1,2,3,4 - that we receive in switchMap...
                                // meaning val in switchMap is a number... we MUST return observable from switchMap... not number or string
      })
    ).subscribe(res => {
      console.log(res);
    })
  }

  mapVsSwitchMap() {

    let obsMap= of(1,2,3,4);
    obsMap.pipe(
      map(res => {return res*2})
    ).subscribe(res => {console.log('map = ',res)});

    let obsSwitchMap = of(1,2,3,4);
    obsSwitchMap.pipe(
      switchMap(res => {return of(res*2)})
    ).subscribe(res => {console.log('switchMap = ',res)});

 
  }

}


/*

Switch functionalicy
- we create an observable from the click event of a button using the fromEvent method. 
- The SwitchMap operator returns an observable using the interval method. 
- The interval method creates an infinite observable, which emits a sequence of integers spaced by a given time interval.
- When you click on the button, the clicks observable emits its first value. 
- The switchMap replaces it with the interval observable, which starts emitting value starting from 0 every 500ms.
- When you click again, the switchMap unsubscribes from the previous interval observable and starts new one, 
  which again starts to emit value from 0.

*/