import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS } from '@angular/forms';

const validate23 = { 
    provide: NG_VALIDATORS, 
    useValue: validateEmail12Fn, 
    multi: true 
}
@Directive({
    selector: '[validateEmail12]',                          // this is working properly... 
    // selector: '[validateEmail12][ngModel]',              // why ngModel is also used ????
    providers: [validate23]
})
export class EmailValidator12 { }

function validateEmail12Fn(c: FormControl) {
    console.log("testing emailValidator12");
    return c.value === 'abc' ? null : {valueMustBeABC:'get lost'}
}