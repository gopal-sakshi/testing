import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Random12RoutingModule } from './random12-routing.module';

import { HomeRandomComponent } from './components/home-random/home-random.component';
import { Cors23Component } from './components/cors23/cors23.component';


@NgModule({
  declarations: [
    Cors23Component,
    HomeRandomComponent
  ],
  imports: [
    CommonModule,
    Random12RoutingModule
  ]
})
export class Random12Module { }
