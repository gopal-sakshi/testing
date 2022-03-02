import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeServerComponent } from './components/home-server/home-server.component';
import { ServiceCallsComponent } from './components/service-calls/service-calls.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { ServiceCallService } from './services/service-call.service';

const serverlessRoutes:Routes = [
  {
    path: '',
    component: HomeServerComponent
  }
]

@NgModule({
  declarations: [
    ServiceCallsComponent,
    HomeServerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(serverlessRoutes),
    FlexLayoutModule,
    MatButtonModule
  ],
  providers: [
    ServiceCallService
  ]
})
export class Serverless123Module { }
