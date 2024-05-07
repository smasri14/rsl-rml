import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RslSrchResultsPageRoutingModule } from './rsl-srch-results-routing.module';

import { RslSrchResultsPage } from './rsl-srch-results.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RslSrchResultsPageRoutingModule
  ],
  declarations: [RslSrchResultsPage]
})
export class RslSrchResultsPageModule {}
