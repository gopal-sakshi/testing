import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";

@Injectable({
    providedIn: 'root'
})
export class CalculatorService {

    constructor(private loggerService: LoggerService) { }
    
    add(a,b) { 
        this.loggerService.log('aa vacha'); // commenting this line ==> Expected spy log to have been called once. It was called 0 times
        return a+b; 
    }

    subtract(a,b) { return a-b; }           // modify it to a*b and do ng test... then see the error message
                                                // expected -1, got 12 (for 3, 4 as inputs)
}