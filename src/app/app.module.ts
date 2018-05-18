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

import { BlogComponent } from './components/blog/blog.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { MainWelcomeComponent } from './components/main-welcome/main-welcome.component';
import { LogosComponent } from './components/logos/logos.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    BlogComponent,
    ContactFormComponent,
    MainContentComponent,
    RightSectionComponent,
    PortfolioComponent,
    MainWelcomeComponent,
    LogosComponent,
    PageNotFoundComponent,
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
    /*
    HttpClientInMemoryWebApiModule.forRoot(
          InMemoryDataService, { dataEncapsulation: false }
    )
    */
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
