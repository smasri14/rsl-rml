import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RmlSrchResultsPageRoutingModule } from './rml-srch-results-routing.module';

import { RmlSrchResultsPage } from './rml-srch-results.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RmlSrchResultsPageRoutingModule
  ],
  declarations: [RmlSrchResultsPage]
})
export class RmlSrchResultsPageModule {}
