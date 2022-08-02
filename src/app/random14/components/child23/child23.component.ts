import { Component, Input, OnInit } from '@angular/core';
import { BaseChild23 } from '../../classes/base-child23';

@Component({
  selector: 'app69-child23',
  templateUrl: './child23.component.html',
  styleUrls: ['./child23.component.scss']
})
export class Child23Component extends BaseChild23 implements OnInit {

  @Input() childName23:string;
  constructor() { 
    super();
    console.log('constructor - child23 component')
  }

  ngOnInit(): void {
    console.log('ngOnInit - child23 component');
  }

  ngOnChanges() {
    console.log('ngOnChanges - child23 component');
  }

}
