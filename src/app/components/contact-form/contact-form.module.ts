import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDirective } from './form.directive';
import { ContactFormComponent } from './contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [ FormDirective, ContactFormComponent ],
  exports: [ ContactFormComponent ]
})
export class ContactFormModule { }
