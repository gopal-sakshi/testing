import { Injectable } from "@angular/core";


@Injectable()
export class ClassManuallyInjected {

    constructor() {}
    public someMethod1() {
        console.log("inside someMethod1");
    }
    public someMethod2() {
        console.log("inside someMethod2");
    }
}
