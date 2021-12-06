import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Random12RoutingModule } from './random12-routing.module';

import { HomeRandomComponent } from './components/home-random/home-random.component';
import { Cors23Component } from './components/cors23/cors23.component';
import { Lifecycle12Component } from './components/lifecycle12/lifecycle12.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CanActivate12Guard } from './classes/canActivate12.service';
import { Auth12Service } from './classes/auth12.service';
import { MockUserDataService } from './resolvers/mock-user-data.service';
import { UserResolver } from './resolvers/user.resolver';
import { DisplayUsersComponent } from './components/display-users/display-users.component';
import { Decorator12Component } from './components/decorator12/decorator12.component';
import { CustomDecorator12Component } from './components/custom-decorator12/custom-decorator12.component';


@NgModule({
  declarations: [
    Cors23Component,
    HomeRandomComponent,
    Lifecycle12Component,
    DisplayUsersComponent,
    Decorator12Component,
    CustomDecorator12Component
  ],
  imports: [
    CommonModule,
    Random12RoutingModule,
    FlexLayoutModule
  ],
  providers:[
    CanActivate12Guard,
    Auth12Service,
    UserResolver,
    MockUserDataService
  ]
})
export class Random12Module { }
