import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecentSrchPage } from './recent-srch.page';

const routes: Routes = [
  {
    path: '',
    component: RecentSrchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecentSrchPageRoutingModule {}
