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
import { AxiosFetchComponent } from './components/axios-fetch/axios-fetch.component';
import { XssAttacks12Component } from './components/xss-attacks12/xss-attacks12.component';
import { HttpClientMockService } from './services/http-mock23.service';


@NgModule({
  declarations: [
    HomeScComponent,
    Video11Component,
    SimpleExpressComponent,
    Soap14Component,
    AxiosFetchComponent,
    XssAttacks12Component
  ],
  imports: [
    CommonModule,
    ServiceCallsRoutingModule,
    FlexLayoutModule
  ],
  providers: [
    VideoStreamingService,
    SimpleExpressService,
    HttpClientMockService
  ]
})
export class ServiceCallsModule { }
