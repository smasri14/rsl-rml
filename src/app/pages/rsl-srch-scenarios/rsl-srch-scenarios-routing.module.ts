import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RslSrchScenariosPage } from './rsl-srch-scenarios.page';

const routes: Routes = [
  {
    path: '',
    component: RslSrchScenariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RslSrchScenariosPageRoutingModule {}
