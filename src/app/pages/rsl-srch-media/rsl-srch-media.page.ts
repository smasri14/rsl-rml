import { Component} from '@angular/core';
import { ChemsService } from "src/app/services/chemicals.service"

@Component({
  selector: 'app-rsl-srch-media',
  templateUrl: './rsl-srch-media.page.html',
  styleUrls: ['./rsl-srch-media.page.scss'],
})
export class RslSrchMediaPage {
  items: any[]=[];
  itemsRes: any[]=[];
  itemsInd: any[]=[];

  constructor (
       public chmSrv: ChemsService
  ) {
      this.items = chmSrv.params['rsl-srch-media'];
      this.itemsRes = chmSrv.params['rsl-srch-media'].filter(
        (x:any) => { return x[2]==='Res'; }
      );
      this.itemsInd = chmSrv.params['rsl-srch-media'].filter(
        (x:any) => { return x[2]==='Ind'; }
      );
  }
}
