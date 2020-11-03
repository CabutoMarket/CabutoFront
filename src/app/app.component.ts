import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AlertController, LoadingController} from '@ionic/angular';
import { Storage } from '@ionic/storage';

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
    });
  }

  private name : String = this.storage.get('name').then().toString();
  private lastname: String = this.storage.get('apellido').toString();
  private fullname = this.name.concat(this.lastname.toString());

  logout() {
    this.storage.get('name')
      .then(
        data => {
          console.log(data)
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
