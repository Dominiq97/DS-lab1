import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import{ MatInputModule } from '@angular/material/input';
import{ MatButtonModule } from '@angular/material/button';
import{ MatCardModule } from '@angular/material/card';
import{ MatFormFieldModule } from '@angular/material/form-field';
import{ MatCheckboxModule } from '@angular/material/checkbox';
import{ MatDatepickerModule } from '@angular/material/datepicker';
import{ MatRadioModule } from '@angular/material/radio';
import{ MatSelectModule} from '@angular/material/select';
import{ BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms'
import {ReactiveFormsModule} from '@angular/forms';
import { ContactComponent } from './contact/contact.component'


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
