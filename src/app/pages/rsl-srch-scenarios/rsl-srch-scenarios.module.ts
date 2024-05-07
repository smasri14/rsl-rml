import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RslSrchScenariosPageRoutingModule } from './rsl-srch-scenarios-routing.module';

import { RslSrchScenariosPage } from './rsl-srch-scenarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RslSrchScenariosPageRoutingModule
  ],
  declarations: [RslSrchScenariosPage]
})
export class RslSrchScenariosPageModule {}
