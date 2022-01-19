import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[validateEmail12][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useValue: validateEmail12, multi: true }
    ]
})
export class EmailValidator12 { }

function validateEmail12(c: FormControl) {
    let EMAIL_REGEXP = /ddds/

    return EMAIL_REGEXP.test(c.value) ? null : {
        validateEmail: {
            valid: false
        }
    };
}