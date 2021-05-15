import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import {NotificacionesService} from '../../servicios/notificaciones.service';

declare var window;
@Component({
  selector: 'app-detalle-notificacion',
  templateUrl: './detalle-notificacion.page.html',
  styleUrls: ['./detalle-notificacion.page.scss'],
})
export class DetalleNotificacionPage implements OnInit {
  id = ""
  titulo = ""
  mensaje = ""
  imagen = ""
  constructor(public navCtrol: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public notificacionService: NotificacionesService) { }

    ngOnInit() {
      this.id = this.navParams.get('id')
      this.titulo = this.navParams.get('titulo')
      this.mensaje = this.navParams.get('mensaje')
      if(this.navParams.get('imagen')!= ""){
        this.imagen = "http://cabutoshop.pythonanywhere.com"+this.navParams.get('imagen')
      }
      }
  
    salir(){
      console.log("notificacion abrir",this.id)
      this.notificacionService.actualizarEstado(this.id).subscribe(data => {
        console.log(data)
        //this.footer.number=String(parseInt(String(this.footer.number))-1)
      })
      
      window.footer.datos()
      this.modalCtrl.dismiss();
    }

}
