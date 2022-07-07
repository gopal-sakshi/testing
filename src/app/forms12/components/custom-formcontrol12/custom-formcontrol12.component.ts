import { Component, forwardRef, OnInit } from '@angular/core';

import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormControlRating } from '../../classes/form-control-rating';

const FORM_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CustomFormcontrol12Component),
  multi: true,
};

@Component({
  selector: 'app-custom-formcontrol12',
  templateUrl: './custom-formcontrol12.component.html',
  styleUrls: ['./custom-formcontrol12.component.scss'],
  providers: [FORM_CONTROL_ACCESSOR]
})
export class CustomFormcontrol12Component extends FormControlRating implements OnInit {

  constructor() { super(); }

  ngOnInit(): void {
  }

}
