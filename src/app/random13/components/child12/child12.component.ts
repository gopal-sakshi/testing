import { Component, OnInit } from '@angular/core';
import { ParentR13Component } from '../parent/parent.component';


@Component({
  selector: 'app69-child12',
  templateUrl: './child12.component.html',
  styleUrls: ['./child12.component.scss']
})
export class Child12Component {

  public unique_key: number;
  public parentRef: ParentR13Component;

  constructor() {
  }

  remove_me() {
    console.log(this.unique_key)
    this.parentRef.remove(this.unique_key)
  }
}