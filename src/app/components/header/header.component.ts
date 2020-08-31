import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ShoppingCartPage } from 'src/app/shopping-cart/shopping-cart.page';


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


  constructor(private modalCtrl: ModalController, private shoppingCartPage: ShoppingCartPage ) { }

  ngOnInit() {}

  async openCart(){
    let modal= await this.modalCtrl.create({component: ShoppingCartPage, cssClass: 'cart-modal'});
    modal.present();
  }

}
