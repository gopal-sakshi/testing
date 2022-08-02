import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { Test1Component } from './components/test1/test1.component';
import { RouterModule, Routes } from '@angular/router';
import { Image23Module, Utilities12Module } from 'gopal612-testing-library';
import { Test2Component } from './components/test2/test2.component';
// import { Cricket12Module } from 'gopal612-testing-library';

const routes:Routes = [
  { path: '', component: HomeComponent }
]

@NgModule({
  declarations: [
    HomeComponent,
    Test1Component,
    Test2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Utilities12Module,
    // Cricket12Module,
    Image23Module
  ]
})
export class Library23Module { }
