import 'jasmine'
import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe('CalServiceTest', () => {

    // instead of creating initialization logic in each specification... do it here... reusability
        // this function gets executed before each of the specifications
    // beforeEach = called every time before 'it' specification runs...
        // the specification tests are independent of each other... 
        // the calcInstance used in 'add spec' is different to calcInstance used in 'subtract spec'
    let calcInstance:CalculatorService;
    let loggerSpy:any; // we dont annotate with LoggerService, but use 'any'... bcoz Jasmine spyObject can have any methods (or) any properties
    beforeEach(() => { 
        loggerSpy = jasmine.createSpyObj('LoggerService', ["log"]);
        calcInstance = new CalculatorService(loggerSpy);
    })

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