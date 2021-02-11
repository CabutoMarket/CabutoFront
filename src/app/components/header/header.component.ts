import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController, ModalController, LoadingController } from '@ionic/angular';
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
    this.carrito="../assets/img/carrito_activo.png";
    this.openCart();
  }

  public number :string= "";
  constructor(private modalCtrl: ModalController,
    private storage: Storage, 
    private shoppingCartPage: ShoppingCartPage,private  router:  Router,private alert: AlertController,
    private menuCtrl: MenuController, private loadingCtrl: LoadingController
    ) {}

  ngOnInit() {
    this.number = this.getNumber();
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
      //this.carritoModal();
      this.carrito="../assets/img/carrito_activo.png";
      this.router.navigateByUrl('/footer/shopping-cart');
      
         
      
      /*let modal= await this.modalCtrl.create({component: ShoppingCartPage, cssClass: 'cart-modal'});
      modal.present();*/
    }
    /*let modal= await this.modalCtrl.create({component: ShoppingCartPage, cssClass: 'cart-modal'});
    modal.present();*/
  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }

  async carritoModal(){
    const modal = await this.modalCtrl.create({
      component: ShoppingCartPage,
      /*cssClass: 'IncorrectoProducto',
      componentProps: {
        'titulo': titulo,
        'mensaje': mensaje
      }*/
    });
    return await modal.present();
  }

  
  getNumber(){
    var dato = "";
    this.storage.get('number').then((number) =>{
     dato = number;
    });
    console.log("voy a devolver",dato)
    return dato;
  }

}
