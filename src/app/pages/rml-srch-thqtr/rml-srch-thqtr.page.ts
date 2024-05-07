import { Component } from '@angular/core';
import { ChemsService } from "src/app/services/chemicals.service"

@Component({
  selector: 'app-rml-srch-thqtr',
  templateUrl: './rml-srch-thqtr.page.html',
  styleUrls: ['./rml-srch-thqtr.page.scss'],
})
export class RmlSrchThqtrPage {
  items: any[];
  //itemType:string = "rmlThqtr";
  constructor
  (
    public chmSrv: ChemsService
  ) {
    this.items = chmSrv.params["rml-srch-thqtr"];
  }
}





/*[
      [0,"Target Risk: 1E-6 and Hazard Quotient: 1.0"]
      , [0,"Target Risk: 1E-6 and Hazard Quotient: 0.1"]
    ];

  ]
*/
/*
  }


    toggleItem(item:any){
      //console.log(item);
      console.log(this.items);
      item[0] == 0? item[0]=1 : item[0]=0;
      this.appComponent.allParams['rslThqtr'] = this.items;
      console.log(this.appComponent.allParams);
      //console.log(item);

    }

    toggleChecks(chk:number){
      for (let i=0; i<this.items.length; i++){
        this.items[i][0]=chk;
      }
    }

    goBack(){
      this.appComponent.goBack();
    }

    goTo(rt:string){
      this.appComponent.goTo(rt);
      return;

      if (
        !this.items.find((x) => {return x[0] !== 0})
      ){
        this.presentAlert("Error", "At least one Target Risk must be checked!");
        return;
      }

      this.router.navigate([rt]);
    }

    async presentAlert(ttl: string, msg: string) {
      const alert = await this.alertControler.create({
        header: ttl,
        message: msg,
        buttons: ['OK']
      });
      await alert.present();
    }
*/



