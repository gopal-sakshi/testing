import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeDetection11Component } from './components/change-detection11/change-detection11.component';
import { HomeLifecycleHooksComponent } from './components/home-lifecycle-hooks/home-lifecycle-hooks.component';

const routes: Routes = [
  {
    path:'',
    component: HomeLifecycleHooksComponent
  },
  {
    path: 'change-detection-11',
    component: ChangeDetection11Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifeCycleHooks11RoutingModule { }
