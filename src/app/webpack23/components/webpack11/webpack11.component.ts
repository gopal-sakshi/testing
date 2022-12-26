import { Component, OnInit } from '@angular/core';

// you're importing everything there is that the library exports as an object called moment
  // obviously doesn't have a call signature
// import * as moment from 'moment';                  // use this "esModuleInterop": false

import moment from 'moment';                          // use this if "esModuleInterop": true

// at this time, all typescript needs to know is that STABLE23 & EXPERIMENT22 ===> some boolean values
  // remember, no values are assigned yet
declare const STABLE23: boolean;
declare const EXPERIMENT22: boolean;

@Component({
  selector: 'app69-webpack11',
  templateUrl: './webpack11.component.html',
  styleUrls: ['./webpack11.component.scss']
})
export class Webpack11Component implements OnInit {

  currentTimeFRLocale: string;

  constructor() { }

  ngOnInit(): void {
    moment.locale('fr');
    this.currentTimeFRLocale = moment().format('LLL');

    console.log(STABLE23);
  }

}
