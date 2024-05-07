import { Component } from '@angular/core';
import { ChemsService } from "../../../app/services/chemicals.service"

@Component({
  selector: 'app-srch-results',
  templateUrl: './srch-results.page.html',
  styleUrls: ['./srch-results.page.scss'],
})
export class SrchResultsPage {
  star:string = "N";
  //sRslRml:string = 'rsl-srch';
  chm:any;

  constructor (
    public chmSrv: ChemsService
  ){

    for (let i=0; i<chmSrv.chms.length; i++){
      if (chmSrv.chms[i][2] == chmSrv.params["srch-results-chm"]){
        this.chm = chmSrv.chms[i];
        break;
      }
    }
  }
}

