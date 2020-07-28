import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { PdfPlayerV2Module } from 'pdf-player-v2';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PdfPlayerV2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
