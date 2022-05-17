import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeObsComponent } from './components/home-obs/home-obs.component';
import { Observable1Component } from './components/observable1/observable1.component';
import { Observable2Component } from './components/observable2/observable2.component';
import { Observable23Component } from './components/observable23/observable23.component';
import { Observable41Component } from './components/observable41/observable41.component';
import { Observable61Component } from './components/observable61/observable61.component';
import { Observable62Component } from './components/observable62/observable62.component';
import { RxJsService } from './services/rx-js-service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FakeJsonStats } from './services/fake-json-stats';
import { SwitchMapComponent } from './components/switch-map/switch-map.component';
import { RouterModule, Routes } from '@angular/router';
import { MergeObservableService } from './services/mergeObs.service';
import { MergeComponent } from './components/merge/merge.component';
import { FormsModule } from '@angular/forms';
import { FutDbComponent } from './components/fut-db/fut-db.component';
import { FutDbService } from './services/fut-db.service';

const routes:Routes = [
  { path: '',  component: HomeObsComponent },
  { path: 'observable23',  component: Observable23Component },
  { path: 'observable1',  component: Observable1Component }
]

@NgModule({
  declarations: [
    HomeObsComponent,
    Observable1Component,
    Observable2Component,
    Observable23Component,
    Observable41Component,
    Observable61Component,
    Observable62Component,
    SwitchMapComponent,
    MergeComponent,
    FutDbComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  providers: [
    RxJsService,
    FakeJsonStats,
    MergeObservableService,
    FutDbService
  ]
})
export class Observables12Module { }
