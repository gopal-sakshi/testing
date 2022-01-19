import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-custom-validator12',
  templateUrl: './custom-validator12.component.html',
  styleUrls: ['./custom-validator12.component.scss']
})
export class CustomValidator12Component implements OnInit {

  formGroup1:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.formGroup1 = this.fb.group({
      firstName: ['', this.firstNameValidator23],
      lastName: [''],
      mobile: ['']
    }, { validators: this.atleastOneValidator});

    this.formGroup1.get('firstName').valueChanges.subscribe(() => {
      console.log(this.formGroup1);
    });
  }

  private atleastOneValidator = () => {
    return (controlGroup) => {
      let controls = controlGroup.controls;
      if (controls) {
        let theOne = Object.keys(controls).find(key => controls[key].value !== '');
        if (!theOne) {
          return {
            atLeastOneRequired: {
              text: 'At least one should be selected'
            }
          }
        }
      }
      return null;
    };
  }

  // at least 2 formControls must be filled
  customValidator22:ValidatorFn  = (conntrol:AbstractControl):ValidationErrors|null => {
    return of(null);
  }

  // firsName shouldnt  contain 'a'
  firstNameValidator23:ValidatorFn = (control:AbstractControl):ValidationErrors|null => {
    if (this.formGroup1 && this.formGroup1.get('firstName').value && this.formGroup1.get('firstName').value.includes('a')) {
      console.log("whats up");
      return of({failed:true})
    }
    // else if ((this.formGroup1.get('firstName').value).length !== 5) {
    //   return {failed:true}
    // }
    console.log('false abbayi');
    return of(null);
  }
  
  onSubmit() {
    console.log("this form is valid");
    console.log(this.formGroup1);
  }

}


/*
  supported built-in validators
      required
      minLength
      maxLength
      email
      pattern
  
  custom Validators for FormControl   
    --- gopal says that firstName must be only 5 letters, a NOT allowed
    

  custom Validators for FormGroup

*/

/*
      custom validator
      - just a function that takes a Control & returns either null when it’s valid, or and error object if it’s not.



*/