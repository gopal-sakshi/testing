import { Injector } from "@angular/core";

export class ForwardRefClass {

    forwardRefInstance:any;

    constructor(protected injector: Injector) {
        this.forwardRefInstance = this.injector.get('GOPAL');
    }

    getPlayers() {
        console.log(this.forwardRefInstance);
        return this.forwardRefInstance.getPlayers();
    }
}