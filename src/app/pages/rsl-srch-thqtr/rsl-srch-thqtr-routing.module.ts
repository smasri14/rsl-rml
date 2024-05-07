import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RslSrchThqtrPage } from './rsl-srch-thqtr.page';

const routes: Routes = [
  {
    path: '',
    component: RslSrchThqtrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RslSrchThqtrPageRoutingModule {}
