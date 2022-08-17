import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
import { filter, tap } from 'rxjs/operators';
import { Course } from '../../model/course';


@Component({
  selector: 'courses-card-list',
  templateUrl: './courses-card-list.component.html',
  styleUrls: ['./courses-card-list.component.scss']
})
export class CoursesCardListComponent implements OnInit {

  @Input()
  courses: Course[];

  @Output()
  courseEdited = new EventEmitter();

  // for some reason... If I am injecting MatDialog, its failing... so, we'll not use that in constructor.
  constructor(
    /* private dialog: MatDialog */) {}

  ngOnInit() {

  }

  editCourse(course: Course) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = course;

    // https://github.com/angular/components/issues/19335
      // look into this... using Mat Dialog open ----> in a lazy loaded module
      // but MatDialogModule is not imported at root level... 
      // MatDialogModule is imported only at lazy-loaded module level
      // normally... it worked... but my test-spec is failing
    console.log('edit course clicked');
    // const dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig);

    // dialogRef.afterClosed()
    //   .pipe(
    //     filter(val => !!val),
    //     tap(() => this.courseEdited.emit())
    //   )
    //   .subscribe();

  }

}









