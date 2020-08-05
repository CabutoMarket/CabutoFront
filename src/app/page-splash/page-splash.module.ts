import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageSplashPageRoutingModule } from './page-splash-routing.module';

import { PageSplashPage } from './page-splash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageSplashPageRoutingModule
  ],
  declarations: [PageSplashPage]
})
export class PageSplashPageModule {}
