import { Component } from '@angular/core';
import { ChemsService } from './../../services/chemicals.service';

@Component({
  selector: 'app-rml-srch',
  templateUrl: './rml-srch.page.html',
  styleUrls: ['./rml-srch.page.scss'],
})
export class RmlSrchPage {

  items:any[]=[];
  itemType:string = "rmlChms";

  constructor(
     public chmSrv: ChemsService
  ) {
    this.chmSrv.rmlChmsMsg.subscribe( msg => this.items = msg);
    this.items = [...chmSrv.rmlChms];
  }

}
