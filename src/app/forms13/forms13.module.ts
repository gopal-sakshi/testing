import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { Parent12Component } from './components/parent12/parent12.component';
import { RouterModule, Routes } from '@angular/router';
import { BasicInfoComponent } from './components/basic-info/basic-info.component';
import { AddressComponent } from './components/address/address.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';

const routes:Routes = [
  { path:  '', component: HomeComponent }
]

@NgModule({
  declarations: [
    HomeComponent,
    Parent12Component,
    BasicInfoComponent,
    AddressComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatCardModule
  ]
})
export class Forms13Module { }
