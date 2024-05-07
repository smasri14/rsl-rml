import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoGenPageRoutingModule } from './info-gen-routing.module';

import { InfoGenPage } from './info-gen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoGenPageRoutingModule
  ],
  declarations: [InfoGenPage]
})
export class InfoGenPageModule {}
