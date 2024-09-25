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
import { ForwardRefComponent, Time23Service } from './components/forward-ref/forward-ref.component';
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


/* 
  
  Read this link
  - How to write our own provider?
  - https://blog.angular-university.io/angular-dependency-injection/

  this factory function (inject24Factory()) -------> returns Inject24 class

*/
function inject24Factory(inject24SubInstance): Inject24 {
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
        //ProductService,                       // STEP 01
        // ProductTwiceService,                 // STEP 02
        LoggerService,
        LoggerTwiceService,
        { provide: 'someStringToken', useValue: 'GopALLLLLLLLLLL' },
        { provide: 'function456', useValue: 'useValue_ki_fn()_ivvaddu' },
        { provide: someStringTokenByInjectionToken, useValue: 'Sakshii' },
        { provide: 'myFunctionUseValue', useValue: factoryFunctionUseValue('Sakshi') },


        { provide: 'myFunction', useFactory: factoryFunction, deps: [ someStringTokenByInjectionToken ] },
        { provide: 'bhale_bhale', useClass:ClassManuallyInjected },
        { provide: someClassTokenByInjectionToken, useClass: ClassManuallyInjected },
        ForwardRefService,
        Time23Service,
        Serv144,

        /*************************************    inject23 component *************************************/
        { provide: 'GopAL23', useValue: {name: 'gopal2323', age: 32} },        
        { provide: 'SakShi23', useValue: { info: 'me giving obj instead of string or number', club: 'Real Madrid'} },
        /*************************************    inject23 component *************************************/


        /********************************** inject24 component *******************************************/

        { provide: 'someInjectionToken24', useFactory: inject24Factory, deps: [Inject24Sub] },
        Inject25A,
        { provide: Inject25B, useClass: Inject25B },
        Inject26AService, 
        Inject26BService

        /********************************** inject24 component *******************************************/
    ]
    /* multi:true ===> with multi providers, we can provide multiple values for a single token in DI. */
})
export class ServicesDIModule { }
