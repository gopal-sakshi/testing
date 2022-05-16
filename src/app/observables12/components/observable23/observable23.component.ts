import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject, of, Subscription, from } from 'rxjs';

@Component({
  selector: 'app69-observable23',
  templateUrl: './observable23.component.html',
  styleUrls: ['./observable23.component.scss']
})
export class Observable23Component implements OnInit {

  subscription44: Subscription

  count:any = 23;
  dss = new BehaviorSubject('')      // it seems BehaviorSubject needs one argument
  

  // ds2$:Observable                   // this threw error... bcoz, generic observable needs at least one argument

  ds$:Observable<string>            // this ds$:Observable<string> didnt take any arguments
                                    // but ds2$:Observable == generic observable, it needs at least one argument

  es$:Observable<string>            // example of subscribing observable, even before it is given some value ???
  
  fs$:Observable<string>            // fs$ observable is given a string "hello doctor"
                                    // it emits these values asynchronously

  gs$:Observable<string>            // this observable will be subscribed twice... lets see what happens                          


  hs$:Observable<string>            // this observable will take all 3 callback functions... lets see what happens

  constructor() { 
        //ds$ is an Observable... it has pipe(), subscribe() methods on it... subscribe() method needs an observer object
        this.ds$ = this.dss.asObservable();


        // this.ds$ = of(1,2,3, 9, 10)
        // from ("gopal", "sakshi");
            // this didnt throw error, when I tried to subscribe
            // console.log() output ======>     inside subscribe method of subject observable
            this.subscription44 = this.ds$.subscribe(
              res => {
                console.log("inside subscribe method of subject observable");
                console.log(res);
              }, 
              err => {
                console.log('error in ds$ observable ',err)
              }, 
              () => {
                console.log('ds$ observable finished... complete cb doesnt take arguments')
              }
            );
            // this.subscription44.unsubscribe();
        
            // this threw error, when I tried to subscribe... 
            // TypeError: Cannot read properties of undefined (reading 'subscribe')
            // this.es$.subscribe(res => {
            //   console.log("inside subscribe method of normal observable");
            //   console.log(res);
            // })
        
        
            /*
        
            Next notifications are the most important and most common type: 
              they represent actual data being delivered to an Observer.
            Error & Complete notifications may happen only once during the Observable Execution, and there can only be either one of them.
            That means if we get error notification... thats it everything ends... complete wont be called
            (or) if we get complete notification, thats it... nothing gets delivered anymore... error wont be called
        
            Observable Grammar
              next*(error|complete)?
              In an Observable Execution, zero to infinite Next notifications may be delivered. If either an Error or Complete notification is delivered, then nothing else can be delivered afterwards.
        
            
        
            */
  }

  ngOnInit(): void {
    console.log("ngOnInit called");
    this.callFirst();
  }

  // observer.create()
  callFirst() {
    var esSubscription = new Subscription();

    this.dss.next(this.count);
    this.dss.complete();

    this.es$ = of("gopal", "sakshi", "real madrid");
    
    
    /*****************************************************/
    this.fs$ = from("fs$_emits_values_one_by_one");
    
    
    

    // APPROACH 1         // this usage is deprecated... use observer object, instead of complete callback (APPROACH 2)
    this.fs$.subscribe(
      res => { console.log(res); }, 
      undefined, 
      () => { console.log('fs$ finished') } 
    );

    // APPROACH 2
    this.fs$.subscribe({
      next: (res:any) => { console.log(res) },
      error: (err:any) => { console.log(err) },
      complete: () => { console.log('completed') }
    })
    /****************************************************/
    this.gs$ = of("value emitted by gs$ observable");


    // it seems gs$ observable is subscribed two times... 
    this.gs$.subscribe( res => {
      console.log("this is gs$ - 1st subscriber/observer");
      console.log(res);
    });

    this.gs$.subscribe(res => {
      console.log("this is gs$ - 2nd subscriber/observer");
      console.log(res);
    });

    const esObserver = {
      next: nextValue => {console.log('esObserver ',nextValue)},
      error: err => {console.log('esObserver ', err)},
      complete: () => {console.log('esObservor finished')}
    };

    this.es$.subscribe(esObserver);

    this.hs$ = of("hello hs$ observable");
    this.hs$.subscribe(res => {
      console.log("inside hs$ res");
      console.log(res);
    }, err => {
      console.log("inside hs$ error");
    }, () => {
      console.log("inside hs$ complete");
    });

    
  }
}
