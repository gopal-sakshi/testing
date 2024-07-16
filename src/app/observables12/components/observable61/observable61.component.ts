import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app69-observable61',
  templateUrl: './observable61.component.html',
  styleUrls: ['./observable61.component.scss']
})
export class Observable61Component implements OnInit {

  observable23:any;
  valuesArray22:number[] = [];
  valuesArray21:number[] = [];
  observer22a:any;
  observer22b = {
    next: (next) => { console.log('next observer21'); this.valuesArray21.push(next) },
    err: (err) => { console.log('err observer21 ',err)},
    complete: () => { console.log('observable21') }
  };
  subscription21:Subscription;

  constructor() { }

  // user will generate next, err, complete callbacks
    // work with observable62 & observable61.service.ts
  ngOnInit(): void {
  }


  startObservable() {
    this.observable23 = new Observable();
    this.observer22a = {
      next: (next:any) => { console.log('observer22 nextVal ==> '); this.valuesArray22.push(next) },
      err: (err:Error) => { console.log('observer22 err ==>  ', err)},
      complete: () => { console.log('observable22 completed ==') }
    };
    this.subscription21 = this.observable23.pipe().subscribe(this.observer22a);
  }

  addSecondObservor() {
    this.observable23.subscribe(this.observer22b);
  }

  checkSubscription() {
    console.log("is subscription closed ===> ", this.subscription21.closed);
  }

  nextCallBack() {

    if(this.observable23) {
      var nextValue = <HTMLInputElement>document.getElementById('inputItem')
      this.observer22a.next(nextValue.value);
      this.observer22b.next(nextValue.value);
    } else {
      console.log('start observable firstuuu');
    }
    
  }

  completeObservable() {
    console.log('complete called');
    this.observer22a.complete();
  }
}
