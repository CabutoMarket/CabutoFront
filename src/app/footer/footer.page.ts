import { Component, OnInit } from '@angular/core';
import {login} from  '../global'
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { Storage } from '@ionic/storage';
import {NotificacionesService} from '../servicios/notificaciones.service';
import {IncorrectoPage} from '../aviso/incorrecto/incorrecto.page';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.page.html',
  styleUrls: ['./footer.page.scss'],
})
export class FooterPage implements OnInit {
  usuario:String="../assets/img/avatar.png";
  notificacion:String="../assets/img/notificaciones.png";
  home:String="../assets/img/home.png";
  tab:String;
  notificaciones : {};
  public number:String="0";
  constructor(private router: Router,
    private storage: Storage,
    private notificacionesService: NotificacionesService) { }

  ngOnInit() {
    
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        this.datos();
        console.log(event.url);
        this.storage.get('name').then((nombre) => {
          console.log('Name is', nombre);
          if(login.login ==false && nombre == null ){
            login.producto = true;
            this.tab="login";
          }else{
            this.tab="perfil";
          }
        });
        if(event.url=="/footer/perfil"){
          this.usuario="../assets/img/avatar_perfil2.png";
          this.notificacion="../assets/img/notificaciones.png";
          this.home="../assets/img/home.png";
        }else if(event.url=="/footer/notificacion"){
          this.usuario="../assets/img/avatar.png";
          this.notificacion="../assets/img/notificaciones_activo.png";
          this.home="../assets/img/home.png";
        }else if(event.url=="/footer/producto" || event.url=="/"){
          this.usuario="../assets/img/avatar.png";
          this.home="../assets/img/home_activo.png";
          this.notificacion="../assets/img/notificaciones.png";
        }else{
          this.usuario="../assets/img/avatar.png";
          this.home="../assets/img/home.png";
          this.notificacion="../assets/img/notificaciones.png";
        }
      }
    });
  }

  datos(){
    console.log("refresh");
     this.notificacionesService.getNotificaciones().subscribe(data => {
       console.log(data)
       this.notificaciones=data;
       var valor = 0;
       for(var i = 0;i<Object.entries(this.notificaciones).length;i++){
         var estado=this.notificaciones[i].estado
         if(estado == 'NOT'){
           valor = valor + 1
         }
       }
       this.number =String(valor)
       },(error)=>{
         console.log("algo salio mal")
         console.error(error);
       }) 
  }

}
