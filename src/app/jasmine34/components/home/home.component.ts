import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs";

import { map } from "rxjs/operators";
import { Course } from '../../model/course';
import { CoursesService } from '../../services/courses.service';
import { sortCoursesBySeqNo } from './sort-course-by-seq';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  beginnerCourses$: Observable<Course[]>;
  advancedCourses$: Observable<Course[]>;

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.reloadCourses();
  }


  reloadCourses() {

    const courses$ = this.coursesService.findAllCourses();
    this.beginnerCourses$ = this.filterByCategory(courses$, 'BEGINNER');
    this.advancedCourses$ = this.filterByCategory(courses$, 'ADVANCED');
  }

  filterByCategory(courses$: Observable<Course[]>, category: string) {
    return courses$.pipe(
      map(courses => courses.filter(course => course.category === category).sort(sortCoursesBySeqNo))
    );
  }

}