import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { Preload23Service } from './preload23.service';
import { DisplayUsersComponent } from './random12/components/display-users/display-users.component';

/*
    lazy-loading syntax uses loadChildren followed by a function
    this function = uses the browser's built-in import('...') syntax for dynamic imports.
    The import path is the relative path to the module.

    How to verify if a module is lazily loaded or not
    - go to chrome dev tools... network tab... you will see a module getting loaded...
*/

const agGrid24 = () => import('./ag-grid34/ag-grid34.module').then(m => m.AgGrid34Module)
const auth23 = () => import('./auth23/auth23.module').then(m => m.Auth23Module)
const bootstrap23 = () => import('./bootstrap23/bootstrap23.module').then(m => m.Bootstrap23Module)
const design23 = () => import('./design23/design23.module').then(m => m.Design23Module)
const dom12 = () => import('./dom12/dom12.module').then(m => m.Dom12Module)
const firebase22 = () => import('./firebase22/firebase22.module').then(m => m.Firebase22Module)
const forms12 = () => import('./forms12/forms12.module').then(m => m.Forms12Module)
const forms13 = () => import('./forms13/forms13.module').then(m => m.Forms13Module)
const jasmine34 = () => import('./jasmine34/jasmine34.module').then(m => m.Jasmine34Module)
const jsstuff12 = () => import('./js-stuff12/js-stuff12.module').then(m => m.JsStuff12Module)
// const library23 = () => import('./library23/library23.module').then(m=>m.Library23Module)
const lch11 = () => import('./life-cycle-hooks11/life-cycle-hooks11.module').then(m => m.LifeCycleHooks11Module)
const mat23 = () => import('./material23/material23.module').then(m => m.Material23Module)
const obs12 = () => import('./observables12/observables12.module').then(m => m.Observables12Module)
const obs15 = () => import('./observables15/observables15.module').then(m => m.Observables15Module)
const p23 = () => import('./projection23/projection23.module').then(m => m.Projection23Module)
const ran12 = () => import('./random12/random12.module').then(m => m.Random12Module)
const ran14 = () => import('./random14/random14.module').then(m => m.Random14Module)
const ran13 = () => import('./random13/random13.module').then(m => m.Random13Module)
const rou12 = () => import('./router12/router12.module').then(m => m.Router12Module)
const rou13 = () => import('./router13/router13.module').then(m => m.Router13Module)
const rou14 = () => import('./router14/router14.module').then(m => m.Router14Module)
const rou15 = () => import('./router15/router15.module').then(m => m.Router15Module)
const rou16 = () => import('./router16/router16.module').then(m => m.Router16Module)
const rgaurds = () => import('./route-guards/route-guards.module').then(m => m.RouteGuardsModule)
const ser123 = () => import('./serverless123/serverless123.module').then(m => m.Serverless123Module)
const scalls = () => import('./service-calls/service-calls.module').then(m => m.ServiceCallsModule)
const serv_di = () => import('./services-di/services-di.module').then(m => m.ServicesDIModule)
const sty12 = () => import('./styling12/styling12.module').then(m => m.Styling12Module)
const subj = () => import('./subjects/subjects.module').then(m => m.SubjectsModule)
const web23 = () => import('./webpack23/webpack23.module').then(m => m.Webpack23Module)
const wsock = () => import('./web-sockets/web-sockets.module').then(m => m.WebSocketsModule)

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent        
    },
    { path: 'AgGrid34', loadChildren: agGrid24 },
    { path: 'auth23', loadChildren: auth23 },
    { path: 'bootstrap23', loadChildren: bootstrap23 },
    { path: 'design23', loadChildren: design23 },
    { path: 'displayUsers', component: DisplayUsersComponent }, //just to show how backslash (/) works during navigation
    { path: 'dom12', loadChildren: dom12 },
    { path: 'firebase22', loadChildren: firebase22, data: { preload22: true } },    // see =====> preload23.service.ts
    { path: 'forms12', loadChildren: forms12 },
    { path: 'forms13', loadChildren: forms13 },
    { path: 'jasmine34', loadChildren: jasmine34 },
    { path: 'js-stuff12', loadChildren: jsstuff12 },
    // { path: 'library23', loadChildren: library23 },
    { path: 'life-cycle-hooks11', loadChildren: lch11 },
    { path: 'material23', loadChildren: mat23 },
    { path: 'observables12', loadChildren: obs12 },
    { path: 'observables15', loadChildren: obs15 },
    { path: 'projection23', loadChildren: p23 },
    { path: 'random12', loadChildren: ran12 },
    { path: 'random14', loadChildren: ran14 },
    { path: 'random13', loadChildren: ran13 },
    { path: 'router-12', loadChildren: rou12 },
    { path: 'router13', loadChildren: rou13 },
    { path: 'router14', loadChildren: rou14 },    
    // { path: 'router15', loadChildren: rou15 }, // eager-loading router15; see imports array of AppModule;
    { path: 'router16', loadChildren: rou16 },
    { path: 'routeGuards', loadChildren: rgaurds },
    { path: 'serverless123', loadChildren: ser123 },
    { path: 'service-calls', loadChildren: scalls },
    { path: 'services-di', loadChildren: serv_di },
    { path: 'styling12', loadChildren: sty12 },
    { path: 'subjects', loadChildren: subj },
    { path: 'webpack23', loadChildren: web23 },
    { path: 'web-sockets', loadChildren: wsock }
];

@NgModule({
    // imports: [RouterModule.forRoot(routes, { enableTracing: true })],
    //enableTracing flag = we can see the events emitted during router navigation
    imports: [RouterModule.forRoot(routes, {
        initialNavigation: 'enabled',
        preloadingStrategy: Preload23Service
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
