import { Component} from '@angular/core';
import { AppComponent } from './../../app.component'

@Component({
  selector: 'app-info-rml',
  templateUrl: './info-rml.page.html',
  styleUrls: ['./info-rml.page.scss'],
})
export class InfoRmlPage {

  constructor(private appComponent:AppComponent) { }
  goBack(){
    this.appComponent.goBack();
  }

}
