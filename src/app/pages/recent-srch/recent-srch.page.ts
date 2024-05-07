import { Component } from '@angular/core';
import { ChemsService } from './../../services/chemicals.service';

@Component({
  selector: 'app-recent-srch',
  templateUrl: './recent-srch.page.html',
  styleUrls: ['./recent-srch.page.scss'],
})
export class RecentSrchPage {
  items: any[];
  constructor
  (
    public chmSrv: ChemsService
  ) {
    this.items = chmSrv.params['recent-srch'];
  }

  goToSrchResults(chmId:number){
    //alert(chmId);
    this.chmSrv.params["srch-results-chm"] = chmId;
    this.chmSrv.goTo('srch-results');
  }

}
