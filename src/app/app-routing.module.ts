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
    path: 'design23',
    loadChildren: () => import('./design23/design23.module').then(m => m.Design23Module)
  },
  {
    path: 'router-12',
    loadChildren: () => import('./router12/router12.module').then(m => m.Router12Module)
  },
  {
    path: 'router13',
    loadChildren: () => import('./router13/router13.module').then(m => m.Router13Module)
  },
  {
    path: 'router14',
    loadChildren: () => import('./router14/router14.module').then(m => m.Router14Module)
  },
  {
    path: 'router15',
    loadChildren: () => import('./router15/router15.module').then(m => m.Router15Module)
  },
  {
    path: 'router16',
    loadChildren: () => import('./router16/router16.module').then(m => m.Router16Module)
  },
  {
    path: 'services-di',
    loadChildren: () => import('./services-di/services-di.module').then(m => m.ServicesDIModule)
  },
  {
    path: 'projection23',
    loadChildren: () => import('./projection23/projection23.module').then(m => m.Projection23Module)
  },
  {
    path: 'library23',
    loadChildren:() => import('./library23/library23.module').then(m=>m.Library23Module)
  },
  {
    path: 'random12',
    loadChildren: () => import('./random12/random12.module').then(m => m.Random12Module)
  },
  {
    path: 'random14',
    loadChildren: () => import('./random14/random14.module').then(m => m.Random14Module)
  },
  {
    path: 'random13',
    loadChildren: () => import('./random13/random13.module').then(m => m.Random13Module)
  },
  {
    path: 'observables23',
    loadChildren: () => import('./observables12/observables12.module').then(m => m.Observables12Module)
  },
  {
    path: 'observables15',
    loadChildren: () => import('./observables15/observables15.module').then(m => m.Observables15Module)
  },
  {
    path: 'styling12',
    loadChildren: () => import('./styling12/styling12.module').then(m => m.Styling12Module)
  },
  {
    path: 'serverless123',
    loadChildren: () => import('./serverless123/serverless123.module').then(m => m.Serverless123Module)
  },
  {
    path: 'service-calls',
    loadChildren: () => import('./service-calls/service-calls.module').then(m => m.ServiceCallsModule)
  },
  {
    path: 'forms12',
    loadChildren: () => import('./forms12/forms12.module').then(m => m.Forms12Module)
  },
  {
    path: 'forms13',
    loadChildren: () => import('./forms13/forms13.module').then(m => m.Forms13Module)
  },
  {
    path: 'AgGrid34',
    loadChildren: () => import('./ag-grid34/ag-grid34.module').then(m => m.AgGrid34Module)
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
    loadChildren: () => import('./dom12/dom12.module').then(m => m.Dom12Module)
  },
  {
    path: 'life-cycle-hooks11',
    loadChildren: () => import('./life-cycle-hooks11/life-cycle-hooks11.module').then(m => m.LifeCycleHooks11Module)
  },
  {
    path: 'js-stuff12',
    loadChildren: () => import('./js-stuff12/js-stuff12.module').then(m => m.JsStuff12Module)
  },
  {
    path: 'auth23',
    loadChildren: () => import('./auth23/auth23.module').then(m => m.Auth23Module)
  },
  {
    path: 'web-sockets',
    loadChildren: () => import('./web-sockets/web-sockets.module').then(m => m.WebSocketsModule)
  }
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  //enableTracing flag = we can see the events emitted during router navigation
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
