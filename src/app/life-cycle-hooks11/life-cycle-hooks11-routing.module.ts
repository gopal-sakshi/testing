import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeDetection11Component } from './components/change-detection11/change-detection11.component';
import { HomeLifecycleHooksComponent } from './components/home-lifecycle-hooks/home-lifecycle-hooks.component';
import { Zone11OutsideAngularComponent } from './components/zone11-outside-angular/zone11-outside-angular.component';
import { Zone12Component } from './components/zone12/zone12.component';

const routes: Routes = [
  {
    path:'',
    component: HomeLifecycleHooksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifeCycleHooks11RoutingModule { }
