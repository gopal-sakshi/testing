import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-template11',
  templateUrl: './ng-template11.component.html',
  styleUrls: ['./ng-template11.component.scss']
})
export class NgTemplate11Component implements OnInit {

  test2:boolean = true;
  test3:boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

}
