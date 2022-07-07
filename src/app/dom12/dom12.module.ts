import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Dom12RoutingModule } from './dom12-routing.module';
import { HomeDom12Component } from './components/home-dom12/home-dom12.component';
import { DomQueryComponent } from './components/dom-query/dom-query.component';
import { ParentDomComponent } from './components/parent-dom/parent-dom.component';
import { ChildDom1Component } from './components/child-dom1/child-dom1.component';
import { NgTemplate11Component } from './components/ng-template11/ng-template11.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgContainer11Component } from './components/ng-container11/ng-container11.component';
import { NgContent11Component } from './components/ng-content11/ng-content11.component';
import { NgTemplateOutlet11Component } from './components/ng-template-outlet11/ng-template-outlet11.component';
import { NgTemplateOutlet12Component } from './components/ng-template-outlet12/ng-template-outlet12.component';
import { AuNgContent33Component } from './components/au-ng-content33/au-ng-content33.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EmbedView11Component } from './components/embed-view11/embed-view11.component';
import { HostView11Component } from './components/host-view11/host-view11.component';
import { HostViewExample1Component } from './components/host-view-example1/host-view-example1.component';
import { ViewEncapsulation12Component } from './components/view-encapsulation12/view-encapsulation12.component';
import { ViewEncapChild1Component } from './components/view-encap-child1/view-encap-child1.component';
import { NgContent14Component } from './components/ng-content14/ng-content14.component';
import { HostViewExample2Component } from './components/host-view-example2/host-view-example2.component';
import { Renderer2Component } from './components/renderer2/renderer2.component';
import { Renderer2Directive } from './directives/renderer2.directive';


@NgModule({
  declarations: [
    HomeDom12Component,
    DomQueryComponent,
    ParentDomComponent,
    ChildDom1Component,
    NgTemplate11Component,
    NgContainer11Component,
    NgContent11Component,
    NgTemplateOutlet11Component,
    NgTemplateOutlet12Component,
    AuNgContent33Component,
    EmbedView11Component,
    HostView11Component,
    HostViewExample1Component,
    ViewEncapsulation12Component,
    ViewEncapChild1Component,
    NgContent14Component,
    HostViewExample2Component,
    Renderer2Component,
    Renderer2Directive
  ],
  imports: [
    CommonModule,
    Dom12RoutingModule,
    FlexLayoutModule,
    FontAwesomeModule
  ]
})
export class Dom12Module { }
