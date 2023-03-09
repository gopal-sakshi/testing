import { Component } from '@angular/core';

@Component({
  selector: 'app69-change-detection13',
  // templateUrl: './change-detection13.component.html',
  template: `<div [textContent]="text23"></div>
  <app69-change-detection-child13></app69-change-detection-child13>`,
  styleUrls: ['./change-detection13.component.scss']
})
export class ChangeDetection13Component {

  text23:string = 'Original text in parent component';

  constructor() { }
  
}
