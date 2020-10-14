import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  usuario:String="../assets/img/avatar.png";
  notificacion:String="../assets/img/notificaciones.png";
  home:String="../assets/img/home.png";


  change_pic(url:String){
    if(this.usuario==url){
      this.usuario="../assets/img/avatar_perfil2.png";
    }else if(this.notificacion==url){
      this.notificacion="../assets/img/notificaciones_naranja.png";
    }else{
      this.home="../assets/img/home_activo.png";
      
    }


  }

  constructor() { }

  ngOnInit() {}

}
