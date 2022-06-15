import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { Observable23Component } from './components/observable23/observable23.component';
import { Subjects41Component } from './components/subjects41/subjects41.component';
import { Subjects42Component } from './components/subjects42/subjects42.component';
import { Subjects43Component } from './components/subjects43/subjects43.component';
import { Subjects45Component } from './components/subjects45/subjects45.component';
import { Subjects46Component } from './components/subjects46/subjects46.component';
import { Subjects47Component } from './components/subjects47/subjects47.component';
import { Observable41Component } from './components/observable41/observable41.component';
import { InfiniteScrollerComponent } from './components/infinite-scroller/infinite-scroller.component';
import { HackerNewsService } from './services/infinite-scroll.service';


@NgModule({
  declarations: [
    Observable1Component,
    Observable2Component,
    HomeSubjectsComponent,
    SwitchMapComponent,
    Observable23Component,
    Subjects41Component,
    Subjects42Component,
    Subjects43Component,
    Subjects45Component,
    Subjects46Component,
    Subjects47Component,
    Observable41Component,
    InfiniteScrollerComponent
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
    RxJsService,
    HackerNewsService
  ]
})
export class SubjectsModule { }
