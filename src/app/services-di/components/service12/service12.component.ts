import { Component, OnInit } from '@angular/core';
import { Serv121 } from '../../services/serv121.service';
import { Serv144 } from '../../services/serv144.service';

@Component({
  selector: 'app69-service12',
  templateUrl: './service12.component.html',
  styleUrls: ['./service12.component.scss'],
  providers: [Serv121]
})
export class Service12Component implements OnInit {

  constructor(private serv121: Serv121, 
    private serv144:Serv144) { }

  ngOnInit(): void {
  }

  setCount12() {
    this.serv121.changeCount(12);    
  }

  getCount12() {
    const result12 = this.serv121.getCount();
    console.log(result12);
  }    

  setCountMod12() {
    this.serv144.changeCount(34533543543543545);
  }

  getCountMod12() {
    const result34 = this.serv144.getCount();
    console.log(result34);
  }
}
