ts-node
- npm package
- typescript execution & REPL for NodeJs

`Structure of each 'test spec'` (or) 'test specification'
a) set up the test_spec                                 // usually done in beforeEach() block
b) perform the opearation that we want to test
c) run a series of assertions

# sample 'test spec'
it('should_add_numbers', () => {

})

Note:
a) we will always test `CalculatorService` in isolation
- assuming that all parts of the application with which the calculatorService interacts ===> works correctly
- that is why we are mocking all the dependencies of the service
- then testing the service in isolation
- thats why its called Unit Test = test only small unit of an application
b) Had we used real LoggerService & not mock LoggerService
    then it becomes `integration testing`
c) Each test suite may contain multiple specs
    those multiple specs (tests) should be isolated from each other
    this is generally done in beforeEach() block where we re-initialize all the variables
    each test/spec is going to get its own testing module, with its own private instance of the calculator
d) Angular tests should use dependency injection as much as possible
e) disable
    adding a x before describe ===> disables entire test suite
    adding a x before it() =======> disables that particular spec
-----------------------------------------------------------------------------------------

# Presentational Components
- These type of components just take input data & display them
- Due to their simplistic nature... many projects just dont test presentational components
- CourseCardListComponent is a presentational Component
    It gets input... 
    it doesnt use any services to retrieve data
    It uses a dialog service... to open a dialog whenever we click view courses
-----------------------------------------------------------------------------------------


# Some Errors
- mat-form-field must contain a MatFormFieldControl
    you imported MatFormFieldModule at my main module, but forgot to add MatInputModule