import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RmlSrchScenariosPageRoutingModule } from './rml-srch-scenarios-routing.module';

import { RmlSrchScenariosPage } from './rml-srch-scenarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RmlSrchScenariosPageRoutingModule
  ],
  declarations: [RmlSrchScenariosPage]
})
export class RmlSrchScenariosPageModule {}
