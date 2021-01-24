import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import {login} from  './../../global';
import { Storage } from '@ionic/storage';
import { ProductoPage } from 'src/app/producto/producto.page';
import { Router } from '@angular/router';
import { AlertController, MenuController, ModalController } from '@ionic/angular';




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
    private menuCtrl: MenuController) { }

  ngOnInit() {}

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
}
