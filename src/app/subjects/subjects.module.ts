import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject23Component } from './components/subject23/subject23.component';
import { SubjectsRoutingModule } from './subjects-routing.module';
import { Observable1Component } from './components/observable1/observable1.component';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { Observable2Component } from './components/observable2/observable2.component'
import { FakeJsonStats } from './services/fake-json-stats';
import { HomeSubjectsComponent } from './components/home-subjects/home-subjects.component';
import { MatButtonModule } from '@angular/material/button';
import { SwitchMapComponent } from './components/switch-map/switch-map.component';
import { RxJsService } from './services/rx-js-service';


@NgModule({
  declarations: [
    Subject23Component,
    Observable1Component,
    Observable2Component,
    HomeSubjectsComponent,
    SwitchMapComponent
  ],
  imports: [
    CommonModule,
    SubjectsRoutingModule,
    RouterModule,
    FlexLayoutModule,
    MatButtonModule
  ],
  providers: [
    FakeJsonStats,
    RxJsService
  ]
})
export class SubjectsModule { }
