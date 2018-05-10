import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactFormComponent } from '../contact-form/contact-form.component';
import { RightSectionComponent } from '../right-section/right-section.component';

@NgModule({
  declarations: [ ContactFormComponent, RightSectionComponent ],
  imports: [
    CommonModule,
  ],
})
export class MainContentModule { }
