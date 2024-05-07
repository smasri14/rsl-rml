import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RslSrchThqtrPageRoutingModule } from './rsl-srch-thqtr-routing.module';

import { RslSrchThqtrPage } from './rsl-srch-thqtr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RslSrchThqtrPageRoutingModule
  ],
  declarations: [RslSrchThqtrPage]
})
export class RslSrchThqtrPageModule {}
