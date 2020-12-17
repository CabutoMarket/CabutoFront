import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import {ShoppingCartService} from '../servicios/shopping-cart.service';
import { AlertController, LoadingController,ModalController} from '@ionic/angular';
import {CorrectoPage} from '../aviso/correcto/correcto.page';
import {IncorrectoPage} from '../aviso/incorrecto/incorrecto.page';
import {HeaderComponent} from '../components/header/header.component';
import { Storage } from '@ionic/storage';
import {login} from  './../global';
import { AuthService } from '../auth/servicios/auth.service';



@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.page.html',
  styleUrls: ['./shopping-cart.page.scss'],
})

export class ShoppingCartPage implements OnInit {
cantidadInput:number=0;
act:number=0;
cart: {};
products: {};
oferts: {};
combos: {};
total:number=0;
prodLen:number=0;
oferLen:number=0;
comLen:number=0;
private correo:string="";
//constructor(private productCartService: ProductsCartService, private modalCtrl: ModalController) { }
constructor(private modalCtrl: ModalController,  private  router:  Router, 
  private shoppingService: ShoppingCartService, private loadingCtrl: LoadingController,
  private storage: Storage, private shoppingCart: ShoppingCartService, private auth: AuthService
  /*private header: HeaderComponent*/){}

  ngOnInit() {
//    this.cart=this.productCartService.getCart();
      this.showLoading();
      this.getCorreo();
  }

/*  getClient(){
      const user={
        'correo': this.correo,
        'contrasena': 'xxxxx'
      };
      this.auth.getUser(user).subscribe(data=>{
      console.log(data)
      });
          //this.mensaje("Agregar Producto","Agregar producto","el producto se ha agregado al carrito");
          /* aqui debers enviar el producto y cantidad al carrito */
//  }

  mostrarCarrito(){
    this.storage.get('name').then((nombre) => {
      console.log('Name is', nombre);
      if(login.login ==false && nombre == null ){
        login.producto = true;
        this.router.navigateByUrl('/login');  
      }else{
        const user={
          'correo': this.correo,
          'contrasena': 'xxxxx'
        };
        console.log(user)
      this.shoppingService.showCart(user).subscribe(data=>{
        this.cart=data;
        this.products=this.cart[0]['productos'];
        this.oferts=this.cart[0]['ofertas'];
        this.combos=this.cart[0]['combos'];
        console.log(this.cart[0]['productos']);
        console.log(this.cart[0]['ofertas']);
        console.log(this.cart[0]['combos']);
        this.total=this.getTotal();
        console.log(this.total);
        console.log("Ya salio alv");
      },(error)=>{
        console.error(error);
      //this.mensaje("Algo Salio mal","Fallo en la conexión","Fallo en la red")
        this.mensajeIncorrecto("Algo Salio mal","Fallo en la conexión")
      });
      }
    });
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


  removeCartItem(product){
//    this.productCartService.removeProduct(product);
  }

  getTotal(){
    var ptotal=0;
    var ototal=0;
    var ctotal=0;
    var ttotal=0;
    
    for (let i=0; i< this.getProductLen(); i++){
      ptotal=ptotal + parseFloat((this.products[i]['subtotal']));
      console.log(ptotal);
    }
    for (let i=0; i< this.getOfertaLen(); i++){
      console.log(this.oferts[i]['subtotal_oferta']);
      ototal=ototal + parseFloat((this.oferts[i]['subtotal_oferta']));
      console.log(ototal);
    }
    for (let i=0; i< this.getComboLen(); i++){
      ctotal=ctotal + parseFloat((this.combos[i]['precio']));
      console.log(ctotal);
    }
    console.log(this.products[0]['subtotal'])
    ttotal=ototal+ctotal+ptotal;
    console.log(ttotal)
    return ttotal;
  }

  getProductLen(){
    var pindex=0;
    for(let p in this.products){
      pindex=+p+1;
    }
    this.prodLen=pindex;
    return pindex;
  }

  getComboLen(){
    var cindex=0;
    for (let c in this.combos){
      cindex=+c+1;
    }
    this.comLen=cindex;
    return cindex;
  }

  getOfertaLen(){
    var oindex=0;
    for (let o in this.oferts){
      oindex=+o+1;
    }
    this.oferLen=oindex;
    return oindex;
  }

  checkout(){

  }


  regresar() {
    this.modalCtrl.dismiss();
    
    //this.router.navigateByUrl('/producto');
  }

  getCorreo(){
    console.log(login.login)  
		this.storage.get('correo').then((val) => {
      this.correo=val;
      console.log('name: ',this.correo);
      
  });

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

  agregar(id:string,cant:string){
    //console.log(id)
    /*var cantidad = document.getElementById(id);
    console.log(cantidad.innerText)
    cantidad.innerText=String(parseInt(cantidad.innerText)+1);*/
    var cantidad= document.querySelectorAll('#'+id);
    console.log(cantidad[0].innerHTML)
    console.log(parseInt(cantidad[1].innerHTML)+1)
    cantidad[0].innerHTML=String(parseInt(cantidad[0].innerHTML)+1);
    var precio_unitario=this.getPrecioUnitario(id);
    console.log(precio_unitario)
    cantidad[1].innerHTML=String(parseInt(cantidad[1].innerHTML)+precio_unitario);
    this.total=this.getTotalCart();
    //cantidad.setAttribute('value',String(parseInt(cantidad.innerText)+1));
    /*var cantidad = document.getElementById(id);
    console.log(cantidad)
    console.log(cant)
    var place  = cantidad.getAttribute('placeholder')
    var valor = parseInt(cant);
    var total  = valor +1;
    var valor2 =parseInt(place);
    var total2 = valor2+1;
    cantidad.setAttribute('placeholder',String(total2));
    cantidad.setAttribute('value',String(total));*/
    /*console.log(cantidad)
    var st  = cantidad.getAttribute('value')
    console.log(st)
    var num = String(st)
    console.log(num)
    var place  = cantidad.getAttribute('placeholder')
    console.log(typeof(num))
    var valor = parseInt(num);
    var total  = valor +1;
    var valor2 =parseInt(place);
    var total2 = valor2+1;
    cantidad.setAttribute('placeholder',String(total2));
    //if(isNaN(String(num)) == false){
    //var num2 = parseInt(num)+1
    //var numS=String(num2);
    cantidad.setAttribute('value',String(total));*/
    
  }

  quitar(id:string){
    var cantidad= document.querySelectorAll('#'+id);
    console.log(cantidad[0].innerHTML)
    console.log(parseInt(cantidad[1].innerHTML)-1)

    //var cantidad = document.getElementById(id);
    //var num  = cantidad.getAttribute('value')

    if((parseInt(cantidad[0].innerHTML)-1)< 0){
      cantidad[0].innerHTML=String(parseInt(cantidad[0].innerHTML));
    }else{
      cantidad[0].innerHTML=String(parseInt(cantidad[0].innerHTML)-1);
      var precio_unitario=this.getPrecioUnitario(id);
      console.log(precio_unitario)
      cantidad[1].innerHTML=String(parseInt(cantidad[1].innerHTML)-precio_unitario);
      this.total=this.getTotalCart();
    } 
  }

  getPrecioUnitario(id:string){
    for (let i=0; i< this.getProductLen(); i++){
      if(id===this.products[i]['nombre_producto']){
        return this.products[i]['precio_producto'];
      }
    }
    for (let i=0; i< this.getOfertaLen(); i++){
      if(id===this.oferts[i]['nombre_oferta']){
        return this.oferts[i]['precio_oferta'];
      }
    }
    for (let i=0; i< this.getComboLen(); i++){
      if(id===this.combos[i]['nombre']){
        return this.combos[i]['precio'];
      }
    }
  }

  transformar(id:string,cant:string){
    console.log(cant)
    var cantidad = document.getElementById(id);
    var num  = cantidad.getAttribute('value')
    var total  = parseInt(num)+ parseInt(cant)
    cantidad.setAttribute('value',String(total));
  }

  getTotalCart(){
    var total=document.getElementById('A_pagar');
    var subtotal=document.getElementsByClassName('subtotal');
    var tot=0;
    for(var i=0;i<subtotal.length;i++){
      console.log(subtotal[i])
      tot=tot+parseFloat(subtotal[i].innerHTML);
    }
    //total.innerHTML=String(tot);
    //this.total=tot;
    return tot;
  }
}




