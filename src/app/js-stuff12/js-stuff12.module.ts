import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsStuff12RoutingModule } from './js-stuff12-routing.module';
import { JsHome12Component } from './components/js-home12/js-home12.component';
import { CallBindApplyComponent } from './components/call-bind-apply/call-bind-apply.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { Inheritance12Component } from './components/inheritance12/inheritance12.component';


@NgModule({
  declarations: [
    JsHome12Component,
    CallBindApplyComponent,
    Inheritance12Component
  ],
  imports: [
    CommonModule,
    JsStuff12RoutingModule,
    FlexLayoutModule,
    MatButtonModule
  ]
})
export class JsStuff12Module { }
