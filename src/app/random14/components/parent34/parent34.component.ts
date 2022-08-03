import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app69-parent34',
  templateUrl: './parent34.component.html',
  styleUrls: ['./parent34.component.scss']
})
export class Parent34Component implements OnInit {

  input1:string = 'parent34';
  input2:Number = 34;
  input3 = { clubName: 'Real Madrid', stadiumName: 'Bernabeu' };
  
  constructor() { }

  ngOnInit(): void {
  }

}
