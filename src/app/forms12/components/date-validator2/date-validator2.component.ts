import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app69-date-validator2',
  templateUrl: './date-validator2.component.html',
  styleUrls: ['./date-validator2.component.scss']
})
export class DateValidator2Component implements OnInit {

  dateRange2: FormGroup;
  constructor() { }

  // Need to look into it... for the time being... just go with "date-validator.component.ts"
  ngOnInit(): void {
    this.dateRange2 = new FormGroup ({
      to: new FormControl('', this.sixtyDaysValidator),
      from: new FormControl('')
    });
  }

  sixtyDaysValidator(control: AbstractControl):ValidatorFn {
    console.log(control);
    return null;
  }

}
