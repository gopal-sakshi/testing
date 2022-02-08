import { InjectionToken } from "@angular/core";
import { ClassManuallyInjected } from "../classes/class-manually-injected";

export const someStringTokenByInjectionToken = new InjectionToken<string>('');

export const someClassTokenByInjectionToken = new InjectionToken<ClassManuallyInjected>('bhale bhale');

// Object.freeze() = object properties can no longer be modified...
export const SOME_CONFIG = Object.freeze({
    someURL: 'https://en.wikipedia.org/wiki/Elephant',
    IsDevleomentMode: true
});

export const doubleFunction = function (name:string) {
  console.log("doubleFunction says hello ", name + ' ' + name);
}
export const thriceFunction = function (name:string) {
  console.log("'thriceFunction says hello ", name + ' ' + name + ' ' + name);
}

export function factoryFunctionUseValue (someArgument:string) {
  if(someArgument === 'Sakshi') {
    return doubleFunction(someArgument);
  } else {
    return thriceFunction(someArgument);
  }
}

export function factoryFunction (someArgument:string) {
  if(someArgument === 'Sakshi') {
    return doubleFunction(someArgument);
    //return doubleFunction
  } else {
    return thriceFunction(someArgument);
    //return doubleFunction
  }
}


