import { Component, OnInit } from '@angular/core';
import {login} from  '../global'
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { Storage } from '@ionic/storage';

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
  constructor(private router: Router,private storage: Storage) { }

  ngOnInit() {
    
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
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

}
