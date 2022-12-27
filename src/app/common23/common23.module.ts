// MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Common23RoutingModule } from './common23-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';

// COMPONENTS
import { Header12Component } from './components/header12/header12.component';
import { Footer12Component } from './components/footer12/footer12.component';

// PIPES
import { NumberConverterPipe } from './Pipes/num-converter.pipe';
import { JoinArrayPipe } from './Pipes/join-array.pipe';
import { ThreeDecimalsPipe } from './Pipes/threeDecimals.pipe';

// DIRECTIVES
import { RedHighlightDirective } from './directives/highlight-red.directive';
import { BlueHighlightDirective } from './directives/highlight-blue.directive';
import { DelayRenderingDirective } from './directives/delay-rendering.directive';
import { NoPaste23Directive } from './directives/no-paste23.directive';
import { ProcessDecimalDirective } from './directives/processDecimal.directive';
import { NoCopy23Directive } from './directives/no-copy23.directive';

// SERVICES
import { Common23Service } from './services/common23.service';
import { OnReturnDirective } from './directives/enter23.directive';





@NgModule({
  declarations: [
    Header12Component,
    Footer12Component,
    RedHighlightDirective,
    BlueHighlightDirective,
    DelayRenderingDirective,
    NumberConverterPipe,
    NoPaste23Directive,
    NoCopy23Directive,
    ThreeDecimalsPipe,
    ProcessDecimalDirective,
    JoinArrayPipe,
    OnReturnDirective
  ],
  imports: [
    CommonModule,
    Common23RoutingModule,
    FlexLayoutModule,
    TranslateModule
  ],
  exports: [
    Header12Component,
    Footer12Component,
    RedHighlightDirective,
    BlueHighlightDirective,
    DelayRenderingDirective,
    NumberConverterPipe,
    NoPaste23Directive,
    NoCopy23Directive,
    ThreeDecimalsPipe,
    ProcessDecimalDirective,
    JoinArrayPipe,
    OnReturnDirective
  ],
  providers: [
    // Common23Service      
        /*
            It seems, Common23Service must be injected @ Root level... at not at module level
            because we want to use subjects & observables... see the data @ app.component.ts
        */
  ]
})
export class Common23Module { }
