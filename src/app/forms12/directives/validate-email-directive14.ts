import { Directive } from "@angular/core";
import { FormControl, NG_VALIDATORS } from "@angular/forms";
import { EmailBlackList12Service } from "../classes/email-black-list12-service";

// use this with "useValue"
function tempFunction01(c:FormControl) {
    console.log('tempFunction01 ', c.value);
    if(c.value === 'abc') { return {error:'dont use abc, idiot'} } 
    else { return null; }
}

function jingChak03(blacklist12:EmailBlackList12Service) {
    // return (c: FormControl) => {
    //     let isInvalid = blacklist12?.isInvalidEmail(c.value);
    //     return isInvalid ? { validateEmail: 'poyindi' } : null
    // };
    return (c: FormControl) => {
        return blacklist12?.isInvalidEmail(c.value) ? { validateEmail: 'poyindi povoi' } : null;        
    };
}

const jingChak04 = function(blacklist12) {
    return (c: FormControl) => {
        return blacklist12?.isInvalidEmail(c.value) ? { validateEmail: 'balsinda badcow' } : null ;
    };
}

const fn1 = jingChak03;
const fn2 = (blacklist12) => jingChak04(blacklist12);
@Directive({
    selector: '[validateEmail14]',
    providers: [
        {
            provide: NG_VALIDATORS,            
            useFactory: fn1,                                    // either use "useFactory"  (OR)    "useValue"
            deps: [EmailBlackList12Service],            
            // useValue: tempFunction01,
            multi: true
        }
    ]
})
export class EmailValidator14 { }