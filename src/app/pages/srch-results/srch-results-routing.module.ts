import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SrchResultsPage } from './srch-results.page';

const routes: Routes = [
  {
    path: '',
    component: SrchResultsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SrchResultsPageRoutingModule {}
