import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app69-child34',
  templateUrl: './child34.component.html',
  styleUrls: ['./child34.component.scss']
})
export class Child34Component implements OnInit {

  @Input() input1:string;
  @Input() input2:Number;
  @Input() input3:any;
  
  constructor() { }

  ngOnInit(): void {
  }

  changeValues() {
    this.input1 = 'child34';
    this.input2 = 35;
    this.input3 = { clubName: 'RM', stadiumName: 'Di Stefano' };
  }

}
