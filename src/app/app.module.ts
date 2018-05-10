import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { SwiperModule } from 'angular2-useful-swiper';


import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { MainContentComponent } from './main-content/main-content.component';
import { RightSectionComponent } from './right-section/right-section.component';

import { ApiService } from './api.service';
import { BlogComponent } from './components/blog/blog.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { MainWelcomeComponent } from './components/main-welcome/main-welcome.component';
import { LogosComponent } from './components/logos/logos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    ContactFormComponent,
    MainContentComponent,
    RightSectionComponent,
    BlogComponent,
    PortfolioComponent,
    MainWelcomeComponent,
    LogosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    HttpClientModule,
    /**
     * The HttpClientInMemoryWebApiModule module intercepts HTTP requests
     * and returns simulated server responses.
     * Remove it when a real server is ready to receive requests.
     */
    HttpClientInMemoryWebApiModule.forRoot(
          InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
      ApiService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
