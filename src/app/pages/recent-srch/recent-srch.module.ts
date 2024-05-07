import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecentSrchPageRoutingModule } from './recent-srch-routing.module';

import { RecentSrchPage } from './recent-srch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecentSrchPageRoutingModule
  ],
  declarations: [RecentSrchPage]
})
export class RecentSrchPageModule {}
