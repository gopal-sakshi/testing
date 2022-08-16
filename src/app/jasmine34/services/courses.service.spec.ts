import { TestBed } from "@angular/core/testing";
import { CoursesService } from "./courses.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

describe('CoursesService', () => {

    let coursesService:CoursesService;
    let httpTestingController: HttpTestingController


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

    it('should_retrieve_all_courses', () => { 

        coursesService.findAllCourses().subscribe(courses => {
            // to be truthy ===> it must not be undefined (or) null
            expect(courses).toBeTruthy('No courses returned');
            expect(courses.length).toBe(12, 'total is not 12 courses');
            const course = courses.find(course => course.id == 12);
            expect(course.titles.description).toBe("Angular Testing Course");
        });

        // we want to ensure that httpCall is made only once... and that API call hits the given endpoint
        const req = httpTestingController.expectOne('/api/courses');
        expect(req.request.method).toEqual("GET");
    })
})