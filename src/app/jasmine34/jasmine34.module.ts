import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Test12Component } from './components/test12/test12.component';
import { CoursesCardListComponent } from './components/courses-card-list/courses-card-list.component';
import { CourseDialogComponent } from './components/course-dialog/course-dialog.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { CoursesService } from './services/courses.service';
import { CourseComponent } from './components/course/course.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CourseResolver } from './services/course.resolver';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';


const routes:Routes = [ 
  { path: '', component: HomeComponent },
  { path: 'courses/:id', component: CourseComponent, resolve: { course: CourseResolver }}
]

@NgModule({
  declarations: [
    HomeComponent,
    Test12Component,
    CoursesCardListComponent,
    CourseDialogComponent,
    CourseComponent
  ],
  imports: [
    CommonModule,   // contains directives like ngIf, ngFor

    RouterModule.forChild(routes),

    // // Material Modules
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatNativeDateModule,

    // // MatMenuModule,
    // MatButtonModule,
    // MatToolbarModule,
    // MatIconModule,
    // MatCardModule,
    // MatTabsModule,
    // MatSidenavModule,
    // // MatListModule,
    // MatInputModule,
    // MatTableModule,
    // MatPaginatorModule,
    // MatSortModule,
    // MatProgressSpinnerModule,
    // MatDialogModule,
    // MatSelectModule,
    // MatDatepickerModule,
    // // MatMomentDateModule,
  ],
  providers: [
    CoursesService,
    CourseResolver
  ]
})
export class Jasmine34Module { }
