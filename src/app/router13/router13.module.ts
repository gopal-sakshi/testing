import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Message13Resolver } from './classes/message13.resolver';
import { Conversation11Component } from './components/conversation11/conversation11.component';
import { Messages11Component } from './components/messages11/messages11.component';
import { HomeRouter13Component } from './components/home-router13/home-router13.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { Message00Component } from './components/message00/message00.component';
import { MultipleOutletsComponent } from '../router12/components/multiple-outlets/multiple-outlets.component';
import { CheckSnapshotService } from './services/check-snapshot.service';

export const router13Routes:Routes = [
  {
    path: '',
    component: HomeRouter13Component
  },
  {
    path: ':folder',
    children: [
      {
        path: '',
        component: Conversation11Component          
            //    localhost:9999/router13/outbox     (OR)      localhost:9999/router13/inbox
      },
      {
        path: ':year',
        component: Conversation11Component,       
            //    localhost:9999/router13/outbox/2022         (OR)            localhost:9999/router13/inbox/2021
        children: [
          {
            path: 'messages',
            component: Messages11Component      
          },
          {
            path: 'messages/:id',
            component: Message00Component,
            resolve: {
              message_stored_here: Message13Resolver
            }
          }
        ]
      }
    ]
  }
]

@NgModule({
  declarations: [
    Conversation11Component,
    Messages11Component,
    HomeRouter13Component,
    Message00Component,
    MultipleOutletsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(router13Routes),
    FlexLayoutModule,
    MatButtonModule
  ],
  providers: [
    Message13Resolver,
    CheckSnapshotService
  ]
})
export class Router13Module { }
