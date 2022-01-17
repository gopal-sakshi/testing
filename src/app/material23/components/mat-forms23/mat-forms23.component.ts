import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CanActivate } from '@angular/router';


@Component({
  selector: 'app-mat-forms23',
  templateUrl: './mat-forms23.component.html',
  styleUrls: ['./mat-forms23.component.scss']
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

  event23Form:FormGroup;

  selectedCountryControl = new FormControl(this.selectedCountry);
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    
    this.event23Form = this.fb.group({
      eventId: ['', Validators.required],
      eventName: ['', Validators.required]
    })


    this.event23Form.get('eventId').valueChanges.subscribe(res => {
      console.log("value changed");
    })

    // the mat-select dropdown is irritating... lets leave it...
  }

}
