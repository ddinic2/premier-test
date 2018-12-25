import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule,
  MatButtonModule,
  MatCheckboxModule,
  MatSelectModule,
  MatIconModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { LogInFormComponent } from './log-in-form/log-in-form.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    LogInFormComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    CommonModule,
    MatIconModule,
    MatSelectModule,
    HttpModule,
    HttpClientModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
