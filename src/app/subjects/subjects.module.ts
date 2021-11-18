import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject23Component } from './components/subject23/subject23.component';
import { SubjectsRoutingModule } from './subjects-routing.module';
import { Observable1Component } from './components/observable1/observable1.component';



@NgModule({
  declarations: [
    Subject23Component,
    Observable1Component
  ],
  imports: [
    CommonModule,
    SubjectsRoutingModule
  ]
})
export class SubjectsModule { }
