import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import {login} from  './../../global';
import { Storage } from '@ionic/storage';
import { ProductoPage } from 'src/app/producto/producto.page';
import { Router } from '@angular/router';
import { AlertController, MenuController, ModalController } from '@ionic/angular';
import {NotificacionesService} from '../../servicios/notificaciones.service';
import {IncorrectoPage} from '../../aviso/incorrecto/incorrecto.page';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers: [ProductoPage]
})
export class FooterComponent implements OnInit {

  usuario:String="../assets/img/avatar.png";
  notificacion:String="../assets/img/notificaciones.png";
  home:String="../assets/img/home.png";
  producto:String="";
  notificaciones : {};
  number:String="0";

  change_pic(url:String){
    if(this.usuario==url){
      this.usuario="../assets/img/avatar_perfil2.png";
    }/*else if(this.notificacion==url){
      //this.notificacion="../assets/img/notificaciones_naranja.png";
      this.router.navigateByUrl('/notificaciones');

    }*/else{
      this.home="../assets/img/home_activo.png";
      
    }


  }

  constructor(private modalCtrl: ModalController,
    private storage: Storage, 
    private productoPage: ProductoPage,public  router:  Router,private alert: AlertController,
    private menuCtrl: MenuController,public notificacionesService: NotificacionesService) { }

  ngOnInit() {
     this.datos()
  }

  async openCart(){
    var bool =false
    this.storage.get('name').then((nombre) => {
      console.log('Name is', nombre);
      if( nombre == null ){
        bool = false;
      }else{
        bool = true;
      } 
      });

    if(login.login ==false && bool == null ){
      this.router.navigateByUrl('/login');
    }else{
      this.producto="../assets/img/home_activo.png";
      this.router.navigateByUrl('/producto');
    }
  }

  noti(){
    this.router.navigateByUrl('/notificaciones',{
      replaceUrl :true
    });
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

  datos(){
    console.log("refresh");
     this.notificacionesService.getNotificaciones().subscribe(data => {
       console.log(data)
       this.notificaciones=data;
       this.number =String(Object.entries(this.notificaciones).length)
       },(error)=>{
         console.log("algo salio mal")
         this.mensajeIncorrecto("Algo salió mal","error de conexión");
         console.error(error);
       }) 
  }

  getNumber(){
    var valor =String(Object.entries(this.notificaciones).length)
    return String(valor)
  }
}
