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


@NgModule({
  declarations: [
    Flex12Component,
    HomeStylingComponent,
    HtmlStyling12Component,
    InputElement12Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    Styling12RoutingModule,
    FlexLayoutModule
  ]
})
export class Styling12Module { }
