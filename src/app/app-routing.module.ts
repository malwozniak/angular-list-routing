import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPersonComponent } from './components/add-person/add-person.component';
import { DetailsComponent } from './components/details/details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  { path: '/list', component: ListComponent },
  { path: '/details/:id', component: DetailsComponent },
  { path: '/add', component: AddPersonComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  // w przeciwnym wypadku powrót do home
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
