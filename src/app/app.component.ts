import { Component,ViewChild } from '@angular/core';
import { Platform,Tabs } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { ServePage } from '../pages/serve/serve';
import { ProductPage } from '../pages/product/product';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('mainTabs') tabRef:Tabs;

  // rootPage:any = HomePage; 
  home:any = HomePage;
  about:any = AboutPage;
  serve:any=ServePage;
  product:any=ProductPage;
  // myview=MyViewPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}


