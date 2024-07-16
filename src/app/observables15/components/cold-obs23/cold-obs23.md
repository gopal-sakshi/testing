Observables are lazy 
- they only execute values when something subscribes to it.
- For each subscriber the Observable starts a new execution, 
- resulting in the fact that the data is not shared. 

If your Observable produces a lot of different values 
it can happen that two Observables that subscribe at more or less the same 
receive two different values


`Hot Observable`
- DOM events - tracking clicking behaviour (mouse clicks)


```ts
const observable = Rx.Observable.fromEvent(document, 'click');
observable.subscribe((event) => { console.log(event.clientX); });
observable.subscribe((event) => { console.log(event.clientY); });
```

The data is produced outside of the Observable itself. 
Which makes it hot, because the data is being created regardless of if there is a subscriber or not. 
If there is no subscriber when the data is being produced, the data is simply lost.

<!-- ----------------------------------------------------------------- --->

`reactive programming`
- responding to events in the form of sequences/streams of data

reactive programming (synonymous with <observer pattern>)
- Observables hold information about observers who subscribe to sequences of notifications. 
- The observable is responsible for sending notifications to all of the subscribed observers.

<pub/sub pattern> also a type of reactive programming


hot observable
- can start without any subscribed observers 
- can continue after the last observer unsubscribes.


cold observable
- only starts when a subscription occurs 
- shuts down when the subscription ends.

<!-- ----------------------------------------------------------------- --->