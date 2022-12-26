import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeWebpackComponent } from './components/home-webpack/home-webpack.component';
import { Webpack11Component } from './components/webpack11/webpack11.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  { path: '', component: HomeWebpackComponent }
]

@NgModule({
  declarations: [
    HomeWebpackComponent,
    Webpack11Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Webpack23Module { }
