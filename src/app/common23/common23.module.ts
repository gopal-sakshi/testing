import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Common23RoutingModule } from './common23-routing.module';
import { Header12Component } from './components/header12/header12.component';
import { Footer12Component } from './components/footer12/footer12.component';
import { RedHighlightDirective } from './directives/red-highlight.directive';
import { DelayRenderingDirective } from './directives/delay-rendering.directive';
import { NumberConverterPipe } from './Pipes/num-converter.pipe';
import { NoPaste23Directive } from './directives/no-paste23.directive';



@NgModule({
  declarations: [
    Header12Component,
    Footer12Component,
    RedHighlightDirective,
    DelayRenderingDirective,
    NumberConverterPipe,
    NoPaste23Directive
  ],
  imports: [
    CommonModule,
    Common23RoutingModule
  ],
  exports: [
    Header12Component,
    Footer12Component,
    RedHighlightDirective,
    DelayRenderingDirective,
    NumberConverterPipe,
    NoPaste23Directive
  ]
})
export class Common23Module { }
