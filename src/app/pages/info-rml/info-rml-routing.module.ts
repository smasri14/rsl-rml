import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoRmlPage } from './info-rml.page';

const routes: Routes = [
  {
    path: '',
    component: InfoRmlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoRmlPageRoutingModule {}
