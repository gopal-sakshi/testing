import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cors23Component } from './components/cors23/cors23.component';
import { HomeRandomComponent } from './components/home-random/home-random.component';

const routes: Routes = [
  {
    path: '',
    component: HomeRandomComponent
  },
  {
    path: 'cors23',
    component: Cors23Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Random12RoutingModule { }
