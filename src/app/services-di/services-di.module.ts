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
import { factoryFunction, factoryFunctionUseValue, someClassTokenByInjectionToken, someStringTokenByInjectionToken } from './types/tokens';
import { TokenTypesComponent } from './components/token-types/token-types.component';
import { ClassManuallyInjected } from './classes/class-manually-injected';
import { ForwardRefComponent } from './components/forward-ref/forward-ref.component';
import { ForRefChild1Component } from './components/for-ref-child1/for-ref-child1.component';
import { ForwardRefService } from './services/forward-ref.service';
import { Service11Component } from './components/service11/service11.component';
import { Service12Component } from './components/service12/service12.component';
import { Serv144 } from './services/serv144.service';
import { Inject23Component } from './components/inject23/inject23.component';
import { Inject24Component } from './components/inject24/inject24.component';
import { Inject24 } from './classes/inject24.class';
import { Inject24Sub } from './classes/inject24-sub.class';
import { Inject25Component } from './components/inject25/inject25.component';
import { Inject25A } from './services/inject25a.service';
import { Inject25B } from './services/inject25b.service';
import { Inject26Component } from './components/inject26/inject26.component';
import { Inject26AService } from './services/inject26a.service';
import { Inject26BService } from './services/inject26b.service';


function usingFunction456() {
  return true;
}

/* 
  
  Read this link
  - How to write our own provider?
  - https://blog.angular-university.io/angular-dependency-injection/

  this factory function (inject24Factory()) -------> returns Inject24 class

*/
function inject24Factory(inject24SubInstance):Inject24 {
  return new Inject24(inject24SubInstance)
}

@NgModule({
  declarations: [
    ProductDiComponent,
    ProductNoDiComponent,
    HomeDiComponent,
    ProductDiInjectComponent,
    TokenTypesComponent,
    ForwardRefComponent,
    ForRefChild1Component,
    Service11Component,
    Service12Component,
    Inject23Component,
    Inject24Component,
    Inject25Component,
    Inject26Component
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
    { provide: 'someStringToken', useValue: 'GopALLLLLLLLLLL' },
    { provide: 'function456', useValue: usingFunction456, multi:true }, 
                // earlier useValue:'GopALLLLLLL' ------> a string
                // now useValue: usingFunction456 --------> a function... can we use either string (or) function with useValue ???
    { provide: someStringTokenByInjectionToken, useValue: 'Sakshii' },
    { provide: 'myFunction', useFactory: factoryFunction,
      deps: [someStringTokenByInjectionToken] },
    { provide: 'myFunctionUseValue', useValue: factoryFunctionUseValue('Sakshi')},
    //{ provide: 'bhale bhale', useClass:ClassManuallyInjected},
    { provide: someClassTokenByInjectionToken, useClass:ClassManuallyInjected},
    ForwardRefService,
    Serv144,

    /*************************************    inject23 component *************************************/
    // { provide: 'GopAL23', useValue: {name: 'gopal2323', age: 32} },
    { provide: 'GopAL23', useValue: 'plain string' },
    // { provide: 'GopAL23', useValue: {name: 'gopal2323', age: '32'} },   // this throws error... because GopAL23 expects an object with
                                                                          // dataTypes - string & number
                                                                          // but we provided - string & string

                                                                          // BUT FOR SOME REASON... NO ERROR THROWN
                                                                          // may be, during build --> error will be thrown, but not in dev
                                                                          // because build errors happened in assistant portal kalgudi
                                                                          // sunnith, product sku select component
                                          // @Inject(MAT_DIALOG_DATA) protected data23: { initialSearchWord: string }
                                          // here, data23 is supposed to be an object - with single key = initialSearchWord

    // { provide: 'SakShi23', useValue: 24 },
    { provide: 'SakShi23', useValue: 'I can give string instead of number 24' },
    // { provide: 'SakShi23', useValue: { info: 'me giving obj instead of string or number', club: 'Real Madrid'} }
    /*************************************    inject23 component *************************************/

    /********************************** inject24 component *******************************************/
    
    {
      provide: 'someInjectionToken24',
      useFactory: inject24Factory,
      deps: [Inject24Sub]      
    },
    Inject25A,
    {
      provide: Inject25B,
      useClass: Inject25B
    },
    Inject26AService, Inject26BService

    /********************************** inject24 component *******************************************/
  ]
  /*
   multi:true that the provider is a multi provider. 
   with multi providers, we can provide multiple values for a single token in DI.
   */
})
export class ServicesDIModule { }
