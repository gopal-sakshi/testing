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
  formGroup2:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    
    this.formGroup1 = this.fb.group({
      // Asynchronous validators should be specified as a third argument
      firstName: ['', [], [this.customValidator22, this.firstNameValidator23]],
      lastName: [''],
      mobile: ['']
    }, { validators: this.atleastOneValidator1 });

    this.formGroup2 = this.fb.group({
      age: ['', Validators.minLength(3)],
      city: [''],
      country: ['']
    });

    // Note: setValidators() overrides existing validators... use addValidators instead if u dont want to disturb existing ones
    this.formGroup2.setValidators(this.atleastOneValidator());    
  }

  private atleastOneValidator = () => {
    return (formGroup) => {
      let controls = formGroup.controls;
      if (controls) {
        let theOne = Object.keys(controls).find(key => controls[key].value !== '');
        console.log(theOne);
        if (!theOne) {
          return {
            atLeastOneRequired: {
              text: 'At least one should be selected'
            }
          }
        }
      }
      return null;
      //return {waitu:'true'}
    };
  }

  atleastOneValidator1:ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    
    console.log(control);
    // return {somethingsHappening: true};     // this is working... this doesnt return an observable...
    return null;
  }

  // at least 2 formControls must be filled
  customValidator22:ValidatorFn  = (conntrol:AbstractControl):ValidationErrors|null => {
    //return of( {whatsHappening: 'doubtful'});
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
  
  onSubmit1() {
    console.log("this is form1");
    console.log(this.formGroup1);
  }

  onSubmit2() {
    console.log("this is form2");
    console.log(this.formGroup2);
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



      https://medium.com/front-end-weekly/angular-how-to-implement-conditional-custom-validation-1ec14b0feb45

*/