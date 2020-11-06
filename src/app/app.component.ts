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
    private loadingCtrl: LoadingController,
    private alert: AlertController,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.getStorage();
      this.getImage();
    });
  }

  public name : String="";
  public lastname: String=""; 
  private fullname:String="";
  private image:String="";

  getStorage(){
		this.storage.get('name').then((val) => {
      if(val ==null){
        this.name = "";
      }else{
        this.name=val.toUpperCase();
        console.log('name: ',this.name.toUpperCase());
        this.storage.get('apellido').then((val) => {
          if(val == null){
            this.lastname = "";
          }else{
            this.lastname=val.toUpperCase();
            console.log('apellido: ',this.lastname.toUpperCase());
            console.log(this.fullname.toUpperCase())
          }
        });
      }
  });
  }

  
  getImage(){
    this.storage.get('name').then((val) => {
      if(val ==null){
        this.image = "../assets/img/avatar.png";
      }else{
        this.image=val;
      }
    });
  }

  private action: String ="Iniciar Sesión";
  
  initOrOut(){
    this.storage.get('name').then((nombre) => {
      if(login.login ==false && nombre == null ){
        this.showLoadingOut();
        this.action="Iniciar Sesión";
      }else{ 
        this.showLoadingIn();
        this.action="Cerrar Sesión";
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

  showLoadingOut() {  
    this.loadingCtrl.create({  
      message: 'Loading.....'   
      }).then((loading) => {  
       loading.present();{
        this.logout();
      } 
       setTimeout(() => {   
         loading.dismiss();  
       }, 1000 );   
      });  
    }

    showLoadingIn() {  
      this.loadingCtrl.create({  
        message: 'Loading.....'   
        }).then((loading) => {  
         loading.present();{
          this.router.navigateByUrl('/login');
        } 
         setTimeout(() => {   
           loading.dismiss();  
         }, 1000 );   
        });  
      }



async mensaje(titulo:string,subtitulo:string,mensaje:string) {
    const alert = await this.alert.create({
      cssClass: titulo,
      header: titulo,
      subHeader: subtitulo,
      message: mensaje,
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });

    await alert.present();
  }
}
