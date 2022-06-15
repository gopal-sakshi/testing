import { Inject24Sub } from "./inject24-sub.class";

// NOTICE there is no Injectable() decorator here... 
    // because we manually injected this Inject24 class/service
    // ofcourse, Inject24Sub ----> we injected the norwal way... so, it must have @Injectable() decorator
export class Inject24 {

    constructor(private inject24:Inject24Sub) { }

    // this returns some hard-coded names (but from within class)
    getNames() {
        return ['Benz', 'Vini', 'Rodrygo'];
    }

    getSubDepNames() {
        return this.inject24.getNames24Sub();
    }

}