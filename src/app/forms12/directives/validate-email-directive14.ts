/*
    Sometimes, a custom validator has dependencies so we need a way to inject them
    Let’s say our email validator needs an EmailBlackList service, to check if the given control value is 
        not only a "valid email address"
        but also "not on our email black list"
    In an ideal world, we’d build a separate validator for checking against an email black list

    Approach 1
    - create a factory function that returns our validateEmail function, which then uses an instance of EmailBlackList service

    Approach 2
    - see valiate-email-directive1313.ts
*/

import { Directive } from "@angular/core";
import { FormControl, NG_VALIDATORS } from "@angular/forms";
import { EmailBlackList12Service } from "../classes/email-black-list12-service";

function tempFunction14(c:FormControl) {
    console.log('testing validateEmail14 - tempFunction');
    if(c.value === 'abc') {
        return {error:'dont use abc, idiot'}
    } else {
        return null;
    }    
}

function someFunction() {
    console.log('some function abbayi');
    return {error:'urike testing abbayi'};
    return null;
}
function validateEmail14Factory(emailBlackListService44: EmailBlackList12Service) {
    console.log("testing emailValidator14");
    return someFunction
    return (c: FormControl) => {
        
        //  let EMAIL_REGEXP = /d/                  /* some regex expression */
        
        // returns true for 'gopal612@gmail.com' & 'ped@gmail.com' ---------> because, they are blacklisted...
        let isInvalid = emailBlackListService44.isInvalidEmail(c.value);
        return isInvalid ? { validateEmail: {invalid: true} } : null
    };
}

@Directive({
    selector: '[validateEmail14][ngModel]',
    providers: [
        {
            provide: NG_VALIDATORS,
            
            
            
            // in validateEmail12 directive, we used 'useValue'
            // but in validateEmail14 directive, we are forced to use 'useFactory'
                // because we dont return the factoryFunction... rather we return what the factoryFunction returns
            useFactory: validateEmail14Factory,
            deps: [EmailBlackList12Service],

            // useValue: tempFunction14,

            
            multi: true
        }
    ]
})
export class EmailValidator14 { }