import { FlashlightPage } from './../pages/flashlight/flashlight';
import { BarcodeScannerPage } from './../pages/barcode-scanner/barcode-scanner';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { SMS } from '@ionic-native/sms/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Flashlight } from '@ionic-native/flashlight';
import { JsonMenuPage } from '../pages/json-menu/json-menu';


@NgModule({
  declarations: [
    MyApp,
    HomePage,BarcodeScannerPage,
    ListPage,LoginPage,FlashlightPage,JsonMenuPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,BarcodeScannerPage,
    ListPage,LoginPage,FlashlightPage,JsonMenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,SMS,BarcodeScanner,Flashlight,JsonMenuPage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
