import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoRmlPageRoutingModule } from './info-rml-routing.module';

import { InfoRmlPage } from './info-rml.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoRmlPageRoutingModule
  ],
  declarations: [InfoRmlPage]
})
export class InfoRmlPageModule {}
