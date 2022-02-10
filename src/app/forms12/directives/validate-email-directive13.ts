import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[validateEmail13][ngModel]',
    // providers: [
    //     { provide: NG_VALIDATORS, useValue: validateEmail13, multi: true }
    // ]
})
export class EmailValidator13 { }

/*
    https://blog.thoughtram.io/angular/2015/09/03/forward-references-in-angular-2.html
    https://blog.thoughtram.io/angular/2016/03/14/custom-validators-in-angular-2.html
    https://blog.thoughtram.io/angular2/2015/11/23/multi-providers-in-angular-2.html
    https://blog.thoughtram.io/angular/2015/05/18/dependency-injection-in-angular-2.html

*/