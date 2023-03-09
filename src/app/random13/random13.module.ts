import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { Circle13Component } from './components/circle13/circle13.component';
import { Upload180MbComponent } from './components/upload180-mb/upload180-mb.component';


const routes:Routes = [
  { path: '', component: HomeComponent},  
]

@NgModule({
  declarations: [
    HomeComponent,    
    Circle13Component,    
    Upload180MbComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Random13Module { }
