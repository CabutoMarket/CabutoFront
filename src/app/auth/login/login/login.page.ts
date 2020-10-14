import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthService } from '../../servicios/auth.service';
import { LoadingController } from '@ionic/angular';
import { AlertController, ToastController,Platform } from '@ionic/angular';
/*import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireAuthModule } from '@angular/fire/auth';

import * as firebase from 'firebase/app';

import { Platform } from '@ionic/angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
*/

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {
	validacion : {};
  public alertShown: boolean = false;
  picture:string ;
  name:string;
  email:string;

  isLoggedIn: boolean = false
  user: any

  constructor(private  authService:  AuthService, private  router:  Router, private loading: LoadingController,
    private alert: AlertController,
    private toast: ToastController,
    private platform: Platform,
    /*private afAuth: AngularFireAuth,
    private afAuth2: AngularFireAuthModule,
    private platform: Platform,
    private googlePlus: GooglePlus,
    private fb: Facebook*/) { }
	
  ngOnInit() {
  }

  verificar(form){
	form = form.value
	console.log(form)
  console.log(form.correo)
  console.log(form.contrasena)
	this.authService.VerificarUser(form).subscribe(data=> {
    /*this.validacion=data;*/
    console.log(data.valid)
    if (data.valid == "OK"){
      //this.router.navigateByUrl('/producto');
      this.router.navigateByUrl('/producto');
    }
    else{
      this.mensaje("Acceso Incorrecto","Algo salió mal","Su correo o contraseña están incorrectos");
      this.router.navigateByUrl('/login');
    }
		
	  })
  }


  async forgotPass() {
    const forgot = await this.alert.create({
      cssClass: 'Forgot Password?',
      header:'Forgot Password?',
      message: "Enter you email address to send a reset link password.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler:  data => {
            console.log('Send clicked');
             this.presentToast();

          }
        }
      ]
    });
    forgot.present();
  }


async presentToast() {
    const toast = await this.toast.create({
              message: 'Email was sended successfully',
              duration: 3000,
              position: 'top',
              cssClass: 'dark-trans',
              /*closeButtonText: 'OK',
              showCloseButton: true*/
    });
    toast.present();
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

  facebook(){
    //this.router.navigateByUrl('/registro-fb');
    this.authService.loginwithFacebook().then(res=>{
      const usuario = res.user;
      var mail = usuario.email;
      var contra = usuario.displayName;
      
      //this.router.navigateByUrl('/producto');
      const log=  {'correo': mail,
        'contrasena': contra
      }
      this.authService.VerificarUser(log).subscribe(data=> {
        console.log(data.valid)
        if (data.valid == "OK"){
          this.router.navigateByUrl('/producto');
        }
        else{
          this.router.navigateByUrl('/registro-fb');
        }
        
      })
      
      }).catch(err =>{
        this.mensaje("Fallo de conexión","algo salio mal","No se pudo iniciar sesión");
      })
    }
  }




