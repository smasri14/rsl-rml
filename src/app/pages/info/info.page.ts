import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage {

  constructor(private router:Router){}

  goTo(pth:string){
    this.router.navigate([pth])
  }

}
