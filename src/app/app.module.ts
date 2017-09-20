import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



import { CheckWriter }  from './app.CheckWriter';

@NgModule({ 
  imports:      [ BrowserModule ,FormsModule],
  declarations: [ CheckWriter],
  bootstrap:    [ CheckWriter]
})
export class AppModule { }
