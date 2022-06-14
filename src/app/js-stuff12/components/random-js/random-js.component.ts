import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app69-random-js',
  templateUrl: './random-js.component.html',
  styleUrls: ['./random-js.component.scss']
})
export class RandomJsComponent implements OnInit {

  arr24 = [
    {name: 'Real Madrid', stadium: 'Santiago Bernabeu', country: 'Spain'},
    {name: 'Barcelona', stadium: 'Camp Nou', country: 'Spain'},
    {name: 'Bayern', stadium: 'Allianz Arena', country: 'Germany'},
    {name: 'Man U', stadium: 'Old Trafford', country: 'England'}
  ];
  obj24 = { 
    name: 'Real Madrid', 
    stadium: 'Santiago Bernabeu', 
    country: 'Spain', 
    players: {
      goalkeeper: "Courtois", 
      defenders: ["Carvajal", "Militao", "Alaba", "Mendy"], 
      midfielders: ["Modric"], 
      striker: "Karim Benzema"
    } 
  }

  format:string = 'ODI';
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

  processInput1(value) {    
    console.log(value);
    value = value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');    
  }

  processInput2(value) {
    console.log(value);
    if((+value) > 100) {
      console.log('gr');
      var htmlElem = <HTMLInputElement>document.getElementById('input23');
      htmlElem.value = '3434343';
    }    
  }

}
