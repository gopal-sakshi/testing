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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FutDbComponent } from './components/fut-db/fut-db.component';
import { FutDbService } from './services/fut-db.service';
import { Observable71Component } from './components/observable71/observable71.component';
import { Observable72Component } from './components/observable72/observable72.component';
import { SwitchMap22Component } from './components/switch-map22/switch-map22.component';
import { SwitchMap22Service } from './services/switch-map-22.service';

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
    FutDbComponent,
    Observable71Component,
    Observable72Component,
    SwitchMap22Component
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    RxJsService,
    FakeJsonStats,
    MergeObservableService,
    FutDbService,
    SwitchMap22Service
  ]
})
export class Observables12Module { }
