import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RmlSrchThqtrPage } from './rml-srch-thqtr.page';

const routes: Routes = [
  {
    path: '',
    component: RmlSrchThqtrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RmlSrchThqtrPageRoutingModule {}
