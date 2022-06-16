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
  showCallback22:boolean = false;
  
  inputToConsole:string = 'Input from parent';
  format23:string = 'ODI';

  constructor() { }

  ngOnInit(): void {    
  }

  changeInputToConsole23() {
    this.inputToConsole = 'Gonzalo Higuain';
  }

}
