import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoRslPage } from './info-rsl.page';

const routes: Routes = [
  {
    path: '',
    component: InfoRslPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoRslPageRoutingModule {}
