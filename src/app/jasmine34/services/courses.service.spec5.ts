import { TestBed } from "@angular/core/testing";
import { CoursesService } from "./courses.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { COURSES } from "server/db-data";
import { Course } from "../model/course";
import { HttpErrorResponse } from "@angular/common/http";

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

        const req = httpTestingController.expectOne('/api/courses');
        expect(req.request.method).toEqual("GET");        
        req.flush({payload: Object.values(COURSES)});        
    });

    it('should_find_course_by_id', () => {
        coursesService.findCourseById(12).subscribe(course => {
            expect(course).toBeTruthy();        
            expect(course.id).toBe(12);
        });
        const req = httpTestingController.expectOne('/api/courses/12');
        expect(req.request.method).toEqual("GET");
        req.flush(COURSES[12]);        
    });

    it('should_save_course_data', () => {

        const changes:Partial<Course> = { titles: { description: 'testing modified be' }, category: 'BEGINNER ++' };

        coursesService.saveCourse(12, changes).subscribe(course => {
            expect(course.titles.description).toEqual('testing modified be');            
        });
        const req = httpTestingController.expectOne('/api/courses/12');
        expect(req.request.method).toEqual("PUT");        
        req.flush({...COURSES[12], ...changes});
    });

    it('should_not_save_course_data_and_give_error', () => {
        const changes:Partial<Course> = { titles: { description: 'testing modified be' }};
        coursesService.saveCourse(12, changes).subscribe(() => {
            // this should not come here... because, we want saveCourse should fail...
            fail('control eedaki raakakudadu kada bhayyaa... failure case lo');
        }, (err:HttpErrorResponse) => { 
            expect(err.status).toBe(500);
        });
        const req = httpTestingController.expectOne('/api/courses/12');
        expect(req.request.method).toEqual('PUT');
        // req.flush({...COURSES[12], ...changes});         // this is for successful save operation
        req.flush('save course fail avvali...', { status: 500, statusText: 'Internal server error'});
    })

    afterEach(() => {
        console.log('one spec finished');
        httpTestingController.verify();
    })
})