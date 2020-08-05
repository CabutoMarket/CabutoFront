import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageSplashPage } from './page-splash.page';

const routes: Routes = [
  {
    path: '',
    component: PageSplashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageSplashPageRoutingModule {}
