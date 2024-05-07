import { Component } from '@angular/core';
import { ChemsService } from "src/app/services/chemicals.service"

@Component({
  selector: 'app-rml-srch-scenarios',
  templateUrl: './rml-srch-scenarios.page.html',
  styleUrls: ['./rml-srch-scenarios.page.scss'],
})
export class RmlSrchScenariosPage {
  items: any[];
  constructor
  (
    public chmSrv: ChemsService
  ) {
    this.items = chmSrv.params['rml-srch-scenarios'];
  }
}
