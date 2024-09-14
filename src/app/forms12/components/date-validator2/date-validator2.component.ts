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
      to: new FormControl('', this.sixDaysValidator),
      from: new FormControl('')
    });
  }

  sixDaysValidator = (control: AbstractControl):ValidatorFn => {    
    return (control:AbstractControl):any => {
        console.log("six day validator triggered roi");
        if(new Date(control.value).getSeconds() - new Date(this.dateRange2.get('from').value).getSeconds() > 6 * 86400 * 1000) {
            return { timeDiffError: true }
        } else {
            console.log("date diff less than 6 days ---> all good23")
            return null;
        }
    }
  }
}
