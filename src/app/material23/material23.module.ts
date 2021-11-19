import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sidenav2Component } from './components/sidenav2/sidenav2.component';
import { Material23RoutingModule } from './material23-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [
    Sidenav2Component
  ],
  imports: [
    CommonModule,
    Material23RoutingModule,
    MatSidenavModule
  ]
})
export class Material23Module { }
