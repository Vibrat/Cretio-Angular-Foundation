import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsRouterModule } from './posts-router.module';

import { PostsComponent } from './posts.component';
import { PostComponent } from '../post/post.component';

@NgModule({
  imports: [
    CommonModule,
    PostsRouterModule
  ],
  declarations: [ PostsComponent, PostComponent ],
})

export class PostsModule { }
