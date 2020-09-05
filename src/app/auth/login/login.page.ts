import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthService } from '../auth.service';
import { LoadingController } from '@ionic/angular';
import { AlertController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import * as firebase from 'firebase/app';

import { Platform } from '@ionic/angular';

/*import { GooglePlus } from '@ionic-native/google-plus/ngx';*/

import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

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
    private afAuth: AngularFireAuth,
    private afAuth2: AngularFireAuthModule,
    private platform: Platform,
    /*private googlePlus: GooglePlus,*/
    private fb: Facebook) { }
	
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
      this.router.navigateByUrl('/producto');
    }
    else{
      this.mensaje("Acceso Incorrecto","Su correo o contraseña están incorrectos");
      this.router.navigateByUrl('/login');
    }
		
	  })
  }

  forgotPass2(){

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


async mensaje(titulo:string,mensaje:string) {
    const alert = await this.alert.create({
      cssClass: titulo,
      header: titulo,
      subHeader: 'Subtitle',
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
/*
login() {
    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then(res => {
        console.log(res)
        if(res.status === "connected") {
          this.getUserDetails(res.authResponse.userID)
        } else {
          
        }
      })
      .catch(e => console.log('Error logging into Facebook', e));
  }

  getUserDetails(userid) {
    this.fb.api("/"+userid+"/?fields=id,email,name,picture",["public_profile"])
      .then(res => {
        this.isLoggedIn = true
        this.user = res
        console.log(this.user)
      })
      .catch(e => {
        console.log(e);
      });
  }
*/

/*
async loginFacebook() {

    const res = await this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());

    const user = res.user;

    console.log(user);

    this.picture = user.photoURL;

    this.name = user.displayName;

    this.email = user.email;

}*/


 loginFacebook() {

    if (this.platform.is('capacitor')) {

      this.loginFacebookAndroid();

    } else {

      this.loginFacebookWeb();

    }

  }

 

  async loginFacebookAndroid() {

    const res: FacebookLoginResponse = await this.fb.login(['public_profile', 'email']);

    const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);

    const resConfirmed = await this.afAuth.auth.signInWithCredential(facebookCredential);

    const user = resConfirmed.user;

    var picture = user.photoURL;

    var name = user.displayName;

    var email = user.email;

    console.log(picture)
    console.log(name)
    console.log(email)

  }

 

  async loginFacebookWeb() {

    const res = await this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());

    const user = res.user;

    console.log(user);

    var picture = user.photoURL;

    var name = user.displayName;

    var email = user.email;

    console.log(picture)
    console.log(name)
    console.log(email)

  }


}


