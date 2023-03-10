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
  
  // https://netbasal.com/creating-custom-operators-in-rxjs-32f052d69457
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
      map(num => num + 1),                                  // OPERATOR 1
      map(num => num + 2),                                  // OPERATOR II
      function<T>(inputSrcObs):Observable<T> {              // OPERATOR III     custom operator
        return new Observable(subscriber => {
          const subscription = inputSrcObs.subscribe(
            { next(value) { if (value < 10) subscriber.next(value); } },
            { error(err23) { subscriber.error(err23); } }, 
            { complete() { subscriber.complete(); } }
          );
          return () => subscription.unsubscribe();
        })
      },
      map(num => { return { numberIs: num, jingChak: true } })      // OPERATOR IV
    ).subscribe(
      (num) => { console.log(num) },
      (err) => console.log(err),
      () => console.log('observable is completed')
    );
  }

  interval2() {
    // why did we use interval() here ======> what is setInterval() then ?????????????????
    interval(1000).pipe(
      map(num => num + 1),
      map(num => num + 2),
      this.filter23(),      // instead of whole function... we just use filter23() here which does the same
    ).subscribe((num) => { console.log(num) });
  }

  customOperators() {
    this.intervalIdentity ? this.intervalIdentity.unsubscribe() : '';
    this.intervalLog ? this.intervalLog.unsubscribe() : '';
    this.intervalIdentity = interval(1000).pipe(this.identity23).subscribe(res => { console.log(res) });
    this.intervalLog = interval(1000).pipe(this.identity23).subscribe(res => { console.log(res) });
    // https://indepth.dev/posts/1421/rxjs-custom-operators
  }
  
  identity23<T>(source$: Observable<T>): Observable<T> { return source$; }  // returns/mirrors the same observable
  log<T>(source$: Observable<T>): Observable<T> { return source$.pipe(tap(v => console.log(`log: ${v}`))); }
  
  ngOnDestroy() {
    console.log('ng On Destroy called');
    this.intervalIdentity.unsubscribe();
    this.intervalLog.unsubscribe();
  }

}