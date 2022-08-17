import { TestBed } from "@angular/core/testing";
import { CoursesService } from "./courses.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { COURSES } from "server/db-data";

describe('CoursesService', () => {

    let coursesService:CoursesService;
    let httpTestingController: HttpTestingController


    beforeEach(() => {
        TestBed.configureTestingModule({            
            imports: [HttpClientTestingModule],
            providers: [
                CoursesService
            ]
        });
        coursesService = TestBed.get(CoursesService);
        httpTestingController = TestBed.get(HttpTestingController);
    });

    it('should_retrieve_all_courses', () => { 

        coursesService.findAllCourses().subscribe(courses => {            
            expect(courses).toBeTruthy('No courses returned');
            expect(courses.length).toBe(12, 'total is not 12 courses');
            const course = courses.find(course => course.id == 12);
            expect(course.titles.description).toBe("Angular Testing Course");
        });

        // we want to ensure that httpCall is made only once... and that API call hits the given endpoint
        const req = httpTestingController.expectOne('/api/courses');
        expect(req.request.method).toEqual("GET");        
        req.flush({payload: Object.values(COURSES)});

        // plus, we also want to ensure that no other http calls is being made...
            // verify() method is used == ensure that only the http request specified ---> in httpTestingController's expect() APIs are made
            // and ensure that no other API calls are being made...
            // anyway, we moved verify() call into afterEach() block
        httpTestingController.verify()
    });

    it('should_find_course_by_id', () => {
        coursesService.findCourseById(12).subscribe(course => {
            expect(course).toBeTruthy();
            expect(course.id).toBe(12);
        });
        const req = httpTestingController.expectOne('/api/courses/12');
        expect(req.request.method).toEqual("GET");
        req.flush(COURSES[12]);
        // httpTestingController.verify();
    });

    afterEach(() => {
        console.log('one spec finished');
        httpTestingController.verify();
    })
})