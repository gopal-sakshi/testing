import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeForms12Component } from './components/home-forms12/home-forms12.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomValidator12Component } from './components/custom-validator12/custom-validator12.component';
import { MatButtonModule } from '@angular/material/button';
import { CustomValidator13Component } from './components/custom-validator13/custom-validator13.component';
import { ValidateEmailDirective13 } from './directives/validateEmailDirective13';
import { EmailValidator12 } from './directives/validate-email-directive12';

const routes: Routes = [
  {
    path: '',
    component: HomeForms12Component
  }
]

@NgModule({
  declarations: [
    HomeForms12Component,
    CustomValidator12Component,
    CustomValidator13Component,
    ValidateEmailDirective13,
    EmailValidator12
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
  ]
})
export class Forms12Module { }
