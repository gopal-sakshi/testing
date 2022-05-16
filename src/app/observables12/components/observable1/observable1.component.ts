import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable, Observer, of } from 'rxjs';
import { scan, throttleTime } from 'rxjs/operators';
@Component({
  selector: 'app-observable1',
  templateUrl: './observable1.component.html',
  styleUrls: ['./observable1.component.css']
})
export class Observable1Component implements OnInit {

  obs1:Observable<any>
  value1:string;
  
  constructor() { 
    localStorage.setItem('name', 'Real Madrid')
  }

  ngOnInit(): void {
    this.purity();
    this.flow();
    this.value1 = window.localStorage.getItem("name")
  }

  purity() {
    var count = 0;
    var button = document.querySelector('button');

    // Option A... we need external variable 'count' to keep track of how many times user clicked
    button.addEventListener('click', () => console.log(`Clicked ${++count} times - not pure`));


    // Option B
    // fromEvent(button, 'click').subscribe(() => console.log('Clicked!'));


    /** notes to self: 
     * 
     * scan is an Operator that needs to be piped.
     * scan = apply a function to each item emitted by an Observable, sequentially, and emit each successive value
     * read about it later
     * there is difference between ' & `
     *        'clicked ${count} times'   &&    `clicked ${count} times`

    */

    // Option B... no external variable used here... count is internal to fromEvent observable
    fromEvent(button, 'click').pipe(
      scan(count => count + 1, 0)).
      // subscribe(count => console.log('Clicked ${count} times'));
      subscribe(count => console.log(`Clicked ${count} times - pure function`));
  }

  flow() {
    /**
     * RxJS has a whole range of operators that helps you control how the events flow through your observables.
     * 
     * Allow only one click per second
     *    it seems throttleTime is some RxJS operator
     * 
     */

    var button = document.querySelector('button');

    var count = 0;
    var rate = 1000;
    var lastClick = Date.now() - rate;    
    button.addEventListener('click', () => {
      if (Date.now() - lastClick >= rate) {
        console.log(`Clicked ${++count} times at ${Date.now()}`);        
        lastClick = Date.now();
      }
    });

    fromEvent(button, 'click').pipe(
      throttleTime(1000),
      scan(count => count + 1, 0)
    ).subscribe(count => console.log(`Clicked ${count} times`));

  }

  createObservable() {

    // it seems Observable.create is deprecated... 
    let obs2$ = Observable.create(function(observer:any) {
      observer.next(1);
      observer.next(2);
      observer.next('obs2 RM');
      observer.complete();
    }); 
    let obs2a$ = of(1, 2, 'obs2a RM');

    // obs3$ ---> it has observer<any>
    let obs3$ = new Observable((observer:Observer<any>) => {
      observer.next(23);
      observer.next('obs3 gopal');
      observer.complete();
    });

    let obs4$ = new Observable((observer: Observer<string>) => {
      // observer.next(43);           // this throws error... number not assignable to string
      observer.next('obs4 lukita');
      observer.complete();
    });


    // obs3$ its parameter observer is of type Observer... that Observer (can take any value) || (can emit any value)
    // obs5$ its parameter observer is of type any... 
    let obs5$ = new Observable((observer: any) => {
      observer.next(43);
      observer.next('obs5 casemiro');
      observer.complete();
    });

    obs2$.subscribe({
      next: (x:any) => console.log('got value '+x)
    });
    obs2a$.subscribe();
    obs2a$.subscribe({
      next: (x:any) => console.log('got 2a '+x)
    })

    obs3$.subscribe();      // these two didnt get executed... because there was no observer inside subscribe() method
    obs4$.subscribe();
    
    const jingChak1 = {
      next: x => {console.log('jingChak1 observer value ',x)},
      error: error => {console.log(error)},
      complete: () => {console.log('jingChak1 observer finished')}
    }

    const nextCb = function(nextValue) { console.log('next value is ',nextValue)};
    const errorCb = function(errorValue) {console.log(errorValue)};
    const completeCb1 = () => {console.log('jingChak2 finished')};
    const completeCb2 = function() {console.log('jingChak2 finished')};


    const jingChak2 = {nextCb, errorCb, completeCb1};
    const jingChak3 = {nextCb, errorCb, completeCb2};



    obs5$.subscribe(jingChak1);
    // obs5$.subscribe(jingChak2);      // why this throws error ????
    // obs5$.subscribe(jingChak3);


  }

}
