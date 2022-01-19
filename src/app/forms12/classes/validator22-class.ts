import { AbstractControl, ValidationErrors } from "@angular/forms";
import { of } from "rxjs";

export class Validator22Class {
    
    someFunction() {
        console.log("jing C");
    };

    // I had to make this static function... because custom-validator13 component needs to access this function...
    // now how can I access a function of a class without creating a object of that class...
    // thats why I made this static function... so that this function gets attached to class and not any object
    static validate22(control: AbstractControl): ValidationErrors|null {
        if(control) {
            if(control.value === 'gopal@gmail') {
                return of(null);
            } else {
                return {checkFailed:true};
            }
        } else {
            return {checkFailed:true};
        }
    }
}