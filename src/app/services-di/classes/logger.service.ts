// we know how to inject service into component...
// now, we will see how to inject service into another service...

import { Injectable } from "@angular/core";



// technically, we dont need to add @Injectable() decorator... but still we add 
    // bcoz, CONSISTENCY... simply, user will understand that all services will have @Injectable() decorator

@Injectable()

export class LoggerService {

    constructor() {}

    log (message: any) {
        console.log(message);
    }

}