import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthService } from '../auth.service';
import { LoadingController } from '@ionic/angular';
import { AlertController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
	validacion : {};
  public alertShown: boolean = false

  constructor(private  authService:  AuthService, private  router:  Router, private loading: LoadingController,
    private alert: AlertController, private toast: ToastController) { }
	
  ngOnInit() {
  }

  verificar(form){
	form = form.value
	console.log(form)
	this.authService.VerificarUser(form).subscribe(data=> {
    this.validacion=data;
    console.log(this.validacion)
		this.router.navigateByUrl('/producto');
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




}


