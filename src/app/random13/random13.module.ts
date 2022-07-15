import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { Circle12Component } from './components/circle12/circle12.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CircleTimerModule } from '@flxng/circle-timer';
import { Circle13Component } from './components/circle13/circle13.component';

const routes:Routes = [
  { path: '', component: HomeComponent},  
]

@NgModule({
  declarations: [
    HomeComponent,
    Circle12Component,
    Circle13Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    CircleTimerModule
  ]
})
export class Random13Module { }
