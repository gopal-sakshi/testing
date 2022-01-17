import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class12',
  templateUrl: './ng-class12.component.html',
  styleUrls: ['./ng-class12.component.scss']
})
export class NgClass12Component implements OnInit {

  item1: number = 6;
  item2: number = 12;
  item3: number = 14;
  
  constructor() { }

  ngOnInit(): void {
  }

}
