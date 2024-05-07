import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RmlSrchPageRoutingModule } from './rml-srch-routing.module';

import { RmlSrchPage } from './rml-srch.page';
//import { TargetRiskHazardPipe } from './target-risk-hazard.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RmlSrchPageRoutingModule
  ],
  declarations: [RmlSrchPage
    //, TargetRiskHazardPipe, ScenariosPipe, ThqTrPipe, SenariosPipe, ExposureRoutesPipe, ResultsPipe, ChmDetailsPipe
  ]
})
export class RmlSrchPageModule {}
