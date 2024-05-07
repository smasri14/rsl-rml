import { Component } from '@angular/core';
import { ChemsService } from "./../../services/chemicals.service"

@Component({
  selector: 'app-rsl-srch-scenarios',
  templateUrl: './rsl-srch-scenarios.page.html',
  styleUrls: ['./rsl-srch-scenarios.page.scss'],
})
export class RslSrchScenariosPage {
  items: any[];
  constructor
  (
    public chmSrv: ChemsService
  ) {
    this.items = chmSrv.params['rsl-srch-scenarios'];
  }
}
