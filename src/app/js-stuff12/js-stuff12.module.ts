import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsStuff12RoutingModule } from './js-stuff12-routing.module';
import { JsHome12Component } from './components/js-home12/js-home12.component';
import { CallBindApplyComponent } from './components/call-bind-apply/call-bind-apply.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';

import { Debounce13Component } from './components/debounce13/debounce13.component';
import { Cricket23Component } from './components/cricket23/cricket23.component';

import { FormsModule } from '@angular/forms';

import { JsStuff12Service } from './services/js-stuff12.service';


import { Common23Module } from '../common23/common23.module';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { RandomJsComponent } from './components/random-js/random-js.component';
import { Callback22Component } from './components/callback22/callback22.component';


import { Bubble23Component } from './components/bubble23/bubble23.component';



@NgModule({
  declarations: [
    JsHome12Component,
    CallBindApplyComponent,
    
    Debounce13Component,
    Cricket23Component,
    

    
    TwoWayBindingComponent,
    RandomJsComponent,
    Callback22Component,
    

    Bubble23Component    
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
