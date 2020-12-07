import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController, ModalController } from '@ionic/angular';
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

  //public carrito:String="../assets/img/carrito.png";
  public carrito:String="";

  changeCart(){
    //this.carrito="../assets/img/carrito_activo.png";
    this.openCart();
  }


  constructor(private modalCtrl: ModalController,
    private storage: Storage, 
    private shoppingCartPage: ShoppingCartPage,private  router:  Router,private alert: AlertController,
    private menuCtrl: MenuController
    ) {}

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
      //this.carrito="../assets/img/carrito.png";
      this.router.navigateByUrl('/shopping-cart');
      /*let modal= await this.modalCtrl.create({component: ShoppingCartPage, cssClass: 'cart-modal'});
      modal.present();*/
    }
    /*let modal= await this.modalCtrl.create({component: ShoppingCartPage, cssClass: 'cart-modal'});
    modal.present();*/
  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }

  


}
