import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Styling12RoutingModule } from './styling12-routing.module';
import { Flex12Component } from './components/flex12/flex12.component';
import { HomeStylingComponent } from './components/home-styling/home-styling.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Flex12Component,
    HomeStylingComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    Styling12RoutingModule,
    FlexLayoutModule
  ]
})
export class Styling12Module { }
