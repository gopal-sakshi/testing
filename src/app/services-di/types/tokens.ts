import { InjectionToken } from "@angular/core";
import { ClassManuallyInjected } from "../classes/class-manually-injected";

export const someStringTokenByInjectionToken = new InjectionToken<string>('');

export const someClassTokenByInjectionToken = new InjectionToken<ClassManuallyInjected>('bhale_bhale');

// Object.freeze() = object properties can no longer be modified...
export const SOME_CONFIG = Object.freeze({
    someURL: 'https://en.wikipedia.org/wiki/Elephant',
    IsDevleomentMode: true
});


export function factoryFunctionUseValue(someArgument: string) {
    return `${Date.now()}___${someArgument}`
}

export function factoryFunction(p1: string, p2:string = 'p2_Default') {
    return `${Date.now()}___${p1}__${p2}_factFn`
}


