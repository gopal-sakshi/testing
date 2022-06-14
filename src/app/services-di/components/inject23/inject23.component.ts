import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app69-inject23',
  templateUrl: './inject23.component.html',
  styleUrls: ['./inject23.component.scss']
})
export class Inject23Component implements OnInit {

  constructor(
    @Inject('GopAL23') protected token23: {name:string, age:number},
    @Inject('SakShi23') protected token24: any
  ) { }

  ngOnInit(): void {
    console.log(this.token23);
    console.log(this.token24);
  }

}
