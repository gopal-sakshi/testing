// import 'jasmine'
import { TestBed } from "@angular/core/testing";
import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe('CalServiceTest', () => {
    
    let calcInstance:CalculatorService;
    let loggerSpy:any; 
    beforeEach(() => { 
        loggerSpy = jasmine.createSpyObj('LoggerService', ["log"]);
        
        // APPROACH I ====> using new keyword for getting dependencies... 
        // calcInstance = new CalculatorService(loggerSpy);
        
        // APPROACH II ======> we use dependency injection
            // this method takes 'a single configuration object' as parameter... this parameter is similar to NgModule
        TestBed.configureTestingModule({
            providers: [
                CalculatorService, 
                { provide: LoggerService, useValue: loggerSpy }             // WORKING...
                // { provide: LoggerService, useClass: loggerSpy }          // I used this... it failed...
            ]
        });
        calcInstance = TestBed.get(CalculatorService)
        
    });

    it('should_add_numbers_babai', () => {
        const result = calcInstance.add(3, 4);
        expect(result).toBe(7);
        expect(loggerSpy.log).toHaveBeenCalledTimes(1)

    });

    it('should_subtract_numbers_babai', () => {
        const result = calcInstance.subtract(3, 4);
        expect(result).toBe(-1, "pappa ayyavu le");
    })
})