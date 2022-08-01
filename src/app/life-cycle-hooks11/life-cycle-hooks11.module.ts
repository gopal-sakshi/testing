import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifeCycleHooks11RoutingModule } from './life-cycle-hooks11-routing.module';
import { HomeLifecycleHooksComponent } from './components/home-lifecycle-hooks/home-lifecycle-hooks.component';
import { NgDoCheck12Component } from './components/ng-do-check12/ng-do-check12.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChangeDetection11Component } from './components/change-detection11/change-detection11.component';
import { Zone12Component } from './components/zone12/zone12.component';
import { Zone11OutsideAngularComponent } from './components/zone11-outside-angular/zone11-outside-angular.component';
import { ChangeDetection12Component } from './components/change-detection12/change-detection12.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatIconModule } from '@angular/material/icon';
import { Change23Component } from './components/change23/change23.component';

@NgModule({
  declarations: [
    HomeLifecycleHooksComponent,
    NgDoCheck12Component,
    ChangeDetection11Component,
    Zone12Component,
    Zone11OutsideAngularComponent,
    ChangeDetection12Component,
    Change23Component
  ],
  imports: [
    CommonModule,
    LifeCycleHooks11RoutingModule,
    FlexLayoutModule,
    MatBottomSheetModule,
    MatIconModule
  ]
})
export class LifeCycleHooks11Module { }
