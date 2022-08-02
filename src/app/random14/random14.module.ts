import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { Child12Component } from './components/child12/child12.component';
import { HomeR13Component } from './components/home/home.component';
import { ParentR13Component } from './components/parent/parent.component';
import { JoinArrayComponent } from './components/join-array/join-array.component';
import { Common23Module } from '../common23/common23.module';
import { Child23Component } from './components/child23/child23.component';

const routes: Routes = [
    { path: '', component: HomeR13Component}
]

@NgModule({
  declarations: [
    HomeR13Component,
    ParentR13Component,
    Child12Component,
    JoinArrayComponent,
    Child23Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Common23Module
  ]
})
export class Random14Module { }
