
import { Component } from '@angular/core';
import { ChemsService } from './../../services/chemicals.service';

@Component({
  selector: 'app-rsl-srch-results',
  templateUrl: './rsl-srch-results.page.html',
  styleUrls: ['./rsl-srch-results.page.scss'],
})
export class RslSrchResultsPage {
  sRslRml:string = 'rsl-srch';
  items:any[];

  constructor (
    public chmSrv: ChemsService
  ){
    this.items = [];
    this.chmSrv.rslChmsMsg.subscribe( msg => this.items = msg);
  }
  
  goToSrchResults(chmId:number){
    this.chmSrv.params["srch-results-chm"] = chmId;
    this.chmSrv.goTo('srch-results');
  }
    
}