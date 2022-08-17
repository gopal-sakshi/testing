import { TestBed } from "@angular/core/testing";
import { CoursesService } from "./courses.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { COURSES } from "server/db-data";
import { Course } from "../model/course";

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
            // expect(courses.length).toBe(13, 'total is not 12 courses');
            const course = courses.find(course => course.id == 12);
            expect(course.titles.description).toBe("Angular Testing Course");
        });

        // we want to ensure that httpCall is made only once... and that API call hits the given endpoint
        const req = httpTestingController.expectOne('/api/courses');
        expect(req.request.method).toEqual("GET");        
        req.flush({payload: Object.values(COURSES)});        
    });

    it('should_find_course_by_id', () => {
        coursesService.findCourseById(12).subscribe(course => {
            expect(course).toBeTruthy();
            // expect(course.id).toBe(13);
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
            // expect(course.titles.description).toEqual('testing modified bes');
        });
        const req = httpTestingController.expectOne('/api/courses/12');
        expect(req.request.method).toEqual("PUT");
        
        // here we need to simulate the reponse... what response we would've got if PUT operation succeeded...

        // APPROACH I ---------------------> DONT USE THIS
        // req.flush({
        //     id: 12,
        //     titles: {
        //       description: 'testing modified be',
        //       longDescription: 'In-depth guide to Unit Testing and E2E Testing of Angular Applications'
        //     },
        //     iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-testing-small.png',
        //     category: 'BEGINNER ++',
        //     seqNo: 0,
        //     url: 'angular-testing-course',
        //     lessonsCount: 10,
        // });

        // APPROACH II ----> USE THIS
            // using spread operator... we will include the original COURSES[12] object... 
            // but then, we will overwrite the properties of COURSES[12] using changes object...
            // if you think about it... technically this is what would be send by response had PUT succeeded
        req.flush({...COURSES[12], ...changes});
    })

    afterEach(() => {
        console.log('one spec finished');
        httpTestingController.verify();     // didnt work as expected... unintended http Call made in findAllCourses()
                                                // but all tests show as succedeed
    })
})