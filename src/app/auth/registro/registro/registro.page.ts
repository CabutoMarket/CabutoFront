import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthService } from '../../servicios/auth.service';
import { LoadingController } from '@ionic/angular';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})


export class RegistroPage implements OnInit {
	constructor(private  authService:  AuthService, private  router:  Router, private loading: LoadingController,
    private alert: AlertController,
    private toast: ToastController,
    /*private emailComposer: EmailComposer,*/) { }
	
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
      this.router.navigateByUrl('/registro'); 
    }

  })
  }else if (contra!= conf){
    this.mensaje("Registro Fallido","Las contraseñas no coinciden");
    this.router.navigateByUrl('/registro'); 
  }
  
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