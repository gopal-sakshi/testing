import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifeCycleHooks11RoutingModule } from './life-cycle-hooks11-routing.module';
import { HomeLifecycleHooksComponent } from './components/home-lifecycle-hooks/home-lifecycle-hooks.component';
import { NgDoCheck12Component } from './components/ng-do-check12/ng-do-check12.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChangeDetection11Component } from './components/change-detection11/change-detection11.component';
import { Zone12Component } from './components/zone12/zone12.component';
import { Zone11OutsideAngularComponent } from './components/zone11-outside-angular/zone11-outside-angular.component';


@NgModule({
  declarations: [
    HomeLifecycleHooksComponent,
    NgDoCheck12Component,
    ChangeDetection11Component,
    Zone12Component,
    Zone11OutsideAngularComponent
  ],
  imports: [
    CommonModule,
    LifeCycleHooks11RoutingModule,
    FlexLayoutModule
  ]
})
export class LifeCycleHooks11Module { }
