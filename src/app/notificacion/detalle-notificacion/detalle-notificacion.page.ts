import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-detalle-notificacion',
  templateUrl: './detalle-notificacion.page.html',
  styleUrls: ['./detalle-notificacion.page.scss'],
})
export class DetalleNotificacionPage implements OnInit {

  titulo = ""
  mensaje = ""
  imagen = ""
  constructor(public navCtrol: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController) { }

    ngOnInit() {
      this.titulo = this.navParams.get('titulo')
      this.mensaje = this.navParams.get('mensaje')
      this.imagen = "http://cabutoshop.pythonanywhere.com"+this.navParams.get('imagen')
    }
  
    salir(){
      this.modalCtrl.dismiss();
    }

}
