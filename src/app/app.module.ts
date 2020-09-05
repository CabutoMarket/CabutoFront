import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';

import {ProductoService} from '../app/servicios/producto.service';
import { AuthModule } from  './auth/auth.module';

/*FireDataBase*/
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';


const config = {
    apiKey: "AIzaSyCahlCyRuwsAMlffYO3YgcbKTUeQnjhnq8",
    authDomain: "cabutomarket.firebaseapp.com",
    databaseURL: "https://cabutomarket.firebaseio.com",
    projectId: "cabutomarket",
    storageBucket: "cabutomarket.appspot.com",
    messagingSenderId: "416818436367",
    appId: "1:416818436367:web:05a4d2a36ea10ebe60467a",
    measurementId: "G-8FPHV96HV5"
  };


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
  AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage 
  HttpClientModule,
   
   IonicModule.forRoot(), AppRoutingModule, AuthModule],
  providers: [
    StatusBar,
    ProductoService,
    Facebook,EmailComposer,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
