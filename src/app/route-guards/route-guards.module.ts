import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteGuardsRoutingModule } from './route-guards-routing.module';
import { Activate23Component } from './components/activate23/activate23.component';
import { Contact11Component } from './components/contact11/contact11.component';
import { Error11Component } from './components/error11/error11.component';
import { Home11Component } from './components/home11/home11.component';
import { Product11Component } from './components/product11/product11.component';
import { ProductService11 } from './classes/ProductService11';



@NgModule({
  declarations: [
    Activate23Component,
    Home11Component,
    Contact11Component,
    Product11Component,
    Error11Component
  ],
  imports: [
    CommonModule,
    RouteGuardsRoutingModule
  ],
  providers: [
    ProductService11
  ]
})
export class RouteGuardsModule { }
