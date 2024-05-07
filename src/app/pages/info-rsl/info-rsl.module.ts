import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoRslPageRoutingModule } from './info-rsl-routing.module';

import { InfoRslPage } from './info-rsl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoRslPageRoutingModule
  ],
  declarations: [InfoRslPage]
})
export class InfoRslPageModule {}
