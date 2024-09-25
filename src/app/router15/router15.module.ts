import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BooksComponent } from './components/books/books.component';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { BookService } from './services/book.service';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroService } from './services/hero.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ClubsComponent } from './components/clubs/clubs.component';
import { ClubChildComponent } from './components/club-child/club-child.component';

import { RouteReuse23Service } from './services/route-reuse23.service';



const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'books', component: BooksComponent },
    { path: 'books/:id', component: BookDetailComponent },

    // I set reuse:true ---> look for this 'RouteReuse23Service'
    { path: 'heroes', component: HeroesComponent, data: { reuse: true }},
    // { path: 'heroes', component: HeroesComponent },


    { path: 'heroes/:id', component: HeroDetailComponent },
    { 
        path: 'clubs', 
        component: ClubsComponent, 
        children: [
            { path: ':clubId', component: ClubChildComponent }
        ]
    }
]

// use this if router15 is eager-loaded module
const routes23: Routes = [
    { path: 'router15', component: HomeComponent,
        children: [
            { path: 'books', component: BooksComponent },
            { path: 'books/:id', component: BookDetailComponent },
            { path: 'heroes', component: HeroesComponent, data: { reuse: true }},
            { path: 'heroes/:id', component: HeroDetailComponent },
            { path: 'clubs', component: ClubsComponent,  
                children: [
                    { path: ':clubId', component: ClubChildComponent }
                ]
            }
        ]
    },
]

@NgModule({
    declarations: [
        HomeComponent,
        BookDetailComponent,
        BooksComponent,
        HeroesComponent,
        HeroDetailComponent,
        ClubsComponent,
        ClubChildComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes23),
        FlexLayoutModule
    ],
    providers: [
        BookService,
        HeroService,
        // { provide: RouteReuseStrategy, useClass: RouteReuse23Service }
    ]
})
export class Router15Module { }
