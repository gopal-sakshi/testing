import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuNgContent33Component } from './components/au-ng-content33/au-ng-content33.component';
import { DomQueryComponent } from './components/dom-query/dom-query.component';
import { EmbedView11Component } from './components/embed-view11/embed-view11.component';
import { HomeDom12Component } from './components/home-dom12/home-dom12.component';
import { HostView11Component } from './components/host-view11/host-view11.component';
import { NgContainer11Component } from './components/ng-container11/ng-container11.component';
import { NgTemplateOutlet11Component } from './components/ng-template-outlet11/ng-template-outlet11.component';
import { NgTemplateOutlet12Component } from './components/ng-template-outlet12/ng-template-outlet12.component';
import { NgTemplate11Component } from './components/ng-template11/ng-template11.component';
import { ParentDomComponent } from './components/parent-dom/parent-dom.component';
import { ViewEncapsulation12Component } from './components/view-encapsulation12/view-encapsulation12.component';

const routes: Routes = [
  {
    path: '',
    component: HomeDom12Component
  },
  {
    path: 'dom-query',
    component: DomQueryComponent
  },
  {
    path: 'parent-dom',
    component: ParentDomComponent
  },
  {
    path: 'ng-template11',
    component: NgTemplate11Component
  },
  {
    path: 'ng-container11',
    component: NgContainer11Component
  },
  {
    path: 'ng-template-outlet11',
    component: NgTemplateOutlet11Component
  },
  {
    path: 'ng-template-outlet12',
    component: NgTemplateOutlet12Component
  },
  {
    path: 'au-ng-content33',
    component: AuNgContent33Component
  },
  {
    path: 'embed-view11',
    component: EmbedView11Component
  },
  {
    path: 'host-view11',
    component: HostView11Component
  },
  {
    path: 'view-encapsulation12',
    component: ViewEncapsulation12Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Dom12RoutingModule { }
