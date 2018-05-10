import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactFormComponent } from '../components/contact-form/contact-form.component';
import { RightSectionComponent } from '../right-section/right-section.component';
import { MainWelcomeComponent } from '../components/main-welcome/main-welcome.component';

@NgModule({
  declarations: [ ContactFormComponent, RightSectionComponent, MainWelcomeComponent ],
  imports: [
    CommonModule,
  ],
})
export class MainContentModule { }
