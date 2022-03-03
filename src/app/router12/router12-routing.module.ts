import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRouter12Component } from './components/home-router12/home-router12.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { MultipleOutletsComponent } from './components/multiple-outlets/multiple-outlets.component';
import { Params12Component } from './components/params12/params12.component';
import { Snapshot12Component } from './components/snapshot12/snapshot12.component';

const routes: Routes = [
  {
    path: '',
    component: HomeRouter12Component
  },
  {
    path: 'params12',
    component: Params12Component
  },
  {
    path: 'snapshot12',
    component: Snapshot12Component
  },
  {
    path: 'itemDetail/:id',
    component: ItemDetailComponent
  },
  {
    path: 'multipleOutlets',
    component: MultipleOutletsComponent,
    //outlet: 'multiple23'          // this route working only if I disable this outlet property... look into it
  },
];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Router12RoutingModule { }
