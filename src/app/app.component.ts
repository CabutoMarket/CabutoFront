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

  private name : String="";
  private lastname: String=""; 
  private fullname:String="";
  

  getStorage(){
		this.storage.get('name').then((val) => {
                     this.name=val;
                     this.name.concat("\n");
      console.log('name: ',this.name);
      this.storage.get('apellido').then((val) => {
        this.lastname=val;
        console.log('apellido: ',this.lastname);
        //this.fullname = this.name.concat(this.lastname.toString());
        console.log(this.fullname)
      });
    });
    //console.log("Aqui se ssupone que tnego todo")
    //console.log("nombre",this.name,"apellido",this.lastname)
    //return this.name.concat(this.lastname.toString());
  
  }
  
  
  

  logout() {
    this.storage.clear()
      .then(
        data => {
          console.log(data)
          login.login =false;
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
