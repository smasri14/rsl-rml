import { Component } from '@angular/core';
//import {AnalytesService} from 'src/app/services/analytes.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
//import { AppComponent } from './../../app.component';
import { ChemsService } from './../../services/chemicals.service';
//import { RmlChemData } from 'src/app/services/rml-chemicals';

@Component({
  selector: 'app-rsl-srch',
  templateUrl: './rsl-srch.page.html',
  styleUrls: ['./rsl-srch.page.scss'],
})
export class RslSrchPage {

  items:any[]=[];
  //params:any = {};
  //rslSrchVal:string = "";
  //component:RslSrchThqtrPage = RouterOutlet;

constructor
  (
   // private analytesServ:AnalytesService
     private router: Router
    , private alertControler: AlertController
//    , public appComponent: AppComponent
    , public chmSrv: ChemsService
  //  , private rmlChemData: RmlChemData

  ) {
    this.chmSrv.rslChmsMsg.subscribe( msg => this.items = msg);
    this.items = [...chmSrv.rslChms];

    //analytesServ.paramsMsg.subscribe(message=>this.params = message);

    //rslChmsMsg.subscribe(message=>this.items = message);

//    this.items = [...chemSrv.rslChms];
    //rmlChemData.chemicals.map((x) => x);

//    this.items = rmlChemData.chemicals.map((x) => x);
    //this.items = rmlChemData.chemicals;
    //console.log("items");
    //console.log(this.items);
    //rmlChemData.chemicals.map((x) => x);

//    this.items=[...rmlChemData.chemicals]
    //this.chemSrv.rslChmsMsg.subscribe(message=>this.items = message);
    //this.rslSrchVal = this.appComponent.params.rslSrchVal;

    //this.items = analytesServ.getAnalytesFilt("");
      //console.log("Saad");
      //console.log(this.items);
      //console.log(this.chemSrv.rmlChms);
      //this.items = this.chemSrv.rmlChms;

      //console.log(appComponent.rslChems);
      //this.items = chemSrv.chemicals;

      //      this.analytesServ.analytesFiltMsg.subscribe(message=>this.items = message);
      //this.analytesServ.paramsMsg.subscribe(message=>this.params = message);
      //this.params = this.analytesServ.getParams();

      //this.chemServ.rslChmsMsg.subscribe(message=>this.items = message);


  }
/*
  toggleItem(item:any){
    this.appComponent.toggleItem(item, 'rslSelected');
  }
  */
  toggleItem(itm:any){
    !itm[1] || itm[1] === 0? itm[1]=1 : itm[1]=0;
    //this.appComponent.toggleItem(item, 'rmlSelected');
  }

/*
  toggleItem(item:any){
    item.a[0] === 1? item.a[0]=0 : item.a[0]=1;
    if (item.a[0] === 1){
      this.appComponent.allParams['rslSelected'].push(item);
    } else {
      this.appComponent.allParams['rslSelected'].find((x:any,i:number)=>{
        if (x.a[1]===item.a[1]){
          this.appComponent.allParams['rslSelected'].splice(i);
          return;
        }
      });
    }
  }
*/
  uncheckAll(){
    for (let i=0; i<this.items.length; i++){
      this.items[i][1]=0;
    }
  }

  goTo(rt:string){
    this.router.navigate([rt]);
    /*
    this.appComponent.goTo(rt);
    return;
    if (
      !this.items.find((x) => {return x[0] === 1})
    ){
      this.presentAlert("Error", "At least one chemical must be checked!");
      return;
    }
*/
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
