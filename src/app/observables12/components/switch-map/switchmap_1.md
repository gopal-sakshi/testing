```ts

const fileObservable = urlObservable.pipe(
    concatMap(url => http.get(url)),
);

```

`higher order observable`
http.get() returns an Observable for each URL. Now you have an <Observable of Observables>

<!-- ----------------------------------------------------------------------------------------- -->
`inner Observable`
Observable returned in the concatMap function

`outer observable`
- urlObservable is called outer observable


`concatMap`
- concatMap() operator subscribes to each inner Observable, 
- buffers all further emissions of the outer Observable
- and copies all the emitted values until the inner Observable completes
- and continues processing the values of the "outer Observable". 
- All of the values are in that way concatenated. 


`mergeMap()` 
— subscribes to each inner Observable as it arrives, then emits each value as it arrives

`switchMap()` 
— subscribes to the first inner Observable when it arrives, and emits each value as it arrives, 
- but when the next inner Observable arrives, unsubscribes to the previous one, and subscribes to the new one.


`exhaustMap()` 
— subscribes to the first inner Observable when it arrives, and emits each value as it arrives, 
- discarding all newly arriving inner Observables until that first one completes, then waits for the next inner Observable.


`https://rxjs.dev/guide/higher-order-observables`             MUST READ

higher order observables
- observables emit strings (or) numbers over period of time
- but what if you have series of observables...
- ie observables emitting observables