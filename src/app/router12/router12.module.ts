import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Router12RoutingModule } from './router12-routing.module';
import { Snapshot12Component } from './components/snapshot12/snapshot12.component';
import { Params12Component } from './components/params12/params12.component';
import { HomeRouter12Component } from './components/home-router12/home-router12.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { RouteReuse12Component } from './components/route-reuse12/route-reuse12.component';
import { MatButtonModule } from '@angular/material/button';
import { GetItemDetailsService } from './services/get-item-details.service';


@NgModule({
  declarations: [
    Snapshot12Component,
    Params12Component,
    HomeRouter12Component,
    ItemDetailComponent,
    RouteReuse12Component
  ],
  imports: [
    CommonModule,
    Router12RoutingModule,
    FlexLayoutModule,
    MatButtonModule
  ],
  providers: [
    GetItemDetailsService
  ]
})
export class Router12Module { }
