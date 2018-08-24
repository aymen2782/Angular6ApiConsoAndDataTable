import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { AsComponent } from './as/as.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {MatButtonModule, MatTableModule, MatPaginatorModule, MatSortModule} from '@angular/material';
import { DataTableComponent } from './data-table/data-table.component'
import {DataTablesModule} from 'angular-datatables';
import { UsersComponent } from './users/users.component';
import { PhotoComponent } from './photo/photo.component';
import { PhotosComponent } from './photos/photos.component';
import { WordComponent } from './word/word.component';
import { PersonnesComponent } from './personnes/personnes.component';

@NgModule({
  declarations: [
    AppComponent,
    AsComponent,
    UsersComponent,
    PhotoComponent,
    PhotosComponent,
    WordComponent,
    PersonnesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
