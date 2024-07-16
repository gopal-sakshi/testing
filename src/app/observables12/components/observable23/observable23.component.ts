import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject, of, Subscription, from } from 'rxjs';

@Component({
  selector: 'app69-observable23',
  templateUrl: './observable23.component.html',
  styleUrls: ['./observable23.component.scss']
})
export class Observable23Component implements OnInit {

  subscription44: Subscription;
  subscription45: Subscription;
  count:any = 23;

  dss = new BehaviorSubject('')      // it seems BehaviorSubject needs one argument
  
  // cs$:Observable                 // this threw error... bcoz, generic observable needs at least one argument
  ds$:Observable<string>            // this ds$:Observable<string> didnt take any arguments (coz not generic observable)
  es$:Observable<string>            // example of subscribing observable, even before it is given some value ???
  fs$:Observable<string>            // fs$ observable is given a string "hello doctor"

  constructor() {
    
    //ds$ is an Observable... it has pipe(), subscribe() methods on it... subscribe() method needs an observer object
    // transform subject into Observable(); add subscribe() method & store it in subscription44
    this.ds$ = this.dss.asObservable();

    this.subscription44 = this.ds$.subscribe(
        res => { console.log("ds$ next value @ 44 ==> ", res); }, 
        err => { console.log('error in ds$ observable ',err); }, 
        () => { console.log('ds$ observable finished... complete cb doesnt take arguments'); }
    );

    this.subscription45 = this.ds$.subscribe(
        res => { console.log("ds$ next value @ 45 ==> ", res); }, 
        err => { console.log('error in ds$ observable ',err); }, 
        () => { console.log('ds$ observable finished... complete cb doesnt take arguments'); }
    )
    // // this threw error, when I tried to subscribe... 
    // // TypeError: Cannot read properties of undefined (reading 'subscribe')
    // // Why Cant I subscribe to observable in constructor... bcoz same code in ngOnInit() worked
    // this.es$.subscribe(res => {
    //   console.log("inside subscribe method of normal observable");
    //   console.log(res);
    // })

    /*
        if you don't initialize a variable, it means you might try to access it later while its still undefined.
        we want to subscribe to observable... but it is undefined
        I mean we can send data first... then subscribe ---> then observable wont be undefined
    */
  }

  stopAccepting():void {
    this.subscription44.unsubscribe();      // subscription45 still remains active
    // this.dss.complete();                 // this closes BehSubject; all active subscribers/observers 
                                                // just remain chumma waiting for data, which never arrives
  }

  addSubscriptions1() {

    // APPROACH 1
    this.fs$.subscribe(
        res => { console.log("3 params as argument", res); }, 
        undefined, 
        () => { console.log('fs$ finished') } 
    );
  
    // APPROACH 2
    this.fs$.subscribe({
        next: (res:any) => { console.log("an object with 3 Fns as argument " , res) },
        error: (err:any) => { console.log(err) },
        complete: () => { console.log('completed') }
    })

    // APPROACH 3
    this.fs$.subscribe(res => { console.log("just 1 Fn as argument ", res) })
  }

  addSubscriptions2() {
    // es$.subscribe() throws error in constructor... but not here
    const esObserver = {
        next: nextValue => {console.log('esObserver ',nextValue)},
        error: err => {console.log('esObserver ', err)},
        complete: () => {console.log('esObservor finished')}
    };
    this.es$.subscribe(esObserver);
  }

  ngOnInit(): void {
    console.log("ngOnInit called");
  }

  sendData() {

    this.dss.next(Date.now().toString());                   // send data to behaviour subject 
    this.es$ = of("gopal", Date.now().toString(), "sakshi", Date.now().toString(), "real madrid");
    this.fs$ = from("143");

    /* add subscriptions only after observables are defined ============= */
    this.addSubscriptions1();
    this.addSubscriptions2();
  }
}


/*
    Next notifications
    - are the most important and most common type: 
    - they represent actual data being delivered to an Observer.

    Error & Complete notifications
    - happen only once during the Observable Execution, and there can only be either one of them.
    - That means if we get error notification... thats it everything ends... complete wont be called
    - (or) if we get complete notification, thats it... nothing gets delivered anymore... error wont be called

    Observable Grammar
    - next*(error|complete)?
    - In an Observable Execution, zero to infinite Next notifications may be delivered. 
    - If either an Error or Complete notification is delivered, then nothing else can be delivered afterwards.
*/