import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScComponent } from './components/home-sc/home-sc.component';

const routes: Routes = [
  {
    path: '',
    component: HomeScComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceCallsRoutingModule { }
