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



@NgModule({
  declarations: [
    JsHome12Component,
    CallBindApplyComponent,
    Inheritance12Component,
    Debounce13Component,
    Cricket23Component,
    Football23Component    
  ],
  imports: [
    CommonModule,
    JsStuff12RoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    FormsModule
  ]
})
export class JsStuff12Module { }
