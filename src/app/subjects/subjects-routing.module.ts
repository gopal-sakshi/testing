import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeSubjectsComponent } from './components/home-subjects/home-subjects.component';

const routes: Routes = [
    { path: '', component: HomeSubjectsComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SubjectsRoutingModule {}