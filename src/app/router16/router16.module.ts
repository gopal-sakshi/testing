import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './components/parent/parent.component';
import { DetailComponent } from './components/detail/detail.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {
    path: 'parent',
    component: ParentComponent,
    children: [
      {
        path: 'detail/:detailId',
        component: DetailComponent,
        data: {
          alwaysRefresh: true
        }
      }
    ]
  },
  {
    path: 'search',
    children: [
       {
          path: '',
          component: SearchComponent,
          data: {
            saveComponent: true
          }
       },
       {
          path: 'detail/:detailId',
          component: DetailComponent
       }
    ]
  }
]

@NgModule({
  declarations: [
    ParentComponent,
    DetailComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Router16Module { }
