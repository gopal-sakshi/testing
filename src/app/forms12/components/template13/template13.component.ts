import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app69-template13',
  templateUrl: './template13.component.html',
  styleUrls: ['./template13.component.scss']
})
export class Template13Component implements OnInit {
  
  blahblah:any = false;

  constructor() { }

  ngOnInit(): void {
  }

  doStuff() {
    console.log(this.blahblah);
    this.blahblah = true;
  }
}
