import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsRouterModule } from './posts-router.module';

import { PostsComponent } from './posts.component';
import { PostComponent } from '../post/post.component';
import { SwiperSliderComponent } from './swiper-slider/swiper-slider.component';

@NgModule({
  imports: [
    CommonModule,
    PostsRouterModule
  ],
  declarations: [ PostsComponent, PostComponent, SwiperSliderComponent ],
})

export class PostsModule { }
