import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { AlertController, LoadingController,ModalController} from '@ionic/angular';
import { Storage } from '@ionic/storage';
import {CorrectoPage} from '../aviso/correcto/correcto.page';
import {IncorrectoPage} from '../aviso/incorrecto/incorrecto.page';
import {NotificacionesService} from '../servicios/notificaciones.service';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
})
export class NotificacionesPage implements OnInit {

  notificaciones : {};

  constructor(public notificacionesService: NotificacionesService, private  router:  Router,private alert: AlertController,
    public loadingCtrl: LoadingController,
    private storage: Storage,
    public modalCtrl: ModalController,) { }

  ngOnInit() {
    this.cargaPantalla()
  }

  pantalla(){
    console.log("refresh");
     this.notificacionesService.getNotificaciones().subscribe(data => {
       console.log(data)
       this.notificaciones=data;
       var tol =Object.entries(this.notificaciones).length
       console.log(this.notificaciones);
       console.log(tol)
       if(tol==0){
        this.mensajeIncorrecto("No existen notificaciones disponibles","no exiten novedades");
       }
       },(error)=>{
         console.log("algo salio mal")
         this.mensajeIncorrecto("Algo salió mal","error de conexión");
         console.error(error);
       }) 
  }
  
  cargaPantalla() {  
    this.loadingCtrl.create({  
      message: 'Loading.....'   
    }).then((loading) => {  
      loading.present();{
        this.pantalla();
    } 
    setTimeout(() => {   
      loading.dismiss();  
    }, 1000 );   
    });  
    } 

  async mensajeCorrecto(titulo:string,mensaje:string){
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


  async mensajeIncorrecto(titulo:string,mensaje:string){
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


  desactivar(){
    this.mensajeCorrecto("Ha desactivado las notificaciones","Notificaciones desactivadas");
  }

  activar(){
    this.mensajeCorrecto("Ha activado las notificaciones","Notificaciones activadas");
  }


}
