import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallBindApplyComponent } from './components/call-bind-apply/call-bind-apply.component';
import { JsHome12Component } from './components/js-home12/js-home12.component';

const javaScriptRoutes: Routes = [
  {
    path: '',
    component: JsHome12Component
  },
  {
    path: 'call-bind-apply',
    component: CallBindApplyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(javaScriptRoutes)],
  exports: [RouterModule]
})
export class JsStuff12RoutingModule { }
