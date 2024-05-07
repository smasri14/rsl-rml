import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RmlSrchMediaPageRoutingModule } from './rml-srch-media-routing.module';

import { RmlSrchMediaPage } from './rml-srch-media.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RmlSrchMediaPageRoutingModule
  ],
  declarations: [RmlSrchMediaPage]
})
export class RmlSrchMediaPageModule {}
