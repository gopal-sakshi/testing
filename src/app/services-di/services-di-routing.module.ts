import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDiComponent } from './components/home-di/home-di.component';
import { ProductDiInjectComponent } from './components/product-di-inject/product-di-inject.component';
import { ProductDiComponent } from './components/product-di/product-di.component';
import { ProductNoDiComponent } from './components/product-no-di/product-no-di.component';
import { TokenTypesComponent } from './components/token-types/token-types.component';

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
  },
  {
    path: 'di-inject',
    component: ProductDiInjectComponent
  },
  {
    path: 'token-types',
    component: TokenTypesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesDIRoutingModule { }
