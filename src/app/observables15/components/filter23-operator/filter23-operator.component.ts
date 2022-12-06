import { Component, OnInit } from '@angular/core';
import { interval, Observable, of, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app69-filter23-operator',
  templateUrl: './filter23-operator.component.html',
  styleUrls: ['./filter23-operator.component.scss']
})
export class Filter23OperatorComponent implements OnInit {

  intervalIdentity:Subscription;
  intervalLog:Subscription;
  

  constructor() { }

  ngOnInit(): void {}

  filter23() {
    return function<T>(inputSrcObs):Observable<T> {
      return new Observable(subscriber => {
        const subscription = inputSrcObs.subscribe(
          { next(value) { if (value < 10) subscriber.next(value); } },
          { error(err23) { subscriber.error(err23); } }, 
          { complete() { subscriber.complete(); } }
        );
        return () => subscription.unsubscribe();
      })
    }
  }


  interval1() {
    interval(1000).pipe(
      map(num => num + 1),                                                                        // OPERATOR 1
      map(num => num + 2),                                                                        // OPERATOR II
      function<T>(inputSrcObs):Observable<T> {                                                    // OPERATOR III     custom operator
        return new Observable(subscriber => {
          const subscription = inputSrcObs.subscribe(
            { next(value) { if (value < 10) subscriber.next(value); } },
            { error(err23) { subscriber.error(err23); } }, 
            { complete() { subscriber.complete(); } }
          );
          return () => subscription.unsubscribe();
        })
      },
      map(num => {                                                                                  // OPERATOR IV
        return {
          numberIs: num,
          jingChak: true
        } 
      })
    ).subscribe((num) => { console.log(num) });
  }

  interval2() {
    // why did we use interval() here ======> what is setInterval() then ?????????????????
    interval(1000).pipe(
      map(num => num + 1),
      map(num => num + 2),
      this.filter23(),                    // instead of whole function... we just use filter23() here which does the same
    ).subscribe((num) => { console.log(num) });
  }

  customOperators() {
    this.intervalIdentity ? this.intervalIdentity.unsubscribe() : '';
    this.intervalLog ? this.intervalLog.unsubscribe() : '';
    this.intervalIdentity = interval(1000).pipe(this.identity23).subscribe(res => { console.log(res) });
    this.intervalLog = interval(1000).pipe(this.identity23).subscribe(res => { console.log(res) });
    // https://indepth.dev/posts/1421/rxjs-custom-operators
  }


  // returns the same observable (or) mirrors input observable
  identity23<T>(source$: Observable<T>): Observable<T> {
    return source$;
  }

  log<T>(source$: Observable<T>): Observable<T> {
    return source$.pipe(tap(v => console.log(`log: ${v}`)));
  }
  
  ngOnDestroy() {
    console.log('ng On Destroy called');
    this.intervalIdentity.unsubscribe();
    this.intervalLog.unsubscribe();
  }

}

/*
  implementation of the pipe() method so that we can get a better understanding of how it works:

  class Observable {
    pipe(...operators): Observable<any> {
      return operators.reduce((source, next) => next(source), this);
    }
  }

  // https://netbasal.com/creating-custom-operators-in-rxjs-32f052d69457

*/
