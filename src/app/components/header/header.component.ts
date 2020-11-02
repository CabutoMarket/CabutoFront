import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { ShoppingCartPage } from 'src/app/shopping-cart/shopping-cart.page';
import {login} from  './../../global'
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [ShoppingCartPage]
})
export class HeaderComponent implements OnInit {

  carrito:String="../assets/img/carrito.png";

  changeCart(){
    this.carrito="../assets/img/carrito_activo.png";
  }


  constructor(private modalCtrl: ModalController,
    private storage: Storage, 
    private shoppingCartPage: ShoppingCartPage,private  router:  Router,private alert: AlertController
    ) { }

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
      let modal= await this.modalCtrl.create({component: ShoppingCartPage, cssClass: 'cart-modal'});
      modal.present();
    }
    /*let modal= await this.modalCtrl.create({component: ShoppingCartPage, cssClass: 'cart-modal'});
    modal.present();*/
  }

  


}
