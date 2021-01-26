import { Router } from '@angular/router';
import { AlertController, LoadingController, ModalController, NavController, NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import {NotificacionesService} from '../servicios/notificaciones.service';
//import {FooterComponent} from '../components/footer/footer.component';

@Component({
  selector: 'app-detalle-notificacion',
  templateUrl: './detalle-notificacion.page.html',
  styleUrls: ['./detalle-notificacion.page.scss'],
})
export class DetalleNotificacionPage implements OnInit {

  imagen = ""
  asunto = ""
  mensaje = ""
  id = ""

  constructor(public navCtrol: NavController, public navParams: NavParams,private  router:  Router,
    public modalCtrl: ModalController,
    private alert: AlertController,
    public notificacionService: NotificacionesService,
    private loading: LoadingController,/*public footer:FooterComponent*/) { }

  ngOnInit() {
    this.imagen = this.navParams.get('imagen')
    this.asunto = this.navParams.get('asunto')
    this.mensaje = this.navParams.get('mensaje')
    this.id = this.navParams.get('id')
  }

  salir(){
    console.log("notificacion abrir",this.id)
    this.notificacionService.actualizarEstado(this.id).subscribe(data => {
      console.log(data)
      //this.footer.number=String(parseInt(String(this.footer.number))-1)
    })
    this.modalCtrl.dismiss();
  }

}
