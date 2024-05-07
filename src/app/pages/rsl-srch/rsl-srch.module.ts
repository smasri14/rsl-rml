import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RslSrchPageRoutingModule } from './rsl-srch-routing.module';

import { RslSrchPage } from './rsl-srch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RslSrchPageRoutingModule
  ],
  declarations: [RslSrchPage]
})
export class RslSrchPageModule {}
