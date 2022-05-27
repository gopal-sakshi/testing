import { Injectable } from "@angular/core";

/*** 
 * This service is injected @ module level... 
 * so, all components within the module share same instance of this service 
*/
@Injectable()
export class Serv144 {

    count23:number;

    constructor() { 
        this.count23 = 0;
    }

    changeCount(newValue:number) {
        this.count23 = newValue;
    }

    getCount() {
        return this.count23;
    }
    
}