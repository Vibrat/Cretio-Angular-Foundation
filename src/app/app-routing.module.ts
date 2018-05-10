import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';

const routes: Routes = [
    { path: 'menu-bar', component: MenuBarComponent }
];

@NgModule({
  exports:  [ RouterModule ],
  imports:  [ RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }
