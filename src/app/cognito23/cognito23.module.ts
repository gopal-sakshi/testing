import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CognitoHomeComponent } from './components/cognito-home/cognito-home.component';
import { CognitoProfileComponent } from './components/cognito-profile/cognito-profile.component';
import { CognitoSignUpComponent } from './components/cognito-sign-up/cognito-sign-up.component';
import { CognitoSignInComponent } from './components/cognito-sign-in/cognito-sign-in.component';
import { FormsModule } from '@angular/forms';

import { CognitoSignInCustom2Component } from './components/cognito-sign-in-custom2/cognito-sign-in-custom2.component';
import { CognitoSignInCustom1Component } from './components/cognito-sign-in-custom1/cognito-sign-in-custom1.component';

const routes:Routes = [
  { path: '', component: CognitoHomeComponent },
  { path: 'profile', component: CognitoProfileComponent },
  { path: 'signIn', component: CognitoSignInComponent },
  { path: 'signUp', component: CognitoSignUpComponent },
  { path: 'custom-signin1', component: CognitoSignInCustom1Component },
  { path: 'custom-signin2', component: CognitoSignInCustom2Component },
  { path: '**', redirectTo: 'signIn' },
]

@NgModule({
  declarations: [    
    CognitoHomeComponent,
    CognitoProfileComponent,
    CognitoSignUpComponent,
    CognitoSignInComponent,
    CognitoSignInCustom1Component,
    CognitoSignInCustom2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class Cognito23Module { }
