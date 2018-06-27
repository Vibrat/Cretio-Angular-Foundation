import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'post', loadChildren: 'app/components/posts/posts.module#PostsModule', canLoad: []  },
    { path: 'about-us', loadChildren: 'app/components/profile/profile.module#ProfileModule' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  exports:  [ RouterModule ],
  imports:  [ RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }
