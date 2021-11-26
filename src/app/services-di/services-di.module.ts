import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesDIRoutingModule } from './services-di-routing.module';
import { ProductDiComponent } from './components/product-di/product-di.component';
import { ProductNoDiComponent } from './components/product-no-di/product-no-di.component';
import { HomeDiComponent } from './components/home-di/home-di.component';
import { FlexModule } from '@angular/flex-layout';
import { ProductService } from './classes/product.service';


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
  ],
  providers: [
    ProductService                        // ProductService is registered with Injector_of_ServicesDIModule
                                            // now this ProductService is available across all the components of this module
                                            // remember that ServicesDIModule has an injector of its own
  ]
})
export class ServicesDIModule { }
