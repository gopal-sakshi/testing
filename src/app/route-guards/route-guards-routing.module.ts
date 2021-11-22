import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductGuardService } from '../classes/ProductGuardService';
import { Activate23Component } from './activate23/activate23.component';

const routes: Routes = [
  {
    path: '',
    component: Activate23Component,
    canActivate: [ProductGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteGuardsRoutingModule { }
