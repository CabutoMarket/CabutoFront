import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.page.html',
  styleUrls: ['./shopping-cart.page.scss'],
})

export class ShoppingCartPage implements OnInit {


//constructor(private productCartService: ProductsCartService, private modalCtrl: ModalController) { }
constructor(){}

  ngOnInit() {
//    this.cart=this.productCartService.getCart();
  }

  decreaseCartItem(product){
//    this.productCartService.decreaseProduct(product);
  }

  increaseCartItem(product){
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



}
