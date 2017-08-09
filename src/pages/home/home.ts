import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import{MyViewPage} from '../myview/myview';
import {AboutPage} from '../about/about';
import {ProductPage} from '../product/product';
import {ServePage} from '../serve/serve';

@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomePage {
public about:any= AboutPage;
public product:any = ProductPage;
public serve:any= ServePage;
  // @ViewChild('myNav') nav: NavController
  // public MyViewPage:any = MyViewPage;   
  constructor(public navCtrl: NavController) { 

   }
  goPage(){
    console.log('222')
    this.navCtrl.push(MyViewPage);
  }

}
