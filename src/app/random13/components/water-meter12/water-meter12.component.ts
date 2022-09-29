import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app69-water-meter12',
  templateUrl: './water-meter12.component.html',
  styleUrls: ['./water-meter12.component.scss']
})
export class WaterMeter12Component implements OnInit {

  @Input() lengths:number[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if(this.lengths) {
      console.log(this.lengths);
    }
  }

}
