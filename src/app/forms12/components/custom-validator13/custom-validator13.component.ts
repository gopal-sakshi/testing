import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validator22Class } from '../../classes/validator22-class';

@Component({
  selector: 'app-custom-validator13',
  templateUrl: './custom-validator13.component.html',
  styleUrls: ['./custom-validator13.component.scss']
})
export class CustomValidator13Component implements OnInit {

  form44:FormGroup;
  constructor() { }

  ngOnInit() {}

  onSubmit(multipleEmailForm) {
    console.log(multipleEmailForm);
  }

  isFormValid(multipleEmailForm:any):boolean {
    if (multipleEmailForm.valid) {
      return false;
    } else {
      return true
    }
  }

  consoleForm(multipleEmailForm) {
    console.log(multipleEmailForm);
  }
}
