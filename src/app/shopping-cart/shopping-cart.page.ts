import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import {ShoppingCartService} from '../servicios/shopping-cart.service';
import { AlertController, LoadingController,ModalController} from '@ionic/angular';
import {CorrectoPage} from '../aviso/correcto/correcto.page';
import {IncorrectoPage} from '../aviso/incorrecto/incorrecto.page';
import {HeaderComponent} from '../components/header/header.component'

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.page.html',
  styleUrls: ['./shopping-cart.page.scss'],
})

export class ShoppingCartPage implements OnInit {

cart: {};
//constructor(private productCartService: ProductsCartService, private modalCtrl: ModalController) { }
constructor(private modalCtrl: ModalController,  private  router:  Router, 
  private shoppingService: ShoppingCartService, private loadingCtrl: LoadingController,
  /*private header: HeaderComponent*/){}

  ngOnInit() {
//    this.cart=this.productCartService.getCart();
      this.showLoading();
  }

  mostrarCarrito(){
    this.shoppingService.showCart().subscribe(data=>{
      this.cart=data;
      console.log(this.cart);
      console.log("Ya salio alv");
    },(error)=>{
      console.error(error);
      //this.mensaje("Algo Salio mal","Fallo en la conexión","Fallo en la red")
      this.mensajeIncorrecto("Algo Salio mal","Fallo en la conexión")
    })
  }

  showLoading() {  
    this.loadingCtrl.create({  
      message: 'Loading.....'   
      }).then((loading) => {  
       loading.present();{
        this.mostrarCarrito();
      } 
       setTimeout(() => {   
         loading.dismiss();  
       }, 1000 );   
      });  
    } 

  decreaseCartItem(id:string){
    var cantidad = document.getElementById(id);
    var num  = cantidad.getAttribute('value')
    if((parseInt(num)-1)< 0){
      cantidad.setAttribute('value',String(parseInt(num)));
    }else{
      cantidad.setAttribute('value',String(parseInt(num)-1));
    } 
//    this.productCartService.decreaseProduct(product);
  }

  increaseCartItem(id:string){
    var cantidad = document.getElementById(id);
    console.log(cantidad)
    var num  = cantidad.getAttribute('value')
    console.log(typeof(num))
        //if(isNaN(String(num)) == false){
        //var num2 = parseInt(num)+1
        //var numS=String(num2);
    cantidad.setAttribute('value',String(parseInt(cantidad.getAttribute('value'))+1));
//    this.productCartService.addProduct(product);
  }

  removeCartItem(product){
//    this.productCartService.removeProduct(product);
  }

  getTotal(){
//    return this.cart.reduce((i,j) => j.price * j.amount, 0);
  }

  checkout(){

  }


  regresar() {
    this.modalCtrl.dismiss();
    
    this.router.navigateByUrl('/producto');
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
}




