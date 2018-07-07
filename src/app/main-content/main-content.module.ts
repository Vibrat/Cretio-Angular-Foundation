import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainWelcomeComponent } from '../components/main-welcome/main-welcome.component';
import { LogosComponent } from '../components/logos/logos.component';
import { RightSectionModule } from '../right-section/right-section.module';
import { MainContentComponent } from './main-content.component';
import { PipesModule } from '../core/pipes/pipes.module';

@NgModule({
  declarations: [
      MainWelcomeComponent,
      LogosComponent,
      MainContentComponent
  ],
  imports: [
      CommonModule,
      RightSectionModule,
      PipesModule,
  ],
  exports: [ ]
})

export class MainContentModule { }
