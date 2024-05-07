import { Component } from '@angular/core';
import { ChemsService } from './../../services/chemicals.service';

@Component({
  selector: 'app-rml-srch-results',
  templateUrl: './rml-srch-results.page.html',
  styleUrls: ['./rml-srch-results.page.scss'],
})
export class RmlSrchResultsPage {

  sRslRml:string = 'rml-srch';
  items:any[];

  constructor (
    public chmSrv: ChemsService
  ){
    this.items = [];
    this.chmSrv.rmlChmsMsg.subscribe( msg => this.items = msg);
  }

  goToSrchResults(chmId:number){
    this.chmSrv.params["srch-results-chm"] = chmId;
    this.chmSrv.goTo('srch-results');
  }

}
