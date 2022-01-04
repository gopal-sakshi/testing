import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { MatForms23Component } from './components/mat-forms23/mat-forms23.component';
import { MatHome12Component } from './components/mat-home12/mat-home12.component';
import { MatTable12Component } from './components/mat-table12/mat-table12.component';
import { Sidenav2Component } from './components/sidenav2/sidenav2.component';

const routes: Routes = [
    {
        path: '',
        component: MatHome12Component
    },
    {
        path:'mat-forms23',
        component: MatForms23Component
    },
    {
        path: 'sidenav2',
        component: Sidenav2Component
    },
    {
        path: 'mat-table12',
        component: MatTable12Component
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class Material23RoutingModule {}