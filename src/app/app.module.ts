import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SwiperModule } from 'angular2-useful-swiper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from './core/pipes/pipes.module';

import { Endpoints } from './core/endpoints/endpoints.component';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { MainContentModule } from './main-content/main-content.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    HttpClientModule,
    MainContentModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
  ],
  providers: [
      { provide: 'endpoints', useClass: Endpoints}
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
