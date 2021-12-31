import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Common23RoutingModule } from './common23-routing.module';
import { Header12Component } from './components/header12/header12.component';
import { Footer12Component } from './components/footer12/footer12.component';


@NgModule({
  declarations: [
    Header12Component,
    Footer12Component
  ],
  imports: [
    CommonModule,
    Common23RoutingModule
  ],
  exports: [
    Header12Component,
    Footer12Component
  ]
})
export class Common23Module { }
