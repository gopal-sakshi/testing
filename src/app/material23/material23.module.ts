import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sidenav2Component } from './components/sidenav2/sidenav2.component';
import { Material23RoutingModule } from './material23-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatForms23Component } from './components/mat-forms23/mat-forms23.component';
import { MatTable12Component } from './components/mat-table12/mat-table12.component';
import { MatTableModule } from '@angular/material/table';
import { MatHome12Component } from './components/mat-home12/mat-home12.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    Sidenav2Component,
    MatForms23Component,
    MatTable12Component,
    MatHome12Component
  ],
  imports: [
    CommonModule,
    Material23RoutingModule,
    MatSidenavModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    FlexLayoutModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule, 
  ]
})
export class Material23Module { }
