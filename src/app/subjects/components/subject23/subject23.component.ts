import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';


@Component({
  selector: 'app-subject23',
  templateUrl: './subject23.component.html',
  styleUrls: ['./subject23.component.css']
})
export class Subject23Component implements OnInit {


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
    
    this.ds$ = this.dss.asObservable();


    // this didnt throw error, when I tried to subscribe
    // console.log() output ======>     inside subscribe method of subject observable
    this.ds$.subscribe(res => {
      console.log("inside subscribe method of subject observable");
      console.log(res);
    });

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

  callFirst() {
    this.dss.next(this.count);
    this.dss.complete();

    this.es$ = of("hello doctor");
    
    this.fs$ = of("hello hospital");
    this.fs$.subscribe(res => {
      console.log("inside subscribe method of fs observable");
      console.log(res);
    });

    this.gs$ = of("gonzalo higuain");
    this.gs$.subscribe( res => {
      console.log("inside gs$ subscribe");
      console.log(res);
    });

    this.gs$.subscribe(res => {
      console.log("inside gs$ subscribe 2");
      console.log(res);
    });

    this.hs$ = of("karim benzema");
    this.hs$.subscribe(res => {
      console.log("inside hs$ res");
      console.log(res);
    }, err => {
      console.log("inside hs$ error");
    }, () => {
      console.log("inside hs$ complete");
    })
  }
}
