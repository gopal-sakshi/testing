import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-au-ng-content33',
  templateUrl: './au-ng-content33.component.html',
  styleUrls: ['./au-ng-content33.component.scss']
})
export class AuNgContent33Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  onNewValue(val) {
    console.log(val);
  }

}
