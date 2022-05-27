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

import { AngularSyntax12Component } from './components/angular-syntax12/angular-syntax12.component';

import { MatIconModule } from '@angular/material/icon';
import { DynamicImports23Component } from './components/dynamic-imports23/dynamic-imports23.component';
import { CustomDecorator13Component } from './components/custom-decorator13/custom-decorator13.component';
import { SweetAlert12Component } from './components/sweet-alert12/sweet-alert12.component';
import { Typescript11Component } from './components/typescript11/typescript11.component';
import { EventManager14Component } from './components/event-manager14/event-manager14.component';
import { TypeSafety23Component } from './components/type-safety23/type-safety23.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    Cors23Component,
    HomeRandomComponent,
    Lifecycle12Component,
    DisplayUsersComponent,
    Decorator12Component,
    CustomDecorator12Component,
    AngularSyntax12Component,    
    DynamicImports23Component,
    CustomDecorator13Component,
    SweetAlert12Component,
    Typescript11Component,
    EventManager14Component,
    TypeSafety23Component,
    //CustomComp12Component
  ],
  imports: [
    CommonModule,
    Random12RoutingModule,
    FlexLayoutModule,
    MatIconModule,
    FormsModule
  ],
  providers:[
    CanActivate12Guard,
    Auth12Service,
    UserResolver,
    MockUserDataService
  ]
})
export class Random12Module { }
