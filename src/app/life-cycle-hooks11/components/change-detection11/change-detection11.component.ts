import { Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detection11',
  templateUrl: './change-detection11.component.html',
  styleUrls: ['./change-detection11.component.scss']
})
export class ChangeDetection11Component implements OnInit {

  userInput: number;
  time23:any ;

  constructor(zone: NgZone) {
    this.time23 = Date.now();
    
    // setInterval(() => { this.time23 = Date.now(); }, 3000);
    zone.runOutsideAngular(() => { setInterval(() => { this.time23 = Date.now() }, 2000); });

  }

  ngOnInit(): void {}

  get time() { 
    // return Date.now();           // ERROR:     ExpressionChangedAfterItHasBeenCheckedError 
    // return '1678333140467';         // wont throw ExpressionChangedAfterItHasBeenCheckedError 
    return this.time23;             // see readMe3.md
  }

  // this does nothing... just to capture user click action... so that angular runs changeDetection
  doNothing(){}

}
