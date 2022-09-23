import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component'; /* FOI ADICIONADO PELA INSTALAÇÃO DO 
MATERIAL DESIGN PELO COMANDO: ng g c views/home  */


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent /* FOI ADICIONADO PELA INSTALAÇÃO DO 
    MATERIAL DESIGN PELO COMANDO: ng g c views/home  */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
