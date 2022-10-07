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
    this.setHeights();
  }

  setHeights() {
    var totalHeight = this.lengths[0] + this.lengths[1] + this.lengths[2];
    console.log(this.lengths[0] / totalHeight);
    document.getElementById('container1').style.height = `${this.lengths[0] * 100 / totalHeight }%`;

    document.getElementById('container2').style.height = `${this.lengths[1] * 100 / totalHeight }%`;
    document.getElementById('container3').style.height = `${this.lengths[2] * 100 / totalHeight }%`;

    console.log(document.getElementById('container1').clientHeight);
    console.log(document.getElementById('container2').clientHeight);
    console.log(document.getElementById('container3').clientHeight);
    console.log(document.getElementById('container1').clientHeight + document.getElementById('container2').clientHeight + document.getElementById('container3').clientHeight)
  }

}
