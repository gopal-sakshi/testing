import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CanActivate } from '@angular/router';


@Component({
  selector: 'app-mat-forms23',
  templateUrl: './mat-forms23.component.html',
  styleUrls: ['./mat-forms23.component.css']
})
export class MatForms23Component implements OnInit {

  eventIds: Array<Number> = [1234, 2345, 3456, 4567];
  countries: any = [
    {
      full: "Great Britain",
      short: "GB"
    },
    {
      full: "United States",
      short: "US"
    },
    {
      full: "Canada",
      short: "CA"
    }
  ];
  selectedCountry: string = "GB";

  selectedCountryControl = new FormControl(this.selectedCountry);
  constructor() { }

  ngOnInit(): void {
  }

}
