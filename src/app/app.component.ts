import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { login } from '././global';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { DetalleNotificacionPage } from './notificacion/detalle-notificacion/detalle-notificacion.page';
import { CorrectoPage } from './aviso/correcto/correcto.page';
import { IncorrectoPage } from './aviso/incorrecto/incorrecto.page';

declare var window;

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
    private modalCtrl: ModalController,
    private fcm: FirebaseX
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.getStorage();
      this.getImage();
      this.cargarBtn();
      this.fcm.onMessageReceived().subscribe(data => {
        console.log(data);
        if (data.messageType === "notification") {
          console.log("Notification message received");
          if (data.tap == "background") {
            console.log("Tapped in " + data.tap);
            if (data.image) {
              this.notificacion(data.titulo, data.mensaje, data.image);
            } else {
              this.notificacion(data.titulo, data.mensaje, "");
            }

          }else{
            if (data.image) {
              this.notificacion(data.titulo, data.mensaje, data.image);
            } else {
              this.notificacion(data.titulo, data.mensaje, "");
            }
          }
          
        }
      }, function (error) {
        console.error(error);
      });

      // refresh the FCM token
      this.fcm.onTokenRefresh().subscribe(token => {
        console.log(token);
      });
    });
  }

  public name: String = "";
  public lastname: String = "";
  private fullname: String = "";
  private image: String = "";

  getStorage() {
    console.log(login.login)
    this.storage.get('name').then((val) => {
      if (val == null) {
        this.name = "";
      } else {
        this.name = val.toUpperCase();
        console.log('name: ', this.name.toUpperCase());
        this.storage.get('apellido').then((val) => {
          if (val == null) {
            this.lastname = "";
          } else {
            this.lastname = val.toUpperCase();
            console.log('apellido: ', this.lastname.toUpperCase());
            console.log(this.fullname.toUpperCase())
          }
        });
      }
    });
  }


  getImage() {
    this.storage.get('name').then((val) => {
      if (val == null) {
        this.image = "../assets/img/avatar.png";
      } else {
        this.image = val;
      }
    });
  }

  public action: String = " ";

  initOrOut() {
    console.log("Estado del login", login.login)
    this.storage.get('name').then((nombre) => {
      console.log("Estoy por definir el boton del menu", nombre)
      if (this.action == "Iniciar Sesión") {
        this.showLoadingIn();
        //this.action="Iniciar Sesión";
      } else {
        this.showLoadingOut();
        //this.action="Cerrar Sesión";
      }
    });
  }

  cargarBtn() {
    console.log("Estado del login", login.login)
    this.storage.get('name').then((nombre) => {
      console.log("Estoy por definir el boton del menu", nombre)
      if (login.login == false && nombre == null) {
        //this.showLoadingOut();
        this.action = "Iniciar Sesión";
      } else {
        //this.showLoadingIn();
        this.action = "Cerrar Sesión";
      }
    });
  }


  logout() {
    this.storage.clear()
      .then(
        data => {
          console.log(data)
          login.login = false;
          console.log(login.login)
          //this.ngOnInit()
          this.name = "";
          this.lastname = "";
          this.action = "Iniciar Sesión";

          this.router.navigateByUrl('/footer/producto');
        },
        error => console.error(error)
      );
  }

  showLoadingOut() {
    this.loadingCtrl.create({
      message: 'Loading.....'
    }).then((loading) => {
      loading.present(); {
        this.logout();
        this.mensajeCorrecto("Cerrar Sesion", "Sesion cerrada exitosamente")
      }
      setTimeout(() => {
        loading.dismiss();
      }, 1000);
    });
  }

  showLoadingIn() {
    this.loadingCtrl.create({
      message: 'Loading.....'
    }).then((loading) => {
      loading.present(); {
        this.router.navigateByUrl('/login');
      }
      setTimeout(() => {
        loading.dismiss();
      }, 1000);
    });
  }

  perfil() {
    this.storage.get('name').then((nombre) => {
      console.log('Name is', nombre);
      if (login.login == false && nombre == null) {
        login.producto = true;
        this.router.navigateByUrl('footer/login');
      } else {
        this.router.navigateByUrl('/footer/perfil');
      }
    });
  }

  async mensaje(titulo: string, subtitulo: string, mensaje: string) {
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

  async notificacion(titulo: string, mensaje: string, imagen) {
    const modal = await this.modalCtrl.create({
      component: DetalleNotificacionPage,
      cssClass: 'CorrectoProducto',
      componentProps: {
        'titulo': titulo,
        'mensaje': mensaje,
        'imagen': imagen
      }
    });
    return await modal.present();
  }
  async mensajeCorrecto(titulo: string, mensaje: string) {
    const modal = await this.modalCtrl.create({
      component: CorrectoPage,
      cssClass: 'CorrectoProducto',
      componentProps: {
        'titulo': titulo,
        'mensaje': mensaje
      }
    });
    return await modal.present();
  }


  async mensajeIncorrecto(titulo: string, mensaje: string) {
    const modal = await this.modalCtrl.create({
      component: IncorrectoPage,
      cssClass: 'IncorrectoProducto',
      componentProps: {
        'titulo': titulo,
        'mensaje': mensaje
      }
    });
    return await modal.present();
  }
}
