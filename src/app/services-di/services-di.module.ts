import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesDIRoutingModule } from './services-di-routing.module';
import { ProductDiComponent } from './components/product-di/product-di.component';
import { ProductNoDiComponent } from './components/product-no-di/product-no-di.component';
import { HomeDiComponent } from './components/home-di/home-di.component';
import { FlexModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    ProductDiComponent,
    ProductNoDiComponent,
    HomeDiComponent
  ],
  imports: [
    CommonModule,
    ServicesDIRoutingModule,
    FlexModule
  ]
})
export class ServicesDIModule { }
