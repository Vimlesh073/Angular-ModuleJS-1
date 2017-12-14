import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CrudCompComponent } from './crud-comp/crud-comp.component';
import { CrudDetailComponent } from './crud-comp/crud-detail/crud-detail.component';
import { CrudListComponent } from './crud-comp/crud-list/crud-list.component';
import { CrudService } from './crud-comp/services/crudservice';

@NgModule({
  declarations: [
    AppComponent,
    CrudCompComponent,
    CrudDetailComponent,
    CrudListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
