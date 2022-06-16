import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsStuff12RoutingModule } from './js-stuff12-routing.module';
import { JsHome12Component } from './components/js-home12/js-home12.component';
import { CallBindApplyComponent } from './components/call-bind-apply/call-bind-apply.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { Inheritance12Component } from './components/inheritance12/inheritance12.component';
import { Debounce13Component } from './components/debounce13/debounce13.component';
import { Cricket23Component } from './components/cricket23/cricket23.component';
import { Football23Component } from './components/football23/football23.component';
import { FormsModule } from '@angular/forms';
import { Promise44Component } from './components/promise44/promise44.component';
import { JsStuff12Service } from './services/js-stuff12.service';
import { Console23Component } from './components/console23/console23.component';
import { Functions12Component } from './components/functions12/functions12.component';
import { Common23Module } from '../common23/common23.module';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { RandomJsComponent } from './components/random-js/random-js.component';
import { Callback22Component } from './components/callback22/callback22.component';



@NgModule({
  declarations: [
    JsHome12Component,
    CallBindApplyComponent,
    Inheritance12Component,
    Debounce13Component,
    Cricket23Component,
    Football23Component,
    Promise44Component,
    Console23Component,
    Functions12Component,
    TwoWayBindingComponent,
    RandomJsComponent,
    Callback22Component    
  ],
  imports: [
    CommonModule,
    Common23Module,
    JsStuff12RoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [
    JsStuff12Service
  ]
})
export class JsStuff12Module { }
