import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable, Observer, of } from 'rxjs';
import { scan, throttleTime } from 'rxjs/operators';
@Component({
  selector: 'app-observable1',
  templateUrl: './observable1.component.html',
  styleUrls: ['./observable1.component.css']
})
export class Observable1Component implements OnInit {

 
  constructor() { }

  ngOnInit(): void {
    this.purity();
    this.flow();
  }


  purity() {
    var count = 0;
    var button = document.getElementById('purityBtn');

    // Option A... we need external variable 'count' to keep track of how many times user clicked
    button.addEventListener('click', () => console.log(`[bad23] Clicked ${++count} times - not pure`));


    // Option B
    // fromEvent(button, 'click').subscribe(() => console.log('Clicked!'));
    // no external variable used here... count is internal to fromEvent observable
    fromEvent(button, 'click').pipe(
      scan(count => count + 1, 0)).
      // subscribe(count => console.log('Clicked ${count} times'));
      subscribe(count => console.log(`[good23] Clicked ${count} times - pure function`));
  }


  flow() {
    
    // APPROACH I
    var button = document.getElementById('flowBtn');
    var count = 0; var rate = 1000;
    var lastClick = Date.now() - rate;    
    button.addEventListener('click', () => {
      if (Date.now() - lastClick >= rate) {
        console.log(`[bad24] Clicked ${++count} times at ${Date.now()}`);        
        lastClick = Date.now();
      }
    });

    // APPROACH II
    fromEvent(button, 'click').pipe(
      throttleTime(1000),
      scan(count => count + 1, 0)
    ).subscribe(count => console.log(`[good24] Clicked ${count} times`));

  }

  createObservable() {
    
    
    /*************** create observables *********************************/
    // it seems Observable.create is deprecated... 
    let obs2a$ = Observable.create(function(observer:any) {
      observer.next(1);
      observer.next(2);
      observer.next('obs2a RM');
      observer.complete();
    }); 
    let obs2b$ = of(1, 2, 'obs2b RM');

    // observer is of type any ===> Observer (can take any value) || (can emit any value)
    let obs2c$ = new Observable((observer:Observer<any>) => {
      observer.next(23);
      observer.next('obs2c gopal');
      observer.complete();
    });

    let obs2d$ = new Observable((observer: Observer<string>) => {
      // observer.next(43);           // this throws error... number not assignable to string
      observer.next('obs2d lukita');
      observer.complete();
    });

    let btn23 = document.getElementById('btn23_Obs1');
    let obs2e$ = new Observable();
    obs2e$ = fromEvent(btn23, 'click').pipe();
    /********************************************************************/





    /************************ subscribe to observables *********************************/
    obs2a$.subscribe({
      next: (x:any) => console.log('2a got value '+x)
    });
    obs2b$.subscribe();     // because there was no observer inside subscribe() method; nothing happens
    obs2c$.subscribe({
      next: (x:any) => console.log('2c got value '+x)
    })
  
    const jingChak1 = {
      next: x => {console.log('jingChak1 observer value ',x)},
      error: error => {console.log(error)},
      complete: () => {console.log('jingChak1 observer finished')}
    }

    obs2d$.subscribe(jingChak1);

    obs2e$.subscribe({
        next: (res) => { console.log("btn23 clicked "); },
        error: () => { console.log('btn23 crashed'); },
        complete: () => { console.log('btn23 closed'); }
    })
    /********************************************************************/
  }

}


/** notes to self:      SCAN OPERATOR
 * 
 * scan is an Operator that needs to be piped.
 * scan = apply a function to each item emitted by an Observable, sequentially, and emit each successive value
 * read about it later
 * there is difference between ' & `
 *        'clicked ${count} times'   &&    `clicked ${count} times`

*/