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
  observer22:any;
  observer21 = {
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
    // this.observable23 = Observable.create(this.observer22);      // even this will work...
    this.observable23 = new Observable();
    this.observer22 = {
      next: (next) => { console.log('next observer22'); this.valuesArray22.push(next) },
      err: (err) => { console.log('err observer22 ',err)},
      complete: () => { console.log('observable22 completed') }
    };
    this.subscription21 = this.observable23.pipe().subscribe(this.observer22);
  }

  addSecondObservor() {
    console.log(this.observable23);
    // this.observable23.subscribe(this.observer21);
  }

  checkSubscription() {
    console.log(this.subscription21.closed);
  }

  nextCallBack() {

    // var nextValue = <HTMLInputElement>document.getElementById('inputItem')
    // this.observer22.next(nextValue.value);

    if(this.observable23) {
      var nextValue = <HTMLInputElement>document.getElementById('inputItem')
      this.observer22.next(nextValue.value);
      // this.observer21.next(nextValue.value);
    } else {
      console.log('start observable firstuuu');
    }
    
  }

  completeObservable() {
    console.log('complete called');
    this.observer22.complete();
  }
}
