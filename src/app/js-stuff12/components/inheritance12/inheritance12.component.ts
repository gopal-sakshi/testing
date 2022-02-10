import { Component, Inject, OnInit } from '@angular/core';
import { BaseClass12 } from 'src/app/classes/base-class12';
import { inheritanceTest } from '../../types/js-types';

@Component({
  selector: 'app-inheritance12',
  templateUrl: './inheritance12.component.html',
  styleUrls: ['./inheritance12.component.css']
})
export class Inheritance12Component implements OnInit {

  constructor(
    //@Inject(inheritanceTest) private test1:BaseClass12
  ) { }

  ngOnInit(): void {
  }

}
