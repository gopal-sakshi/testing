import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeForms12Component } from './components/home-forms12/home-forms12.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomValidator12Component } from './components/custom-validator12/custom-validator12.component';
import { MatButtonModule } from '@angular/material/button';
import { CustomValidator13Component } from './components/custom-validator13/custom-validator13.component';

import { EmailValidator12 } from './directives/validate-email-directive12';
import { EmailValidator13 } from './directives/validate-email-directive13';
import { EmailValidator14 } from './directives/validate-email-directive14';
import { EmailValidator15 } from './directives/validate-email-directive15';
import { EmailBlackList12Service } from './classes/email-black-list12-service';


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
    EmailValidator12,
    EmailValidator13,
    EmailValidator14,
    EmailValidator15
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  providers: [
    EmailBlackList12Service
  ]
})
export class Forms12Module { }
