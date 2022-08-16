import 'jasmine'
import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe('CalServiceTest', () => {

  
  it('should_add_numbers_babai', () => {
    
    // APPROACH I = providing actual implementation of loggerService... then spying on it
    // APPROACH II = provide a complete fake version of loggerService... without creating an actual logger instance
        // When we are implementing unitTest (say for CalculatorService) ---> 
        // the only actual instance of a service that should be present in the test is the calculator service itself
        // any other dependency of the calculator service = should be mocked (or) replaced with fake test implementation
        // here loggerService = simple... 
        // but in real-world cases = our dependencies themselves have many other dependencies (like connect to database)
        // we wont provide actual implementation of all those dependent services (like logger service)
        // all we want = focus on functionality of the service being unit tested (here it is calculator.service.ts) and nothing more
        // this is why its called unit-test... we are only testing only a small unit of our whole application
        // This ensures that calculator service unit test will fail ===> ONLY due to problems in calculator service class & nothing more

    
    
    // createSpyObj ===> this method needs name of fake Service... and array of methods containting our fake logger implementation
        // we also dont need to spy on logger object ===> because logger object will already be spied upon
        // our logger.log() doesnt return a value... but if it returns a value ---> we will see
    const logger = jasmine.createSpyObj('LoggerService', ["log"])    


    // this throws error... because our fake LoggerService ---> needs to have log() method
    // const logger = jasmine.createSpyObj('LoggerService')



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