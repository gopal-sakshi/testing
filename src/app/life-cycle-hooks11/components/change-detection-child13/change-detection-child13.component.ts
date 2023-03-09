import { Component, OnInit } from '@angular/core';
import { ChangeDetection13Component } from '../change-detection13/change-detection13.component';

@Component({
  selector: 'app69-change-detection-child13',
  templateUrl: './change-detection-child13.component.html',
  styleUrls: ['./change-detection-child13.component.scss']
})
export class ChangeDetectionChild13Component implements OnInit {

  constructor(private parent23:ChangeDetection13Component) { }

  ngOnInit() { 
    // this.parent23.text23 = 'Updated text in parent component'; 
  }
  // ngAfterViewChecked() { this.parent23.text23 = 'Updated text in parent component'; }

}
