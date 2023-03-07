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
      firstName: ['', [], [this.firstNameValidator23]],     // Async validators as 3rd argument
      panCard: [''], aadhar: [''], drivingLicense: [''], voterCard:['']
    }, { validators: this.minValidators1(3) });

    this.formGroup2 = this.fb.group({ age: ['', Validators.minLength(3)], city: [''], country: [''] });
    // setValidators() overrides existing validators... so, use addValidators instead
    this.formGroup2.setValidators(this.atleastOneValidator2());       
  }

  atleastOneValidator2 = () => {
    return (formGroup) => {
      let theOne = Object.keys(formGroup?.controls).find(key => formGroup.controls[key].value !== '');
      if (!theOne) return { text: 'At least one should be selected' }
      return null;
    };
  }

  minValidators1:any = (count) => {
    return (group44: FormGroup): ValidationErrors | null => {
      var notNull = 0;
      Object.keys(group44.controls).map(control => group44.controls[control].value != '' ? notNull++ : '');      
      if(notNull < count) return of('min two ID proofs needed')
      else return null;
    }
  }


  firstNameValidator23:ValidatorFn = (control23:AbstractControl):ValidationErrors|null => {

    // formGroup1.get('firstName')            =========> NOT RECOMMENDED
    // if (this.formGroup1?.get('firstName')?.value?.includes('a')) { return of('"a" undi') }
    // else if ((this.formGroup1?.get('firstName')?.value)?.length !== 5) { return of({length: '5 kaadu'}) }
    // return of(null);

    // control23                              ==========> RECOMMENDED
    if (control23?.value?.includes('a')) { return of('a alphabet undi') }
    else if ((control23?.value)?.length !== 5) { return of({length: '5 kaadu'}) }
    return of(null);
  }
  
  onSubmit1() { console.log("this is form1"); console.log(this.formGroup1); }
  onSubmit2() { console.log("this is form2"); console.log(this.formGroup2); }
}

// https://medium.com/front-end-weekly/angular-how-to-implement-conditional-custom-validation-1ec14b0feb45