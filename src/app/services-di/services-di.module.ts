import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesDIRoutingModule } from './services-di-routing.module';
import { ProductDiComponent } from './components/product-di/product-di.component';
import { ProductNoDiComponent } from './components/product-no-di/product-no-di.component';
import { HomeDiComponent } from './components/home-di/home-di.component';
import { FlexModule } from '@angular/flex-layout';
import { ProductService } from './classes/product.service';
import { LoggerService } from './classes/logger.service';
import { ProductDiInjectComponent } from './components/product-di-inject/product-di-inject.component';
import { ProductTwiceService } from './classes/productTwice.service';
import { LoggerTwiceService } from './classes/loggerTwice.service';
import { factoryFunction, factoryFunctionUseValue, someStringTokenByInjectionToken } from './types/tokens';
import { TokenTypesComponent } from './components/token-types/token-types.component';


@NgModule({
  declarations: [
    ProductDiComponent,
    ProductNoDiComponent,
    HomeDiComponent,
    ProductDiInjectComponent,
    TokenTypesComponent
  ],
  imports: [
    CommonModule,
    ServicesDIRoutingModule,
    FlexModule
  ],
  providers: [
    //ProductService,                        // ProductService is registered with Injector_of_ServicesDIModule
                                            // now this ProductService is available across all the components of this module
                                            // remember that ServicesDIModule has an injector of its own

                                            // If ProductService is commented, it means 'ProductService' isnt available at
                                              // module level... but only in the component where its needed...
                                              // See ProductDiComponent.ts (see providers[] array in @Component decorator)

    //ProductTwiceService,
    LoggerService,
    LoggerTwiceService,
    { provide: 'someStringToken', useValue: 'GopAL' },
    { provide: someStringTokenByInjectionToken, useValue: 'Sakshii' },
    { provide: 'myFunction', useFactory: factoryFunction,
      deps: [someStringTokenByInjectionToken] },
    { provide: 'myFunctionUseValue', useValue: factoryFunctionUseValue('Sakshi')}
  ]
})
export class ServicesDIModule { }
