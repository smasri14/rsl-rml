import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RslSrchMediaPage } from './rsl-srch-media.page';

const routes: Routes = [
  {
    path: '',
    component: RslSrchMediaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RslSrchMediaPageRoutingModule {}
