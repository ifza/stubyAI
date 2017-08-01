import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyViewPage} from '../myview/myview';

@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomePage {
  public myview:any = MyViewPage;

  // @ViewChild('myNav') nav: NavController
  // public MyViewPage:any = MyViewPage;   
  constructor(public navCtrl: NavController) { 

   }
  goPage(){
    console.log('click')
    this.navCtrl.push(MyViewPage);
  }
  goToRoot(){
    console.log(111);
  }
}
