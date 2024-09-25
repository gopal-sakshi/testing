import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './components/parent/parent.component';
import { DetailComponent } from './components/detail/detail.component';
import { SearchComponent } from './components/search/search.component';
import { RouteReuse11 } from './classes/route-reuse11';
import { RouteReuse23 } from './classes/route-reuse23';

const routes: Routes = [
    {
        path: 'parent',
        component: ParentComponent,
        children: [
            {
                path: 'detail/:detailId',
                component: DetailComponent,
                data: { alwaysRefresh: true }   // see "route-reuse23.ts" in "app/classes"
            }
        ]
    },
    {
        path: 'search',
        children: [
            {
                path: '',
                component: SearchComponent,
                data: { saveComponent: true }
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
    ],
    providers: [
        // README == RouteReuseStrategy doesnt work with lazy loaded modules; so use @ AppModule level
        // or use eager loaded modules
        // { provide: RouteReuseStrategy, useClass: RouteReuse11 }         // DEFAULT Angular
        // { provide: RouteReuseStrategy, useClass: RouteReuse23 },               
    ]
})
export class Router16Module { }
