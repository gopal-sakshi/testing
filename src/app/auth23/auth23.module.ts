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
  { path: '', component: AuthHomeComponent },
  { path: 'seeArticles', component: SeeArticleComponent, canActivate: [AuthGuard23] }
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
    // Auth23Service,          // inject Auth23Service @ app module     -- see EXPLANATION23
    AuthGuard23,
    AuthInterceptor23,
    AuthInterceptor24    
  ]
})
export class Auth23Module { }

/*
    EXPLANATION23
    - if we provide Auth23Service here in auth23.module.ts
    - then we get Circular dependency in DI detected for InjectionToken HTTP_INTERCEPTORS
    - jwtInterceptor11 is injected @ app.module.ts
    - jwtInterceptor11 uses Auth23Service (but Auth23Service is injected @ auth23.module.ts)
    - thatswhy we got "circular dependency in DI" error
    - Solution ===> remove Auth23Service here and inject @ app.module.ts --> where jwtInterceptor11 got injected
*/