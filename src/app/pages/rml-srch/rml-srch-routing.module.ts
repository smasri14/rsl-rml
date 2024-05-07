import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RmlSrchPage } from './rml-srch.page';

const routes: Routes = [
  {
    path: '',
    component: RmlSrchPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RmlSrchPageRoutingModule {}
