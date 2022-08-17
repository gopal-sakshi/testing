

import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Lesson} from "../model/lesson";
import {Course} from '../model/course';


@Injectable()
export class CoursesService {

    constructor(private http:HttpClient) {}

    findCourseById(courseId: number): Observable<Course> {
        return this.http.get<Course>(`/api/courses/${courseId}`);
    }

    findAllCourses(): Observable<Course[]> {
        
        // even though I added a service call... the test still succeeded... WHY is it ??
            // because we used httpTestingController().verify() ---> only the http requests mentioned in expect API should be made
            // any other http requests made must throw error
        // this.http.get('www.google.com').subscribe();
        
        return this.http.get('/api/courses')
            .pipe(
                map(res => res['payload'])
            );
    }

    // Partial ===> its like a subset of Course object... contains only those properties we want to modify inside a CourseObject
    saveCourse(courseId:number, changes: Partial<Course>): Observable<Course> {
        return this.http.put<Course>(`/api/courses/${courseId}`, changes);
    }

    findLessons(
        courseId:number, filter = '', sortOrder = 'asc',
        pageNumber = 0, pageSize = 3):  Observable<Lesson[]> {

        return this.http.get('/api/lessons', {
            params: new HttpParams()
                .set('courseId', courseId.toString())
                .set('filter', filter)
                .set('sortOrder', sortOrder)
                .set('pageNumber', pageNumber.toString())
                .set('pageSize', pageSize.toString())
        }).pipe(
            map(res =>  res["payload"])
        );
    }

}
