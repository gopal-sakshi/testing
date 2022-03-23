import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgGrid21Component } from './components/ag-grid21/ag-grid21.component';
import { AgGrid22Component } from './components/ag-grid22/ag-grid22.component';

import { HomeAgGridComponent } from './components/home-ag-grid/home-ag-grid.component';

const routes: Routes = [
  {
    path: '',
    component: HomeAgGridComponent
  },
  {
    path: 'agGrid-Comp',
    component: AgGrid22Component
  },
  {
    path: 'agGrid21',
    component: AgGrid21Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgGrid34RoutingModule { }
