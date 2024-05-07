import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoGenPage } from './info-gen.page';

const routes: Routes = [
  {
    path: '',
    component: InfoGenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoGenPageRoutingModule {}
