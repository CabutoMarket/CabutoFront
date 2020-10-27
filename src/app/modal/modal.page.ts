import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController} from '@ionic/angular';
import { AuthService } from 'src/app/auth/servicios/auth.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  textInput = "";
  constructor(public navCtrol: NavController, public navParams: NavParams,
    public modalCtrl: ModalController,private alert: AlertController,private  authService:  AuthService,) { }

  ngOnInit() {
  }
  dismiss() {
    this.modalCtrl.dismiss();
  }

  enviar(){
    console.log(typeof(this.textInput))
    if(this.validarEmail(this.textInput)){
      console.log(this.textInput)
      this.authService.enviarCorreo(this.textInput).subscribe(data=> {
        if(data.valid == 'OK'){
          this.modalCtrl.dismiss();
        }else{
          this.mensaje("Acceso Incorrecto","Algo salió mal","Su correo  están incorrectos");
        }
      })
    }else{
      this.mensaje("Correo","Correo incorrecto","esto no sigue la forma correcta de un correo")
    }

  }

  validarEmail(valor){
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(valor) ? true : false;
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

