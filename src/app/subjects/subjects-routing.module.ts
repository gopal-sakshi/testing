import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AaSubjectsComponent } from './components/aa-subjects/aa-subjects.component';
import { Observable1Component } from './components/observable1/observable1.component';
import { Subject23Component } from './components/subject23/subject23.component';


const routes: Routes = [
    {
        path: '',
        component: AaSubjectsComponent
    },
    {
        path: 'subject23',
        component: Subject23Component
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