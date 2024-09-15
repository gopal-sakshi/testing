import { Component, OnInit } from '@angular/core';
import { interval, Observable, Observer, of, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
export interface interface23 { name23:string, position: string, age:number };
@Component({
    selector: 'app69-filter23-operator',
    templateUrl: './filter23-operator.component.html',
    styleUrls: ['./filter23-operator.component.scss']
})
export class Filter23OperatorComponent implements OnInit {

    intervalIdentity: Subscription;
    intervalLog: Subscription;

    constructor() { }

    ngOnInit(): void { }

    filter23() {
        return function <T>(inputSrcObs): Observable<T> {
            return new Observable((subscriber:Observer<T>) => {
                const subscription = inputSrcObs.subscribe(
                    { next(value) { if (value < 10) subscriber.next(value); } },
                    { error(err23) { subscriber.error(err23); } },
                    { complete() { subscriber.complete(); } }
                );
                return () => subscription.unsubscribe();
            })
        }
    }



    identity29<T>(arg: T): T {
        /*
            https://stackoverflow.com/questions/49622045/in-typescript-what-does-t-mean

            <T> is going to be a type declared at run-time instead of compile time.
            most params, return types === we declare @ runtime
            but if we want to reuse functions === we leave the datatype to be decided at runtime
            so, we can use it with string/number/obj
        */
        return arg;
    }

    useIdentity29() {
        var interface23_obj:interface23 = { name23:"benz", position:"striker", age:35 }
        
        let a1 = this.identity29<string>("ipudu_return_value_string");
        let a1Copy = this.identity29("ikkada <T> ivvakapoyina parledu");
        let a2 = this.identity29<number>(222);
        let a3 = this.identity29<interface23>(interface23_obj);
        console.log("results ===> ", {a1, a1Copy, a2, a3});
    }

    interval1() {
        interval(1000).pipe(
            map(num => num + 1),                                            // OPERATOR 1
            map(num => num + 2),                                            // OPERATOR II
            function edo_oka_peru_ivvu_ivvakapoyina_okay<T>(inputSrcObs): Observable<T> { // OPERATOR III     custom operator
                return new Observable(subscriber => {
                    const subscription = inputSrcObs.subscribe(
                        { next(value) { if (value < 10) subscriber.next(value); } },
                        { error(err23) { subscriber.error(err23); } },
                        { complete() { subscriber.complete(); } }
                    );
                    return () => subscription.unsubscribe();
                })
            },
            map(num => {                                                     // OPERATOR IV
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

    // log<T>(source$: Observable<T>): Observable<T> {
    //     return source$.pipe(tap(v => console.log(`log: ${v}`)));
    // }

    ngOnDestroy() {
        console.log('ng On Destroy called');
        this.intervalIdentity?.unsubscribe();
        this.intervalLog?.unsubscribe();
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
