import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MaterialSheetsModule } from '../material.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddPersonComponent } from './components/add-person/add-person.component';
import { DetailsComponent } from './components/details/details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ListComponent } from './components/list/list.component';
import { LocalStorageRefService } from './service/local-storage-ref-service.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    MaterialSheetsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: [
    AppComponent,
    AddPersonComponent,
    DetailsComponent,
    NotFoundComponent,
    ListComponent,
  ],
  // providers: [LocalStorageRefService],

  bootstrap: [AppComponent],
})
export class AppModule {}
