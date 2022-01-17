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
import { CustomComp12Component } from './components/custom-comp12/custom-comp12.component';
import { Zone12Component } from './components/zone12/zone12.component';
import { Zone11OutisdeAngularComponent } from './components/zone11-outisde-angular/zone11-outisde-angular.component';
import { AngularSyntax12Component } from './components/angular-syntax12/angular-syntax12.component';
import { CustomFormcontrol12Component } from './components/custom-formcontrol12/custom-formcontrol12.component';
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  declarations: [
    Cors23Component,
    HomeRandomComponent,
    Lifecycle12Component,
    DisplayUsersComponent,
    Decorator12Component,
    CustomDecorator12Component,
    Zone12Component,
    Zone11OutisdeAngularComponent,
    AngularSyntax12Component,
    CustomFormcontrol12Component,
    //CustomComp12Component
  ],
  imports: [
    CommonModule,
    Random12RoutingModule,
    FlexLayoutModule,
    MatIconModule
  ],
  providers:[
    CanActivate12Guard,
    Auth12Service,
    UserResolver,
    MockUserDataService
  ]
})
export class Random12Module { }
