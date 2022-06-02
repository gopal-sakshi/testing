import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Styling12RoutingModule } from './styling12-routing.module';
import { Flex12Component } from './components/flex12/flex12.component';
import { HomeStylingComponent } from './components/home-styling/home-styling.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HtmlStyling12Component } from './components/html-styling12/html-styling12.component';
import { InputElement12Component } from './components/input-element12/input-element12.component';
import { NgClass12Component } from './components/ng-class12/ng-class12.component';
import { Common23Module } from '../common23/common23.module';
import { Animate12Component } from './components/animate12/animate12.component';
import { MatTheme23Component } from './components/mat-theme23/mat-theme23.component';
import { MatTheme24Component } from './components/mat-theme24/mat-theme24.component';
import { Styling13Component } from './components/styling13/styling13.component';


@NgModule({
  declarations: [
    Flex12Component,
    HomeStylingComponent,
    HtmlStyling12Component,
    InputElement12Component,
    NgClass12Component,
    Animate12Component,
    MatTheme23Component,
    MatTheme24Component,
    Styling13Component          // comment and see the magic............
                                    // what happens if a component is in a module, but not included in declarations[] array
  ],
  imports: [
    CommonModule,
    FormsModule,
    Styling12RoutingModule,
    FlexLayoutModule,
    Common23Module            // we added this Common23Module ----> because we want to use redHighlight directive
  ]
})
export class Styling12Module { }
