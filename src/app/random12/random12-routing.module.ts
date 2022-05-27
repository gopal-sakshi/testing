import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivate12Guard } from './classes/canActivate12.service';
import { AngularSyntax12Component } from './components/angular-syntax12/angular-syntax12.component';
import { Cors23Component } from './components/cors23/cors23.component';
import { CustomComp12Component } from './components/custom-comp12/custom-comp12.component';
import { CustomDecorator12Component } from './components/custom-decorator12/custom-decorator12.component';
import { Decorator12Component } from './components/decorator12/decorator12.component';
import { DisplayUsersComponent } from './components/display-users/display-users.component';
import { DynamicImports23Component } from './components/dynamic-imports23/dynamic-imports23.component';
import { HomeRandomComponent } from './components/home-random/home-random.component';
import { Lifecycle12Component } from './components/lifecycle12/lifecycle12.component';
import { SweetAlert12Component } from './components/sweet-alert12/sweet-alert12.component';
import { UserResolver } from './resolvers/user.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeRandomComponent
  },
  {
    path: 'cors23',
    component: Cors23Component
  },
  {
    path: 'navigation-life-cycle',
    component: Lifecycle12Component
  },
  {
    path: 'navigation-life-cycle/displayUsers',
    component: DisplayUsersComponent,
    canActivate: [CanActivate12Guard],
    resolve: {
      data_is_stored_here_key: UserResolver
    },
  },
  {
    path: 'decorator12',
    component: Decorator12Component
  },
  {
    path: 'custom-decorator12',
    component: CustomDecorator12Component
  },
  {
    path: 'custom-component',
    component: CustomComp12Component
  },
  {
    path: 'angular-syntax12',
    component: AngularSyntax12Component
  },
  {
    path: 'dynamic-imports23',
    component: DynamicImports23Component
  },
  {
    path: 'swal-12',
    component: SweetAlert12Component
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Random12RoutingModule { }
