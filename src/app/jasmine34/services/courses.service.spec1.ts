import { TestBed } from "@angular/core/testing";
import { CoursesService } from "./courses.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

describe('CoursesService', () => {

    let coursesService:CoursesService;
    let httpTestingController: HttpTestingController


    // WITH THIS =======> our test setup is ready... 
        // now we need to run the test spec
        // later we will use assertions...
    beforeEach(() => {
        TestBed.configureTestingModule({
            // the HttpClientTestingModule ===> part of angular/common...
                // this module has a mock HTTP service... that mimics the real Http Service... 
                // that mock HTTP service is what is going to get injected here in our constructor
                // the mock HTTP service returns mock test data instead of actual data
            imports: [HttpClientTestingModule],
            providers: [
                CoursesService
            ]
        });
        coursesService = TestBed.get(CoursesService);
        httpTestingController = TestBed.get(HttpTestingController);
    })

    // it('should_retrieve_all_courses', () => { })
})