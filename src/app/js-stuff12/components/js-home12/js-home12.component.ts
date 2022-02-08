import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-js-home12',
  templateUrl: './js-home12.component.html',
  styleUrls: ['./js-home12.component.scss']
})
export class JsHome12Component implements OnInit {

  showCallBindApply: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleCallBindApply() {
    this.showCallBindApply = !this.showCallBindApply;
  }

}
