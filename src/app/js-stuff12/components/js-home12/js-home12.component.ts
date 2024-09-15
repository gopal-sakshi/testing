import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-js-home12',
  templateUrl: './js-home12.component.html',
  styleUrls: ['./js-home12.component.scss']
})
export class JsHome12Component implements OnInit {

  showCallBindApply: boolean = false;
  showCricket:boolean = false;
  showPromises:boolean = false;
  showConsole23:boolean = false;
  showFunctions12:boolean = false;
  showTwoWayBinding:boolean = false;
  showRandomJS:boolean = false;
  showFb:boolean = false;
  showdbnce:boolean = false;
  showCallback22:boolean = false;
  showAWS1:boolean = false;
  showConsoleTypes:boolean = false;
  showBubble23: boolean = false;
  
  inputToConsole:string = 'Input from parent';
  format23:string = 'ODI';
  age23:any;

  constructor() { }

  ngOnInit(): void {

    let random1 = Math.random();
    console.log(random1);

    // nullish coalescing operator (??) 
      // a logical operator 
      // that returns its right-hand side operand when its left-hand side operand is null or undefined
      // and otherwise returns its left-hand side operand.

    // age23 can be null (or) undefined (or) 'valid age'
    if (random1 > 0.00 && random1 < 0.33) this.age23 = null;
    else if (random1 < 0.66) this.age23 = undefined;
    else this.age23 = random1;
    
    // if age23 is null/undefined =================> then blah23 = string
    // elseif age23 is valid (ie above 0.66) ======> then blah23 = 0.76 (or) 0.84
    var blah23 = this.age23 ?? 'if age23 is null/undefined, blah23 is this value';
    console.log(blah23);
  }


  changeInputToConsole23() {
    this.inputToConsole = 'Gonzalo Higuain';
  }

}
