import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Flex12Component } from './components/flex12/flex12.component';
import { HomeStylingComponent } from './components/home-styling/home-styling.component';
import { HtmlStyling12Component } from './components/html-styling12/html-styling12.component';
import { InputElement12Component } from './components/input-element12/input-element12.component';
import { NgClass12Component } from './components/ng-class12/ng-class12.component';

const routes: Routes = [
  {
    path: '',
    component: HomeStylingComponent
  },
  {
    path:'flex12',
    component: Flex12Component
  },
  {
    path: 'ng-class12',
    component: NgClass12Component
  },
  {
    path: 'html-styling12',
    component: HtmlStyling12Component
  },
  {
    path: 'input-element12',
    component: InputElement12Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Styling12RoutingModule { }
