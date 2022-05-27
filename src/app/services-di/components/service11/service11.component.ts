import { Component, OnInit } from '@angular/core';
import { Serv121 } from '../../services/serv121.service';
import { Serv144 } from '../../services/serv144.service';

@Component({
  selector: 'app69-service11',
  templateUrl: './service11.component.html',
  styleUrls: ['./service11.component.scss'],
  providers: [Serv121]
})
export class Service11Component implements OnInit {

  constructor(private serv121: Serv121, private serv144: Serv144) { }

  ngOnInit(): void {
  }

  setCountComp11() {
    this.serv121.changeCount(11);    
  }

  getCountComp11() {
    const result11 = this.serv121.getCount();
    console.log(result11);
  }

  setCountMod11() {
    this.serv144.changeCount(23);
  }

  getCountMod11() {
    const result11_1 = this.serv144.getCount();
    console.log(result11_1);
  }

}
