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
  MatIconModule,
  MatAutocompleteModule,
  MatGridListModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { StringDateComponent } from './string-date/string-date.component';
import { AutoSuggestionComponent } from './auto-suggestion/auto-suggestion.component';
import { GameNumbersComponent } from './game-numbers/game-numbers.component';



@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    StringDateComponent,
    AutoSuggestionComponent,
    GameNumbersComponent
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
    HttpClientModule,
    MatAutocompleteModule,
    MatGridListModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
