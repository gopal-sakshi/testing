import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home14Component } from './components/home14/home14.component';
import { RouteOneComponent } from './components/route-one/route-one.component';
import { RouteTwoComponent } from './components/route-two/route-two.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Home15Component } from './components/home15/home15.component';


export const router14Routes:Routes = [
  {
    path: '',
    component: Home14Component,
    /* 
        child routes = create routes that are relative to a component other than your root component
        also called as nested routes
        meaing, we have to add a second <router-outlet> to your app
        - in addition to the <router-outlet> in AppComponent.
    */
    children: [
      { path: 'route-one', component: RouteOneComponent },
      { path: 'route-two', component: RouteTwoComponent }
    ]
  },
  {
    path: 'home15',
    component: Home15Component
  }
]

@NgModule({
  declarations: [
    Home14Component,
    RouteOneComponent,
    RouteTwoComponent,
    Home15Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(router14Routes),
    FlexLayoutModule
  ]
})
export class Router14Module { }
