import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RmlSrchThqtrPageRoutingModule } from './rml-srch-thqtr-routing.module';

import { RmlSrchThqtrPage } from './rml-srch-thqtr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RmlSrchThqtrPageRoutingModule
  ],
  declarations: [RmlSrchThqtrPage]
})
export class RmlSrchThqtrPageModule {}
