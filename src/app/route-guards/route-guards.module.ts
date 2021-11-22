import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteGuardsRoutingModule } from './route-guards-routing.module';
import { Activate23Component } from './activate23/activate23.component';


@NgModule({
  declarations: [
    Activate23Component
  ],
  imports: [
    CommonModule,
    RouteGuardsRoutingModule
  ]
})
export class RouteGuardsModule { }
