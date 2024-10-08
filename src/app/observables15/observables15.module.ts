import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetingComponent } from './components/greeting/greeting.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Filter23OperatorComponent } from './components/filter23-operator/filter23-operator.component';
import { ColdObs23Component } from './components/cold-obs23/cold-obs23.component';
import { Scheduler23Component } from './components/scheduler23/scheduler23.component';
import { Blink23Component } from './components/blink23/blink23.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
]

@NgModule({
  declarations: [
    GreetingComponent,
    HomeComponent,
    Filter23OperatorComponent,
    ColdObs23Component,
    Scheduler23Component,
    Blink23Component    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Observables15Module { }
