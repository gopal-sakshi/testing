import { Injectable } from "@angular/core";

@Injectable()
export class ClassManuallyInjected {
    param1: string
    constructor() { this.param1 = 'p1'; }
    someMethod1() { return `${this.param1}__method1_${Date.now()}` }
    someMethod2() { return `${this.param1}__method2_${Date.now()}` }
}
