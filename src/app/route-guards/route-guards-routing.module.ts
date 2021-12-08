import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductGuardService } from './classes/ProductGuardService';
import { Activate23Component } from './components/activate23/activate23.component';
import { Contact11Component } from './components/contact11/contact11.component';
import { Error11Component } from './components/error11/error11.component';
import { Home11Component } from './components/home11/home11.component';
import { Product11Component } from './components/product11/product11.component';


const routes: Routes = [
  {
    path: 'activate-23',
    component: Activate23Component,
    canActivate: [ProductGuardService]
  },
  { path: '', component: Home11Component },  
  { path: 'contact', component: Contact11Component },
  { path: 'product', component: Product11Component },
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: Error11Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteGuardsRoutingModule { }
