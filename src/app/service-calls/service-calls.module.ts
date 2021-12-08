import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceCallsRoutingModule } from './service-calls-routing.module';
import { HomeScComponent } from './components/home-sc/home-sc.component';


@NgModule({
  declarations: [
    HomeScComponent
  ],
  imports: [
    CommonModule,
    ServiceCallsRoutingModule
  ]
})
export class ServiceCallsModule { }
