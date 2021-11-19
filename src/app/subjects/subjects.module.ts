import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject23Component } from './components/subject23/subject23.component';
import { SubjectsRoutingModule } from './subjects-routing.module';
import { Observable1Component } from './components/observable1/observable1.component';
import { RouterModule } from '@angular/router';
import { AaSubjectsComponent } from './components/aa-subjects/aa-subjects.component';
import { FlexLayoutModule } from '@angular/flex-layout'


@NgModule({
  declarations: [
    Subject23Component,
    Observable1Component,
    AaSubjectsComponent
  ],
  imports: [
    CommonModule,
    SubjectsRoutingModule,
    RouterModule,
    FlexLayoutModule
  ]
})
export class SubjectsModule { }
