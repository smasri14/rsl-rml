import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SrchResultsPageRoutingModule } from './srch-results-routing.module';

import { SrchResultsPage } from './srch-results.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SrchResultsPageRoutingModule
  ],
  declarations: [SrchResultsPage]
})
export class SrchResultsPageModule {}
