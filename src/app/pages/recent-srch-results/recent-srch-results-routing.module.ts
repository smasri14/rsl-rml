import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecentSrchResultsPage } from './recent-srch-results.page';

const routes: Routes = [
  {
    path: '',
    component: RecentSrchResultsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecentSrchResultsPageRoutingModule {}
