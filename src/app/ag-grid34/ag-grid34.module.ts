import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgGrid34RoutingModule } from './ag-grid34-routing.module';
import { HomeAgGridComponent } from './components/home-ag-grid/home-ag-grid.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AgGridModule } from 'ag-grid-angular';
import { AgGrid22Component } from './components/ag-grid22/ag-grid22.component';
import { AgGrid21Component } from './components/ag-grid21/ag-grid21.component';
import { AgGrid23Component } from './components/ag-grid23/ag-grid23.component';
import { Comments14Component } from './components/comments14/comments14.component';


@NgModule({
  declarations: [
    HomeAgGridComponent,
    AgGrid22Component,
    AgGrid21Component,
    AgGrid23Component,
    Comments14Component
  ],
  imports: [
    CommonModule,
    AgGridModule,
    AgGrid34RoutingModule,
    FlexLayoutModule
  ]
})
export class AgGrid34Module { }
