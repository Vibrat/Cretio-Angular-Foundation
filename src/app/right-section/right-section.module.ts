import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogComponent } from '../components/blog/blog.component';
import { PortfolioComponent  } from '../components/portfolio/portfolio.component';
import { RightSectionComponent } from './right-section.component';

// We add ReactiveFormsModule here since it's active only within a module, not outside
import { ReactiveFormsModule } from '@angular/forms';
import  { ContactFormModule } from '../components/contact-form/contact-form.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContactFormModule,
     RouterModule,
  ],
  declarations: [ BlogComponent, PortfolioComponent, RightSectionComponent ],
  exports: [ RightSectionComponent ]
})
export class RightSectionModule { }
