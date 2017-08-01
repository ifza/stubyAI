import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import {ServePage} from '../pages/serve/serve';
import { ProductPage } from '../pages/product/product';
import { TeamPage } from '../pages/about/team/team';
import { Company } from '../pages/about/company/main';
import { Banner } from '../pages/component/banner/main';
import { Map } from '../pages/component/map/main';

import { MyViewPage } from '../pages/myview/myview';

@NgModule({
  declarations: [MyApp,HomePage,AboutPage,ServePage,ProductPage,MyViewPage,TeamPage,Company,Banner,Map],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp,HomePage,AboutPage,ServePage,ProductPage,MyViewPage,TeamPage,Company,Banner,Map],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

