import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Buttons12Component } from './components/buttons12/buttons12.component';
import { HomeBootstrapComponent } from './components/home-bootstrap/home-bootstrap.component';
import { RouterModule, Routes } from '@angular/router';
import { Layout12Component } from './components/layout12/layout12.component';
import { Layout13Component } from './components/layout13/layout13.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const routes:Routes = [
  { path: '', component: HomeBootstrapComponent }
]

@NgModule({
  declarations: [
    HomeBootstrapComponent,
    Buttons12Component,
    Layout12Component,
    Layout13Component,    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule
  ]
})
export class Bootstrap23Module { }
