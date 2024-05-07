import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RmlSrchMediaPage } from './rml-srch-media.page';

const routes: Routes = [
  {
    path: '',
    component: RmlSrchMediaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RmlSrchMediaPageRoutingModule {}
