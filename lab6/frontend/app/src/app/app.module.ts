import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CrudRoutingModule } from './crud/crud-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CrudService } from './crud/crud.service';


import { AppComponent } from './app.component';
import { CreateComponent } from './crud/create/create.component';
import { DetailsComponent } from './crud/details/details.component';
import { UpdateComponent } from './crud/update/update.component';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    DetailsComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    SlimLoadingBarModule,
    CrudRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }


