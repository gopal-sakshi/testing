import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { InputCardComponent } from './components/input-card/input-card.component';
import { RouterModule, Routes } from '@angular/router';
import { ProjectBodyCardComponent } from './components/project-body-card/project-body-card.component';
import { ProjectMultipleCardComponent } from './components/project-multiple-card/project-multiple-card.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
]

@NgModule({
  declarations: [
    HomeComponent,
    InputCardComponent,
    ProjectBodyCardComponent,
    ProjectMultipleCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Projection23Module { }
