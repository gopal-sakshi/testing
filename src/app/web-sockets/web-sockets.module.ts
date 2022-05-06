import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocketsHomeComponent } from './components/sockets-home/sockets-home.component';
import { Sockets11Component } from './components/sockets11/sockets11.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

const routes:Routes = [
  { path: '', component: SocketsHomeComponent}
]

@NgModule({
  declarations: [
    SocketsHomeComponent,
    Sockets11Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    FormsModule
  ]
})
export class WebSocketsModule { }
