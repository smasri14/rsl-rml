import { Component } from '@angular/core';
//import { AppComponent } from 'src/app/app.component';
import { ChemsService } from "./../../services/chemicals.service"
//import { Events } from "src/app/services/chemicals.service"

@Component({
  selector: 'app-recent-srch-results',
  templateUrl: './recent-srch-results.page.html',
  styleUrls: ['./recent-srch-results.page.scss'],
})
export class RecentSrchResultsPage {
  star:string = "N";
  sRslRml:string = 'rml-srch';
  items:any[] = [];
    constructor
  (
    public chmSrv: ChemsService
  ) {
    for (let i=0; i<chmSrv.params[this.sRslRml].length; i++){
      for (let j=0; j<chmSrv.params[this.sRslRml+'-thqtr'].length; j++){
        for (let k=0; k<chmSrv.params[this.sRslRml+'-scenarios'].length; k++){
          for (let m=0; m<chmSrv.params[this.sRslRml+'-media'].length; m++){
              this.items.push(
                {
                  chm: chmSrv.params[this.sRslRml][i]
                  , thq: chmSrv.params[this.sRslRml+'-thqtr'][j]
                  , scenario: chmSrv.params[this.sRslRml+'-scenarios'][k]
                  , media: chmSrv.params[this.sRslRml+'-media'][m]
                }
              )
          }
        }
      }
    }

    console.log(this.items);


  }

  starToggle2(ev:Event, x:string){
    console.log(ev);
    console.log(this);
    console.log(ev.target);

    //console.log(ev.target.getAttribute("name"));
    console.log(EventTarget.name);
  }

  starToggle(icn:any, chm:any, indx:number){


    /*
console.log(icn);
  if (icn.name === "star"){
    icn.name="star-outline";
  }else{
    icn.name="star";
  }
  */
/*
if (this.star === "Y"){
      this.star="N";
      this.chmSrv.params.favorites.splice(indx,1);
    } else {
      this.star="Y";
      this.chmSrv.params.favorites.push(chm);
    }
//    console.log(this.chmSrv.params.favorites);
*/
  }

  getStarType(chmId:number){
    for (let i=0; this.chmSrv.params['favorites'].length; i++){
      if (this.chmSrv.params['favorites'][2] === ""){
        return "star";
        break;
      }
    }
      return "star-outline";
      //  return "star";
  }

  /*
  <ion-icon
  style="margin-right:20px"
  color="primary"
  [name] = "getStarType(chm[2])"
  (click)="starToggle(chm, i);"
  ></ion-icon>


  showHideStar(){
    return
    "<ion-icon
    style="margin-right:20px"
    color="primary"
    [name] = "star==='N'? 'star-outline': 'star'"
    (click)="starToggle(chm, i);"
    ></ion-icon>

  }
  <div *ngFor="let fv of chmSrv.params['favorites'] ">
  <ion-icon
  style="margin-right:20px"
  color="primary"
  [name] = "star==='N'? 'star-outline': 'star'"
  (click)="starToggle(chm, i);"
  ></ion-icon>
</div>
*/

}

/*
if (url === "rml-srch-results" || url === "rsl-srch-results"){
  let sRslRml = url.split("-").splice(0,2).join("-");
  for (let i=0; i<chmSrv.params[sRslRml].length; i++){
    let fnd = "N";
    for (let j=0; j<chmSrv.params["recent-srch"].length; j++){
      if (chmSrv.params["recent-srch"][j][2] === chmSrv.params[sRslRml][i][2]){
        fnd = "Y";
        break;
      }
    }
    if (fnd === "N"){
      chmSrv.params["recent-srch"].push(chmSrv.params[sRslRml][i]);
    }
  }
  return;
}
}
*/
