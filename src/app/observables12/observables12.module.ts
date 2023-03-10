import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeObsComponent } from './components/home-obs/home-obs.component';
import { Observable1Component } from './components/observable1/observable1.component';
import { Observable2Component } from './components/observable2/observable2.component';



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
import { SwitchMap22Component } from './components/switch-map22/switch-map22.component';
import { SwitchMap22Service } from './services/switch-map-22.service';

const routes:Routes = [
  { path: '',  component: HomeObsComponent },  
  { path: 'observable1',  component: Observable1Component }
]

@NgModule({
  declarations: [
    HomeObsComponent,
    Observable1Component,
    Observable2Component,
    SwitchMapComponent,
    MergeComponent,
    FutDbComponent,
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
