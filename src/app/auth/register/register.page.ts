import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthService } from '../auth.service';
import { LoadingController } from '@ionic/angular';
import { AlertController, ToastController } from '@ionic/angular';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
	constructor(private  authService:  AuthService, private  router:  Router, private loading: LoadingController,
    private alert: AlertController,
    private toast: ToastController,
    private emailComposer: EmailComposer,) { }
	
  ngOnInit() {
  }

register(form){
	form = form.value
	console.log(form)
  console.log(form.confirmar)
  console.log(form.contrasena)
  var contra = form.contrasena;
  var conf = form.confirmar
  if(contra == conf){
    this.authService.addUser(form).subscribe(data=> {
    console.log("imprimiendo data",data, form)
    if(data.valid == "OK"){
      this.mensaje("Registro","Registro exitoso");
      this.router.navigateByUrl('/login');
    }else{
      this.mensaje("Error", "Parece que algo ha ocurrido");
      this.router.navigateByUrl('/register'); 
    }

  })
  }else if (contra!= conf){
    this.mensaje("Registro Fallido","Las contraseñas no coinciden");
    this.router.navigateByUrl('/register'); 
  }
  /*
	this.authService.addUser(form).subscribe(data=> {
		console.log("imprimiendo data",data, form)
		this.router.navigateByUrl('/login');
	})*/
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


sendMail(correo:string){
  let email = {
  to: correo,
  cc: '',
  bcc: ['', ''],
  attachments: [
    'file:../assets/img/cabuto.png',
  ],
  subject: 'Registro',
  body: 'Se acaba de registrar exitosamente a la app de cabuto',
  isHtml: true
}
this.emailComposer.open(email);
}


}
/*
register(form) {
	form = form.value
	console.log(form)
    this.authService.addUser(form.value).subscribe((res) => {
      this.router.navigateByUrl('/home');
    });
  }
}

register(form) {
    this.authService.addUser(form.value).subscribe((res) => {
      this.router.navigateByUrl('/home');
    });
  }
*/