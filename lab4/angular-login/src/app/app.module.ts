import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { HttpClientModule } from "@angular/common/http";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { DataService } from "./data.service";
import { NewComponentComponent } from './new-component/new-component.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [AppComponent,
    NewComponentComponent,
    ProductListComponent,
    ProductDetailComponent,
    LoginComponent,
    AdminComponent],
  imports: [BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataService)],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
