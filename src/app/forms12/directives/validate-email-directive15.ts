import { Directive, forwardRef } from "@angular/core";
import { FormControl, NG_VALIDATORS } from "@angular/forms";
import { EmailBlackList12Service } from "../classes/email-black-list12-service";

// A validator can also be a class as long as it implements a validate(c: FormControl) method
// earlier, our validators are functions (or) directives
@Directive({
    selector: '[validateEmail15]',
    providers: [ { provide: NG_VALIDATORS, useExisting: forwardRef(() => EmailValidator15), multi: true } ]
})
export class EmailValidator15 {

    validator: Function;
    constructor(emailBlackList: EmailBlackList12Service) { this.validator = this.emailFactory(emailBlackList); }
    validate(c: FormControl) { return this.validator(c); }
    emailFactory(emailBlackListService: EmailBlackList12Service) {
        return (c: FormControl) => {
            let isInvalid = emailBlackListService.isInvalidEmail(c.value);        
            return isInvalid ? { validateEmail: 'dobbindi' } : null;
        };
    }
}