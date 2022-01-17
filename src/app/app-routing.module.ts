import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { DisplayUsersComponent } from './random12/components/display-users/display-users.component';

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
    path: 'routeGuards',
    loadChildren: () => import('./route-guards/route-guards.module').then(m => m.RouteGuardsModule)
  },
  {
    path: 'router-12',
    loadChildren:() => import('./router12/router12.module').then(m=>m.Router12Module)
  },
  {
    path: 'services-di',
    loadChildren: () => import('./services-di/services-di.module').then(m => m.ServicesDIModule)
  },
  {
    path: 'random12',
    loadChildren: () => import('./random12/random12.module').then(m => m.Random12Module)
  },
  {
    path: 'styling12',
    loadChildren:() => import ('./styling12/styling12.module').then(m=>m.Styling12Module)
  },
  /*
        lazy-loading syntax uses loadChildren followed by a function
        this function = uses the browser's built-in import('...') syntax for dynamic imports. 
          The import path is the relative path to the module.

        How to verify if a module is lazily loaded or not
        - go to chrome dev tools... network tab... you will see a module getting loaded...
  */
  {
    path: 'displayUsers',
    component: DisplayUsersComponent  //just to show how backslash (/) works during navigation
  },
  {
    path: 'dom12',
    loadChildren:() => import('./dom12/dom12.module').then(m=>m.Dom12Module)
  },
  {
    path:'life-cycle-hooks11',
    loadChildren:() => import ('./life-cycle-hooks11/life-cycle-hooks11.module').then(m=>m.LifeCycleHooks11Module)
  }
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, { enableTracing: true })],
    //enableTracing flag = we can see the events emitted during router navigation
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
