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
    FlexLayoutModule
  ]
})
export class Material23Module { }
