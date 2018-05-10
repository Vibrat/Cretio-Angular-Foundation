import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogComponent } from '../components/blog/blog.component';
import  { PortfolioComponent  } from '../components/portfolio/portfolio.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ BlogComponent, PortfolioComponent ]
})
export class RightSectionModule { }
