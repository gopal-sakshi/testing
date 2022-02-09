import { Injectable } from "@angular/core";
import { BaseClass12 } from "src/app/classes/base-class12";

@Injectable({
    providedIn: 'root'
})
export class InheritedClass12 extends BaseClass12 {
    
    constructor() {
        super();
    }

    printName() {
        console.log('method overriding in inherited class');
        console.log('en peru ',this.name);
    }
}