/*
    Sometimes, a custom validator has dependencies so we need a way to inject them
    Let’s say our email validator needs an EmailBlackList service, to check if the given control value is 
        not only a "valid email address"
        but also "not on our email black list"
    In an ideal world, we’d build a separate validator for checking against an email black list

    Approach 1
    - create a factory function that returns our validateEmail function, which then uses an instance of EmailBlackList service

    Approach 2
    - see valiate-email-directive-di2.ts
*/

import { Directive } from "@angular/core";
import { FormControl, NG_VALIDATORS } from "@angular/forms";
import { EmailBlackList12Service } from "../classes/email-black-list12-service";

function validateEmailFactory(emailBlackList: EmailBlackList12Service) {
    return (c: FormControl) => {
        
        //  let EMAIL_REGEXP = /d/                  /* some regex expression */
        
        let isValid = emailBlackList.isValidEmail(c.value);
        
        return isValid ? null : {
            validateEmail: {
                valid: false
            }
        };
    };
}

@Directive({
    providers: [
        {
            provide: NG_VALIDATORS,
            useFactory: (emailBlackListService44) => {
                return validateEmailFactory(emailBlackListService44);
            },
            deps: [EmailBlackList12Service],
            multi: true
        }
    ]
})
class EmailValidatorDI { }