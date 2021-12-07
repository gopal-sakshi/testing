import { InjectionToken } from "@angular/core";

export const someStringTokenByInjectionToken = new InjectionToken<string>('');

// Object.freeze() = object properties can no longer be modified...
export const SOME_CONFIG = Object.freeze({  
    someURL: 'https://en.wikipedia.org/wiki/Elephant',
    IsDevleomentMode: true
});

export const doubleFunction = function (count:number) { console.log("doubleFunction says hello ", count*2); }
export const thriceFunction = function (count:number) { console.log("'thriceFunction says hello ", count*3); }

//export const factoryFunction = function (someStringTokenByInjectionToken, )

