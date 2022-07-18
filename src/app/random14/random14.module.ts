import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { Child12Component } from './components/child12/child12.component';
import { HomeR13Component } from './components/home/home.component';
import { ParentR13Component } from './components/parent/parent.component';

const routes: Routes = [
    { path: '', component: HomeR13Component}
]

@NgModule({
  declarations: [
    HomeR13Component,
    ParentR13Component,
    Child12Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Random14Module { }
