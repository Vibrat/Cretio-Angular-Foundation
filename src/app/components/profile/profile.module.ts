import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from "./profile.component";
import { ProfileRouterModule } from "./profile-router.module";

@NgModule({
  imports: [
    CommonModule,
      ProfileRouterModule
  ],
  declarations: [ ProfileComponent ]
})
export class ProfileModule { }
