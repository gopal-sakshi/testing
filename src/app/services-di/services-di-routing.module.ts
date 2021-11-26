import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDiComponent } from './components/home-di/home-di.component';
import { ProductDiComponent } from './components/product-di/product-di.component';
import { ProductNoDiComponent } from './components/product-no-di/product-no-di.component';

const routes: Routes = [
  {
    path: '',
    component: HomeDiComponent
  },
  {
    path: 'no-di',
    component: ProductNoDiComponent
  },
  {
    path: 'di',
    component: ProductDiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesDIRoutingModule { }
