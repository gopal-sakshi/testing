import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { Sidenav2Component } from './components/sidenav2/sidenav2.component';

const routes: Routes = [
    {
        path: '',
        component: Sidenav2Component
    },
    {
        path: 'sidenav2',
        component: Sidenav2Component
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class Material23RoutingModule {}