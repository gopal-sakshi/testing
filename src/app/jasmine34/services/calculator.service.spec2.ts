import 'jasmine'
import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe('CalServiceTest', () => {

  
  it('should_add_numbers_babai', () => {
    const logger = new LoggerService();
    // what this spyOn() utitlity deos
        // takes this logger object/instance... and the log method... and replaces it with jingChak23
        // jingChak23 = actually implements/does the same thing as log method... 
            // but in addition, it also keeps track of how many times it was called
    spyOn(logger, 'log', )
    const calcInstance = new CalculatorService(logger);
    const result = calcInstance.add(3,4);  
    expect(result).toBe(7);

    // we expect this method to be called only once... 
    expect(logger.log).toHaveBeenCalledTimes(1)
  
  });

  it('should_subtract_numbers_babai', () => {

    const calcInstance = new CalculatorService(new LoggerService());
    const result = calcInstance.subtract(3,4);    
    expect(result).toBe(-1, "pappa ayyavu le");
  })  
})