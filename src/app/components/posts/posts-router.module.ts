import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { PostsComponent } from './posts.component';
import { PostComponent } from '../post/post.component';

const postRoutes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: PostsComponent },
            { path: ':slug', component: PostComponent }
        ]
    }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(postRoutes)
  ],
  exports: [ RouterModule ]
})

export class PostsRouterModule { }
