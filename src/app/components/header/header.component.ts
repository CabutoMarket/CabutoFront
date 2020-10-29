import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { ShoppingCartPage } from 'src/app/shopping-cart/shopping-cart.page';
import {login} from  './../../global'


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


  constructor(private modalCtrl: ModalController, private shoppingCartPage: ShoppingCartPage,private  router:  Router,private alert: AlertController
    ) { }

  ngOnInit() {}

  async openCart(){
    if(login.login ==false){
      this.router.navigateByUrl('/login');
    }else{
      let modal= await this.modalCtrl.create({component: ShoppingCartPage, cssClass: 'cart-modal'});
      modal.present();
    }
    /*let modal= await this.modalCtrl.create({component: ShoppingCartPage, cssClass: 'cart-modal'});
    modal.present();*/
  }

  


}
