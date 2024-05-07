import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RslSrchPage } from './rsl-srch.page';

const routes: Routes = [
  {
    path: '',
    component: RslSrchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RslSrchPageRoutingModule {}
