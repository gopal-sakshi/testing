import { Directive } from "@angular/core";
import { FormControl, NG_VALIDATORS } from "@angular/forms";
import { EmailBlackList12Service } from "../classes/email-black-list12-service";

// use this with "useValue"
function tempFunction01(c:FormControl) {
    console.log('tempFunction01 ', c.value);
    if(c.value === 'abc') { return {error:'dont use abc, idiot'} } 
    else { return null; }
}

function tempFunction02(c: FormControl, blacklist12: EmailBlackList12Service) {
    console.log('tempFunction02 ', c.value);
    let isInvalid = blacklist12.isInvalidEmail(c.value);
    return isInvalid ? { validateEmail: {invalid: true} } : null
}

function tempFunction03() { console.log('tempFunction03'); return {error:'urike testing abbayi'}; }
function jingChak04(blacklist12:EmailBlackList12Service) { return tempFunction03; }

function jingChak03(blacklist12:EmailBlackList12Service) {
  return (c: FormControl) => {        
        let isInvalid = blacklist12?.isInvalidEmail(c.value);
        console.log(c.value, isInvalid);
        return isInvalid ? { validateEmail: {invalid: true} } : null
    };
}

const jingChak01 = (blacklist12: EmailBlackList12Service) => { return tempFunction03; }

// APPROACH 2 ----> ERROR -- cant read properties of undefined (reading validate)
// APPROACH 4 ----> ERROR Cannot read properties of undefined (reading 'isInvalidEmail')
const jingChak02 = (blacklist12: EmailBlackList12Service) => {
    console.log("testing emailValidator14");
    return (c: FormControl, blacklist12: EmailBlackList12Service) => {
        // returns true for 'gopal612@gmail.com' & 'ped@gmail.com' ---------> because, they are blacklisted...
        let isInvalid = blacklist12.isInvalidEmail(c.value);
        return isInvalid ? { validateEmail: {invalid: true} } : null
    };
}

// const fn1 = (blacklist12) => { jingChak01(blacklist12) };
// const fn2 = (blacklist12) => { jingChak02(blacklist12) };
// const fn3 = jingChak01;
// const fn4 = jingChak02;
const fn5 = jingChak03;
// const fn6 = (blacklist12) => { jingChak03(blacklist12) };
// const fn7 = (blacklist12) => { jingChak04(blacklist12) };
@Directive({
    selector: '[validateEmail14]',
    providers: [
        {
            provide: NG_VALIDATORS,            
            useFactory: fn5,                                    // either use "useFactory"  (OR)    "useValue"
            deps: [EmailBlackList12Service],            
            // useValue: tempFunction01,
            multi: true
        }
    ]
})
export class EmailValidator14 { }