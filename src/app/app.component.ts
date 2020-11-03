import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AlertController, LoadingController} from '@ionic/angular';
import { Storage } from '@ionic/storage';
import {login} from  '././global'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private storage: Storage,
    private loadingCtrl: LoadingController  
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.getStorage();
    });
  }

  public name : String="";
  public lastname: String=""; 
  private fullname:String="";
  

  getStorage(){
		this.storage.get('name').then((val) => {
      if(val ==null){
        this.name = "";
      }else{
        this.name=val.toUpperCase();
        console.log('name: ',this.name);
        this.storage.get('apellido').then((val) => {
          if(val == null){
            this.lastname = "";
          }else{
            this.lastname=val.toUpperCase();
            console.log('apellido: ',this.lastname);
            console.log(this.fullname)
          }
        });
      }
  });
  }

  
  
  

  logout() {
    this.storage.clear()
      .then(
        data => {
          console.log(data)
          login.login =false;
          //this.ngOnInit()
          this.name = "";
          this.lastname= "";
          this.router.navigateByUrl('/producto');
        },
        error => console.error(error)
      );
  }

  showLoading() {  
    this.loadingCtrl.create({  
      message: 'Loading.....'   
      }).then((loading) => {  
       loading.present();{
        this.logout();
      } 
       setTimeout(() => {   
         loading.dismiss();  
       }, 2000 );   
      });  
    }
}
