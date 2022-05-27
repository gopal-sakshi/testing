import { Injectable } from "@angular/core";

/*** This service is injected @ component level
 * each component gets its own instance of this service  
 */
@Injectable()
export class Serv121 {

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