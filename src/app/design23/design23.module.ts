import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { Search44Component } from './components/search44/search44.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SearchService } from './services/search.service';
import { Search45Component } from './components/search45/search45.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { ItemComponent } from './components/item/item.component';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search44', component: Search44Component },
  { path: 'search45', component: Search45Component }
]

@NgModule({
  declarations: [
    HomeComponent,
    Search44Component,
    Search45Component,
    SearchResultsComponent,
    SearchFormComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [
    SearchService
  ]
})
export class Design23Module { }
