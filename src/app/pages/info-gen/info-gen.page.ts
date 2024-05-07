import { Component } from '@angular/core';
import { AppComponent } from './../../app.component'

@Component({
  selector: 'app-info-gen',
  templateUrl: './info-gen.page.html',
  styleUrls: ['./info-gen.page.scss'],
})
export class InfoGenPage {

    constructor(private appComponent:AppComponent) { }
    goBack(){
      this.appComponent.goBack();
    }

}
