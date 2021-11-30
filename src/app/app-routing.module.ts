import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, 
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'subjects',
    loadChildren: () => import('./subjects/subjects.module').then(m => m.SubjectsModule)
  },
  {
    path: 'material23',
    loadChildren: () => import('./material23/material23.module').then(m => m.Material23Module)
  },
  {
    path: 'activate23',
    loadChildren: () => import('./route-guards/route-guards.module').then(m => m.RouteGuardsModule)
  },
  {
    path: 'services-di',
    loadChildren: () => import('./services-di/services-di.module').then(m => m.ServicesDIModule)
  },
  {
    path: 'random12',
    loadChildren: () => import('./random12/random12.module').then(m => m.Random12Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
