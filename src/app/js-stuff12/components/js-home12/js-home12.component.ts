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

  format:string = 'ODI';
  inputToConsole:string = 'Input from parent';

  arr24 = [
    {name: 'Real Madrid', stadium: 'Santiago Bernabeu', country: 'Spain'},
    {name: 'Barcelona', stadium: 'Camp Nou', country: 'Spain'},
    {name: 'Bayern', stadium: 'Allianz Arena', country: 'Germany'},
    {name: 'Man U', stadium: 'Old Trafford', country: 'England'}
  ];
  obj24 = { name: 'Real Madrid', stadium: 'Santiago Bernabeu', country: 'Spain', 
    players: {goalkeeper: "Courtois", defenders: ["Carvajal", "Militao", "Alaba", "Mendy"], midfielders: ["Modric"], striker: "Karim Benzema"} }
   
  firstParam:string = 'white'  ;
  secondParam:string = 'Real Madrid';

  constructor() { }

  ngOnInit(): void {    
  }

  printTables() {
    //checking how console.table() works
    console.table(this.arr24);
    console.table(this.obj24);
  }

  toggleCallBindApply() {
    this.showCallBindApply = !this.showCallBindApply;
  }

  changeInputToConsole23() {
    this.inputToConsole = 'Gonzalo Higuain';
  }

  processInput(value) {    
    console.log(value);
    value = value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');    
  }
}
