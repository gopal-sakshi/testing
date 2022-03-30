import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Signin11Component } from './components/signin11/signin11.component';
import { Signup11Component } from './components/signup11/signup11.component';
import { AuthHomeComponent } from './components/auth-home/auth-home.component';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Auth23Service } from './services/auth23.service';
import { ReactiveFormsModule } from '@angular/forms';


const routes:Routes = [
  {
    path: '',
    component: AuthHomeComponent
  }
]

@NgModule({
  declarations: [
    AuthHomeComponent,
    Signin11Component,
    Signup11Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,    
    ReactiveFormsModule,
  ],
  providers: [
    Auth23Service
  ]
})
export class Auth23Module { }
