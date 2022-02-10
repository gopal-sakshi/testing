import { Directive, forwardRef } from "@angular/core";
import { FormControl, NG_VALIDATORS } from "@angular/forms";
import { EmailBlackList12Service } from "../classes/email-black-list12-service";

@Directive({
    selector: '[validateEmail15][ngModel],[validateEmail][formControl]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => EmailValidator15), multi: true }
    ]
})

/**
 * A validator can also be a class as long as it implements a validate(c: FormControl) method
 * earlier, our validators are functions (or) directives
 */
export class EmailValidator15 {

    validator: Function;

    constructor(emailBlackList: EmailBlackList12Service) {
        this.validator = this.validateEmailFactory(emailBlackList);
    }

    validate(c: FormControl) {
        return this.validator(c);
    }

    validateEmailFactory(emailBlackListService: EmailBlackList12Service) {
        console.log("testing emailValidator15");
        
        return (c: FormControl) => {

            let isValid = emailBlackListService.isValidEmail(c.value);
        
            return isValid ? null : {
                validateEmail: {
                    valid: false
                }
            };
        };
    }
}