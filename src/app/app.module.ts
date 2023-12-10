import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    CommonModule,
    RouterOutlet,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: []
})
export class AppModule { }