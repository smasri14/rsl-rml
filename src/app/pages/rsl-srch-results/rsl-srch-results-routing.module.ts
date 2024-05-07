import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RslSrchResultsPage } from './rsl-srch-results.page';

const routes: Routes = [
  {
    path: '',
    component: RslSrchResultsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RslSrchResultsPageRoutingModule {}
