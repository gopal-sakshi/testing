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


// directly using useValue (It works)
function tempFunction14(c:FormControl) {
    console.log('testing validateEmail14 - tempFunction');            // This Works
    if(c.value === 'abc') {
        return {error:'dont use abc, idiot'}
    } else {
        return null;
    }
}

// didnt work... didnt throw error
function someFunction_with_params(c: FormControl, emailBlackListService44: EmailBlackList12Service) {
    console.log('some function abbayi ',c.value);
    let isInvalid = emailBlackListService44.isInvalidEmail(c.value);
    return isInvalid ? { validateEmail: {invalid: true} } : null
}

// this works with validateEmail14Factory_temp2(); we just return this function, without much functionality
function someFunction_temp2() {
    console.log('some function temp2');
    return {error:'urike testing abbayi'};
    return null;
}
// this works with someFunction_temp2()
// APPROACH 7 ---> ERROR --- Cannot read properties of undefined (reading 'validate')
function validateEmail14Factory_temp2(emailBlackListService44:EmailBlackList12Service) {
    return someFunction_temp2;
}

// APPROACH 5 ---> ERROR -- Cannot read properties of undefined (reading 'isInvalidEmail')
// APPROACH 6 ---> ERROR --- Cannot read properties of undefined (reading 'validate')
function validateEmail14Factory_temp1(emailBlackListService44:EmailBlackList12Service) {
  return (c: FormControl, emailBlackListService44: EmailBlackList12Service) => {
        // returns true for 'gopal612@gmail.com' & 'ped@gmail.com' ---------> because, they are blacklisted...
        let isInvalid = emailBlackListService44.isInvalidEmail(c.value);
        return isInvalid ? { validateEmail: {invalid: true} } : null
    };
}

// APPROACH 1 ---> ERROR -- cant read properties of undefined (reading validate)
// APPROACH 3 ---> its working
const validateEmail14Factory_using_const1 = (emailBlackListService44: EmailBlackList12Service) => {
  return someFunction_temp2;
}

// APPROACH 2 ----> ERROR -- cant read properties of undefined (reading validate)
// APPROACH 4 ----> ERROR Cannot read properties of undefined (reading 'isInvalidEmail')
const validateEmail14Factory_using_const2 = (emailBlackListService44: EmailBlackList12Service) => {
    console.log("testing emailValidator14");
    return (c: FormControl, emailBlackListService44: EmailBlackList12Service) => {
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




            // useFactory: (emailBlackListService44) => {
            //   validateEmail14Factory_using_const1(emailBlackListService44)              // APPROACH 1
            //   // validateEmail14Factory_using_const2(emailBlackListService44)           // APPROACH 2
            // },
            // deps: [EmailBlackList12Service],

            // useFactory: validateEmail14Factory_using_const1,                                  // APPROACH 3
            // deps: [EmailBlackList12Service],

            // useFactory: validateEmail14Factory_using_const2,                                  // APPROACH 4
            // deps: [EmailBlackList12Service],

            // useFactory: validateEmail14Factory_temp1,                                       // APPROACH 5
            // deps: [EmailBlackList12Service],

            useFactory: (emailBlackListService44) => {
              // validateEmail14Factory_temp1(emailBlackListService44)                              // APPROACH 6
              validateEmail14Factory_temp2(emailBlackListService44)                            // APPROACH 7
            },
            deps: [EmailBlackList12Service],

            // useValue: tempFunction14,


            multi: true
        }
    ]
})
export class EmailValidator14 { }
