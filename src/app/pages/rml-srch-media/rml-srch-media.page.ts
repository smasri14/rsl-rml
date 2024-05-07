import { Component} from '@angular/core';
import { ChemsService } from "src/app/services/chemicals.service"

@Component({
  selector: 'app-rml-srch-media',
  templateUrl: './rml-srch-media.page.html',
  styleUrls: ['./rml-srch-media.page.scss'],
})
export class RmlSrchMediaPage {
  items: any[]=[];
  itemsRes: any[]=[];
  itemsInd: any[]=[];

  constructor (
       public chmSrv: ChemsService
  ) {
      this.items = chmSrv.params['rml-srch-media'];
      this.itemsRes = chmSrv.params['rml-srch-media'].filter(
        (x:any) => { return x[2]==='Res'; }
      );
      this.itemsInd = chmSrv.params['rml-srch-media'].filter(
        (x:any) => { return x[2]==='Ind'; }
      );
  }
}
