import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivate12Guard } from './classes/canActivate12.service';
import { Cors23Component } from './components/cors23/cors23.component';
import { DisplayUsersComponent } from './components/display-users/display-users.component';
import { HomeRandomComponent } from './components/home-random/home-random.component';
import { Lifecycle12Component } from './components/lifecycle12/lifecycle12.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Random12RoutingModule { }
