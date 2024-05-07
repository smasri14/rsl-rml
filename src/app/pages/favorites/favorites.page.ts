import { Component } from '@angular/core';
import { ChemsService } from './../../services/chemicals.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})

export class FavoritesPage {
  items: any[];
  constructor
  (
    public chmSrv: ChemsService
  ) {
    this.items = chmSrv.params['favorites'];
  }

  goToSrchResults(chmId:number){
    //alert(chmId);
    this.chmSrv.params["srch-results-chm"] = chmId;
    this.chmSrv.goTo('srch-results');
  }

}