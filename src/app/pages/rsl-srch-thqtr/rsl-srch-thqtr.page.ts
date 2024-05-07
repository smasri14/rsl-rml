import { Component } from '@angular/core';
//import {AnalytesService} from 'src/app/services/analytes.service';
//import { AlertController } from '@ionic/angular';
//import { Router } from '@angular/router';
//import { AppComponent } from 'src/app/app.component';
import { ChemsService } from 'src/app/services/chemicals.service';

@Component({
  selector: 'app-rsl-srch-thqtr',
  templateUrl: './rsl-srch-thqtr.page.html',
  styleUrls: ['./rsl-srch-thqtr.page.scss'],
})
export class RslSrchThqtrPage {
    items: any[];
    constructor
    (
      public chmSrv: ChemsService
    ) {
      this.items = chmSrv.params["rsl-srch-thqtr"];
    }
  }

//  items:any[];
/*
  constructor
  (
    //private analytesServ:AnalytesService
     private router: Router
    , private alertControler: AlertController
    , public appComponent: AppComponent
  ) {
//      this.items = analytesServ.getAnalytesFilt("");
//      this.analytesServ.analytesFiltMsg.subscribe(message=>this.items = message);
*/
/*
this.items = [
          [0,"Target Risk: 1E-4  and Hazard Quotient: 1.0"]
          , [0,"Target Risk: 1E-4 and Hazard Quotient: 3.0"]
        ];

    }
*/
//this.items = appComponent.allParams['rslThqtr'];
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


}
*/
