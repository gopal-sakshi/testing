import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

/*
  metadata of Component ---> has a property called animations. 
  - This property will take an array as input. 
  - The array contains one or more “trigger”. 
    Each trigger has a unique name and an implementation. 
    The state & transitions for our animation need to be defined in the trigger implementation.

  https://www.freecodecamp.org/news/how-to-use-animation-with-angular-6-675b19bc3496/

*/
@Component({
  selector: 'app69-animate12',
  templateUrl: './animate12.component.html',
  styleUrls: ['./animate12.component.scss'],
  animations: [
    trigger('changeDivSize', [
      state('initial', style({
        backgroundColor: 'green',
        width: '100px',
        height: '100px'
      })),
      state('final', style({
        backgroundColor: 'red',
        width: '200px',
        height: '200px'
      })),
      transition('initial=>final', animate('1500ms')),
      transition('final=>initial', animate('1000ms'))
    ]),
    trigger('balloonEffect', [
      state('initial', style({
        backgroundColor: 'green',
        transform: 'scale(1)'
      })),
      state('final', style({
        backgroundColor: 'black',
        transform: 'scale(1.5)'
      })),
      transition('final=>initial', animate('1000ms')),
      transition('initial=>final', animate('1500ms'))
    ]),
  ]    
})
export class Animate12Component implements OnInit {

  currentStateSquare = 'initial';
  currentStateCircle = 'initial';
  constructor() { }

  ngOnInit(): void {
  }

  changeSquare(): void {
    this.currentStateSquare = this.currentStateSquare === 'initial' ? 'final' : 'initial';
  }
  changeCircle(): void {
    this.currentStateCircle = this.currentStateCircle === 'initial' ? 'final' : 'initial';
  }

}
