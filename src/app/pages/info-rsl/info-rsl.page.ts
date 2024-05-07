import { Component} from '@angular/core';
import { AppComponent } from './../../app.component'
@Component({
  selector: 'app-info-rsl',
  templateUrl: './info-rsl.page.html',
  styleUrls: ['./info-rsl.page.scss'],
})
export class InfoRslPage {
  constructor(private appComponent:AppComponent) { }

  goBack(){
    this.appComponent.goBack();
  }

}
