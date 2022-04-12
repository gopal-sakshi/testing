import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Signin11Component } from './components/signin11/signin11.component';
import { Signup11Component } from './components/signup11/signup11.component';
import { AuthHomeComponent } from './components/auth-home/auth-home.component';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Auth23Service } from './services/auth23.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SeeArticleComponent } from './components/see-article/see-article.component';
import { AuthGuard23 } from './classes/authGuard23';
import { Common23Module } from '../common23/common23.module';
import { AuthInterceptor23 } from './classes/authInterceptor23';
import { AuthInterceptor24 } from './classes/authInterceptor24';


const routes:Routes = [
  {
    path: '',
    component: AuthHomeComponent
  },
  {
    path: 'seeArticles',
    component: SeeArticleComponent,
    canActivate: [AuthGuard23],
  }
]

@NgModule({
  declarations: [
    AuthHomeComponent,
    Signin11Component,
    Signup11Component,
    SeeArticleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,    
    ReactiveFormsModule,
    Common23Module
  ],
  providers: [
    Auth23Service,
    AuthGuard23,
    AuthInterceptor23,
    AuthInterceptor24
  ]
})
export class Auth23Module { }
