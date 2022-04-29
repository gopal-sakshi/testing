import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeSubjectsComponent } from './components/home-subjects/home-subjects.component';

import { Observable1Component } from './components/observable1/observable1.component';
import { Observable23Component } from './components/observable23/observable23.component';



const routes: Routes = [
    {
        path: '',
        component: HomeSubjectsComponent
    },
    {
        path: 'obs23',
        component: Observable23Component
    },
    {
        path: 'observable1',
        component: Observable1Component
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SubjectsRoutingModule {}