import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Subject23Component } from './components/subject23/subject23.component';


const routes: Routes = [
    {
        path: '',
        component: Subject23Component
    },
    {
        path: 'blah',
        component: Subject23Component
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SubjectsRoutingModule {}