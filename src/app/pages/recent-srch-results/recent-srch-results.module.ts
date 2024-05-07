import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecentSrchResultsPageRoutingModule } from './recent-srch-results-routing.module';

import { RecentSrchResultsPage } from './recent-srch-results.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecentSrchResultsPageRoutingModule
  ],
  declarations: [RecentSrchResultsPage]
})
export class RecentSrchResultsPageModule {}
