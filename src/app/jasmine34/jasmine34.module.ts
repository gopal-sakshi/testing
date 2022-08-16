import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Test12Component } from './components/test12/test12.component';


const routes:Routes = [ 
  { path: '', component: HomeComponent }
]

@NgModule({
  declarations: [
    HomeComponent,
    Test12Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Jasmine34Module { }
