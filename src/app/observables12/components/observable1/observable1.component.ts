import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable, Observer, of } from 'rxjs';
import { map, scan, throttleTime } from 'rxjs/operators';
@Component({
  selector: 'app-observable1',
  templateUrl: './observable1.component.html',
  styleUrls: ['./observable1.component.scss']
})
export class Observable1Component implements OnInit {

  obs1:Observable<any>
  value1:string;
  clickObservable: any;
  noObservable: boolean = true;
  
  constructor() {
  }

  ngOnInit(): void {
    this.purity();
    this.flow();    
  }

  purity() {
    var button = document.querySelector('button');    

    // Option A... we need external variable 'count' to keep track of how many times user clicked
    var count = 0;
    button.addEventListener('click', () => console.log(`Clicked ${++count} times - not pure`));

    // Option B... no external variable used here... count is internal to fromEvent observable
    fromEvent(button, 'click').pipe(
      scan(count => count + 1, 0)
    ).subscribe(count => console.log(`Clicked ${count} times - pure function`));
  }

  flow() {

    var button = document.querySelector('button');

    var count = 0;
    var rate = 1000;
    var lastClick = Date.now() - rate;    
    button.addEventListener('click', () => {
      if (Date.now() - lastClick >= rate) {
        console.log(`Clicked ${++count} times at ${Date.now()}`);        
        lastClick = Date.now();
      }
    });

    fromEvent(button, 'click').pipe(
      throttleTime(1000),
      scan(count => count + 1, 0)
    ).subscribe(count => console.log(`Clicked ${count} times`));

  }

  // create an Observable ===> whenever user clicks btn, it emits a value;
  captureClick() {
    const targetBtn = document.getElementById('timeStamp23');
    if(this.noObservable) {     // if noObservable ===> create an Observable
      this.clickObservable = fromEvent(targetBtn, 'click').pipe( map(res => res.timeStamp) );
      this.noObservable = false;
      this.clickObservable.subscribe(res => { console.log(res) });
      console.log('observable created');
    }    
  }

}
