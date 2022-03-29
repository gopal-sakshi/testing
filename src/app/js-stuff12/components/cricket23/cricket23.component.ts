import { Component, Input, OnInit } from '@angular/core';
import { Cricket23 } from '../../classes/cricket23';


@Component({
  selector: 'app69-cricket23',
  templateUrl: './cricket23.component.html',
  styleUrls: ['./cricket23.component.scss']
})
export class Cricket23Component extends Cricket23 implements OnInit {

  @Input() format:string    // we choose ODI by default

  constructor() { 
    super();
  }

  ngOnInit(): void {    
    console.log(this.playerPerTeam);
    console.log(this.sportName);
    this.init23();
    this.sayHello();
  }

  // showSupport() is called from base abstract class
    // meaning, base class can call function in grand-child class
  showSupport(): void {
    if(this.format) {
      console.log(`long live ${this.format}`);
    }    
  }

  famousPlayers(): String[] {
    return this.format === 'TEST' ? ["Bradman", "Kallis", "McGrath"] : this.format === 'T20' ? ["Gayle", "deVilliers"] : ["ponting"]
  }

  sayHello() {
    console.log('saying hello from cric component');
  }

}
