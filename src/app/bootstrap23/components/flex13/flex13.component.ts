import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app69-flex13',
  templateUrl: './flex13.component.html',
  styleUrls: ['./flex13.component.scss']
})
export class Flex13Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container
  }

  spaceBetween() {
    document.getElementById('parentDiv23').className = '';    // to remove all classes, set className to emptyString
    document.getElementById('parentDiv23').classList.add('space-between23');
  }

  spaceAround() {
    document.getElementById('parentDiv23').className = '';    // to remove all classes, set className to emptyString
    document.getElementById('parentDiv23').classList.add('space-around23');
  }

  center() {
    document.getElementById('parentDiv23').className = '';    // to remove all classes, set className to emptyString
    document.getElementById('parentDiv23').classList.add('center23');
  }

  left() {
    document.getElementById('parentDiv23').className = '';    // to remove all classes, set className to emptyString
    document.getElementById('parentDiv23').classList.add('left23');
  }

}
