import 'jasmine'

import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe('CalServiceTest', () => {

  // to test add() method of CalculatorService ===> we need an instance of this service
    // CalculatorService = needs loggerService instance...
  it('should_add_numbers_babai', () => {
    const calcInstance = new CalculatorService(new LoggerService());
    const result = calcInstance.add(3,4);

    // test assertion...
    expect(result).toBe(7);   // other methods are toBeLessthan, toBeNull, rejects, resolves, toHaveReturned
    // pending();
  });

  it('should_subtract_numbers_babai', () => {

    const calcInstance = new CalculatorService(new LoggerService());
    const result = calcInstance.subtract(3,4);    
    expect(result).toBe(-1, "pappa ayyavu le");


    // pending();
    // fail();       // to simulate fail scenario... we use fail() utility
                      // like code gives some output which should never happen... then we use fail() utility
  })  
})