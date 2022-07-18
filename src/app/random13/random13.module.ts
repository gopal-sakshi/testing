import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { Circle12Component } from './components/circle12/circle12.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CircleTimerModule } from '@flxng/circle-timer';
import { Circle13Component } from './components/circle13/circle13.component';
import { Circle14Component } from './components/circle14/circle14.component';
import { Circle15Component } from './components/circle15/circle15.component';

const routes:Routes = [
  { path: '', component: HomeComponent},  
]

@NgModule({
  declarations: [
    HomeComponent,
    Circle12Component,
    Circle13Component,
    Circle14Component,
    Circle15Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    CircleTimerModule
  ]
})
export class Random13Module { }
