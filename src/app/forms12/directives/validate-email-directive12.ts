import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[validateEmail12][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useValue: validateEmail12Fn, multi: true }
        // We basically add a new value to the NG_VALIDATORS token
        // Angular will pick up our validator (our validator name = validateEmail12) 
            // by injecting what it gets for NG_VALIDATORS, and performs validation on a form control
    ]
})
export class EmailValidator12 { }

function validateEmail12Fn(c: FormControl) {
    console.log("testing emailValidator12");
    
    // let EMAIL_REGEXP = /[abc]/

    // return EMAIL_REGEXP.test(c.value) ? null : {
    //     validateEmail: {
    //         valid: false
    //     }
    // };

    return c.value === 'abc' ? null : {valueMustBeABC:'get lost'}
}