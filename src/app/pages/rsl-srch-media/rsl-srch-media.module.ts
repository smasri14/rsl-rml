import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RslSrchMediaPageRoutingModule } from './rsl-srch-media-routing.module';

import { RslSrchMediaPage } from './rsl-srch-media.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RslSrchMediaPageRoutingModule
  ],
  declarations: [RslSrchMediaPage]
})
export class RslSrchMediaPageModule {}
