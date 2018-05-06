import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { AppRoutingModule } from './/app-routing.module';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { MainContentComponent } from './main-content/main-content.component';

import {ApiService} from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    ContactFormComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
      ApiService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
