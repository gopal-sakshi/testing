import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detection11',
  templateUrl: './change-detection11.component.html',
  styleUrls: ['./change-detection11.component.scss']
})
export class ChangeDetection11Component implements OnInit {

  userInput: number;

  constructor() { }

  ngOnInit(): void {
  }

  get time() {
    return Date.now();
  }

  doNothing(){
    // this does nothing... just to capture user click action... so that angular runs changeDetection
  }

}
