import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Buttons12Component } from './components/buttons12/buttons12.component';
import { HomeBootstrapComponent } from './components/home-bootstrap/home-bootstrap.component';
import { RouterModule, Routes } from '@angular/router';
import { Layout12Component } from './components/layout12/layout12.component';
import { Layout13Component } from './components/layout13/layout13.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Cosmos12Component } from './components/cosmos12/cosmos12.component';
import { Flex12Component } from './components/flex12/flex12.component';
import { FullWebsite12Component } from './components/full-website12/full-website12.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { Layout14Component } from './components/layout14/layout14.component';
import { Layout15Component } from './components/layout15/layout15.component';
import { Layout16Component } from './components/layout16/layout16.component';
import { Layout17Component } from './components/layout17/layout17.component';
import { Footer44Component } from './components/footer44/footer44.component';
import { Classes23Component } from './components/classes23/classes23.component';
import { Flex13Component } from './components/flex13/flex13.component';
import { MediaQueries11Component } from './components/media-queries11/media-queries11.component';


const routes:Routes = [
  { path: '', component: HomeBootstrapComponent }
]

@NgModule({
  declarations: [
    HomeBootstrapComponent,
    Buttons12Component,
    Layout12Component,
    Layout13Component,
    Cosmos12Component,
    Flex12Component,
    FullWebsite12Component,
    ProgressBarComponent,
    Layout14Component,
    Layout15Component,
    Layout16Component,
    Layout17Component,
    Footer44Component,
    Classes23Component,
    Flex13Component,
    MediaQueries11Component,    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule
  ]
})
export class Bootstrap23Module { }
