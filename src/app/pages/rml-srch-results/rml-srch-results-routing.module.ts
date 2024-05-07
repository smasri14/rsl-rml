import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RmlSrchResultsPage } from './rml-srch-results.page';

const routes: Routes = [
  {
    path: '',
    component: RmlSrchResultsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RmlSrchResultsPageRoutingModule {}
