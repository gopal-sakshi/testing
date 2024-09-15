import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";

@Injectable({
    providedIn: 'root'
})
export class CalculatorService {

    constructor(private loggerService: LoggerService) { }
    
    add(a,b) { 
        // commenting this line ==> Expected spy log to have been called once. It was called 0 times
        this.loggerService.log('aa vacha'); 
        return a+b; 
    }

    // modify it to a*b and do ng test... ERROR: expected -1, got 12 (for 3, 4 as inputs)
    subtract(a,b) { return a-b; }           
}