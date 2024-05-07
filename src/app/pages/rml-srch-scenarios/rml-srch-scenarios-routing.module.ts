import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RmlSrchScenariosPage } from './rml-srch-scenarios.page';

const routes: Routes = [
  {
    path: '',
    component: RmlSrchScenariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RmlSrchScenariosPageRoutingModule {}
