import { Directive } from "@angular/core";
import { FormControl } from "@angular/forms";
import { EmailBlackList12Service } from "../classes/email-black-list12-service";

@Directive({
    selector: '[validateEmail][ngModel],[validateEmail][formControl]',
})
export class EmailValidator {

    validator: Function;

    constructor(emailBlackList: EmailBlackList12Service) {
        this.validator = this.validateEmailFactory(emailBlackList);
    }

    validate(c: FormControl) {
        return this.validator(c);
    }

    validateEmailFactory(emailBlackListService: EmailBlackList12Service) {
        
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