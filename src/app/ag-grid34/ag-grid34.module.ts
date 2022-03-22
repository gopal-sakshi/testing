import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgGrid34RoutingModule } from './ag-grid34-routing.module';
import { HomeAgGridComponent } from './components/home-ag-grid/home-ag-grid.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AgGridModule } from 'ag-grid-angular';
import { AgGrid22Component } from './components/ag-grid22/ag-grid22.component';


@NgModule({
  declarations: [
    HomeAgGridComponent,
    AgGrid22Component
  ],
  imports: [
    CommonModule,
    AgGridModule,
    AgGrid34RoutingModule,
    FlexLayoutModule
  ]
})
export class AgGrid34Module { }
