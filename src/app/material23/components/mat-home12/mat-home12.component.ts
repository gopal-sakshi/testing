import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-home12',
  templateUrl: './mat-home12.component.html',
  styleUrls: ['./mat-home12.component.css']
})
export class MatHome12Component implements OnInit {

  random23:any;

  constructor() { }

  ngOnInit(): void {
    this.random23 = (10 + (Math.random()) * 50);
  }

}
