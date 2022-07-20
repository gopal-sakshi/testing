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
import { DateValidatorComponent } from './components/date-validator/date-validator.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { DateValidator2Component } from './components/date-validator2/date-validator2.component';
import { Template12Component } from './components/template12/template12.component';
import { Reactive12Component } from './components/reactive12/reactive12.component';
import { CustomValidator14Component } from './components/custom-validator14/custom-validator14.component';
import { CustomFormcontrol12Component } from './components/custom-formcontrol12/custom-formcontrol12.component';
import { MatIconModule } from '@angular/material/icon';
import { NestedFormComponent } from './components/nested-form/nested-form.component';
import { FormArrayComponent } from './components/form-array/form-array.component';
import { MatSelectModule } from '@angular/material/select';
import { RatingInputComponent } from './components/rating-input/rating-input.component';
import { Reactive13Component } from './components/reactive13/reactive13.component';
import { AddMinusComponent } from './components/add-minus/add-minus.component';
import { ReusableFormComponent } from './components/reusable-form/reusable-form.component';
import { Address12Component } from './components/address12/address12.component';

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
    EmailValidator15,
    DateValidatorComponent,
    DateValidator2Component,
    Template12Component,
    Reactive12Component,
    CustomValidator14Component,
    CustomFormcontrol12Component,
    NestedFormComponent,
    FormArrayComponent,
    RatingInputComponent,
    Reactive13Component,
    AddMinusComponent,
    ReusableFormComponent,
    Address12Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule
  ],
  providers: [
    EmailBlackList12Service
  ]
})
export class Forms12Module { }
