import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceCallsRoutingModule } from './service-calls-routing.module';
import { HomeScComponent } from './components/home-sc/home-sc.component';
import { Video11Component } from './components/video11/video11.component';
import { VideoStreamingService } from './services/video-streaming.service';
import { SimpleExpressComponent } from './components/simple-express/simple-express.component';
import { SimpleExpressService } from './services/simple-express.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Soap14Component } from './components/soap14/soap14.component';


@NgModule({
  declarations: [
    HomeScComponent,
    Video11Component,
    SimpleExpressComponent,
    Soap14Component
  ],
  imports: [
    CommonModule,
    ServiceCallsRoutingModule,
    FlexLayoutModule
  ],
  providers: [
    VideoStreamingService,
    SimpleExpressService
  ]
})
export class ServiceCallsModule { }
