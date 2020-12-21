import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import {ShoppingCartService} from '../servicios/shopping-cart.service';
import { AlertController, LoadingController,ModalController, NavController} from '@ionic/angular';
import {CorrectoPage} from '../aviso/correcto/correcto.page';
import {IncorrectoPage} from '../aviso/incorrecto/incorrecto.page';
import {HeaderComponent} from '../components/header/header.component';
import { Storage } from '@ionic/storage';
import {login} from  './../global';
import { AuthService } from '../auth/servicios/auth.service';
import 'rxjs/add/operator/map';
import { stringify } from '@angular/compiler/src/util';
import {PreguntaPage} from '../aviso/pregunta/pregunta.page';



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
total:number=0.00;
prodLen:number=0;
oferLen:number=0;
comLen:number=0;
private correo:string="";
private producto:string="";
private oferta:string="";
private cupones:string="";
private politica:string="";


//constructor(private productCartService: ProductsCartService, private modalCtrl: ModalController) { }
constructor(private modalCtrl: ModalController,  private  router:  Router, 
  private shoppingService: ShoppingCartService, private loadingCtrl: LoadingController,
  private storage: Storage, private shoppingCart: ShoppingCartService, private auth: AuthService,
  private navCtrl: NavController
  /*private header: HeaderComponent*/){}

  ngOnInit() {
    this.showLoading(); 
    this.getCorreo();
    this.getProducto();
    this.getOferta();
    this.getCupones()
    this.getPolitica()
    
//    this.cart=this.productCartService.getCart();
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
        this.mensajeIncorrecto("Algo Salio mal","Fallo en en el carrito.")
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
    //console.log(this.products[0]['subtotal'])
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
    console.log("Producto",this.producto,"Oferta",this.oferta,"Politica",this.politica,"Cupones",this.cupones);
    if(String(this.producto)== String("true")){
      //this.producto=String("false");
      this.storage.set('producto', false);
      this.router.navigateByUrl('/producto');
    }else if (String(this.oferta)== String("true")){
      //this.oferta=String("false");
      this.storage.set('oferta', false);
      this.router.navigateByUrl('/ofertas');
    }else if (String(this.cupones)== String("true")){
      //this.cupones=String("false");
      this.storage.set('cupones', false)
      this.router.navigateByUrl('/cupones');
    }else if (String(this.politica)== String("true")){
      //this.politica=String("false");
      this.storage.set('politica', false);
      this.router.navigateByUrl('/politicas');
    }else {
      this.router.navigateByUrl('/producto');
      this.producto=String("true");
    }
    /*this.storage.get('producto').then((producto) => {
      if(producto == true){
        this.router.navigateByUrl('/producto');
      }else{
        this.storage.get('oferta').then((oferta) =>{
          if(oferta == true){
            this.router.navigateByUrl('/ofertas');
          }else{
            this.storage.get('politica').then((politica) =>{
          	if(politica == true){
            	this.router.navigateByUrl('/politicas');
          	}else{
            	this.storage.get('cupones').then((cupones) =>{
          	   if(cupones == true){
            	     this.router.navigateByUrl('/cupones');
          	   }else{
            	    this.router.navigateByUrl('/producto');
          	   }
                 });
          	}
            });
          }
        });
      }
    });*/
  }

  getProducto(){
    this.storage.get('producto').then((producto) => {
      this.producto=producto;
    });
  }

  getOferta(){
    this.storage.get('oferta').then((oferta) =>{
      this.oferta=oferta;
    });
  }
  getPolitica(){
    this.storage.get('politica').then((politica) =>{
      this.politica=politica;
    });
  }
  getCupones(){
    this.storage.get('cupones').then((cupones) =>{
      this.cupones=cupones;
    });
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

  agregar(id:string){
    console.log("el id a recibir",id)
    var cantidad= document.querySelectorAll('#'+id);
    console.log("Esto obtengo del query",cantidad);
    console.log("esto es lo que voy a cambiar",cantidad[0].innerHTML)
    cantidad[0].innerHTML=String(parseInt(cantidad[0].innerHTML)+1);
    console.log("esta es la cantidad",cantidad[0].innerHTML)
    var precio_unitario=this.getPrecioUnitario(id);
    console.log("Este sería el precio unitario",precio_unitario);
    cantidad[1].innerHTML=String((parseFloat(cantidad[1].innerHTML)+precio_unitario).toFixed(2));
    console.log("Este es el precio final",cantidad[1].innerHTML);
    this.total=this.getTotalCart();
    //console.log(id)
    /*var cantidad = document.getElementById(id);
    console.log(cantidad.innerText)
    cantidad.innerText=String(parseInt(cantidad.innerText)+1);*/
    //this.tranformarId();
    /*var cantidad= document.querySelectorAll('#'+id);
    console.log(cantidad);
    console.log(parseFloat(cantidad[1].innerHTML)+1)
    cantidad[0].innerHTML=String(parseInt(cantidad[0].innerHTML)+1);
    var precio_unitario=this.getPrecioUnitario(id);
    console.log(precio_unitario)
    cantidad[1].innerHTML=String(parseFloat(cantidad[1].innerHTML)+precio_unitario);
    this.total=this.getTotalCart();
*/

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
    console.log("el id a recibir",id)
    var cantidad= document.querySelectorAll('#'+id);
    console.log("esto obtengo del query",cantidad)
    //console.log(parseFloat(cantidad[1].innerHTML)-1)

    //var cantidad = document.getElementById(id);
    //var num  = cantidad.getAttribute('value')

    if((parseInt(cantidad[0].innerHTML)-1)< 0){
      //cantidad[0].innerHTML=String(parseInt(cantidad[0].innerHTML));
      cantidad[0].innerHTML="0";
      cantidad[1].innerHTML="0.00";
    }
    else if((parseInt(cantidad[0].innerHTML)-1)== 0){
      cantidad[0].innerHTML="0";
      cantidad[1].innerHTML="0.00";
    }
    else{
      cantidad[0].innerHTML=String(parseInt(cantidad[0].innerHTML)-1);
      var precio_unitario=this.getPrecioUnitario(id);
      console.log(precio_unitario)
      cantidad[1].innerHTML=String((parseFloat(cantidad[1].innerHTML)-precio_unitario).toFixed(2));
      this.total=this.getTotalCart();
    } 
  }

  getPrecioUnitario(id:string){
    console.log("estoy en getprcio unitario");
    for (let i=0; i< this.getProductLen(); i++){
      if(id===this.products[i]['id_unico']){
        return this.products[i]['precio_producto'];
      }
    }
    for (let i=0; i< this.getOfertaLen(); i++){
      if(id===this.oferts[i]['id_unico']){
        return this.oferts[i]['precio_oferta'];
      }
    }
    for (let i=0; i< this.getComboLen(); i++){
      if(id===this.combos[i]['id_unico']){
        return this.combos[i]['precio'];
      }
    }
  }

  getTotalCart(){
    console.log("estoy en total cart")
    var total=document.getElementById('A_pagar');
    var subtotal=document.getElementsByClassName('subtotal');
    var tot=0;
    for(var i=0;i<subtotal.length;i++){
      console.log(subtotal[i])
      tot=tot+parseFloat(subtotal[i].innerHTML);
    }
    //total.innerHTML=String(tot);
    //this.total=tot;
    console.log(tot)
    return tot;
  }

  transformarId(id: string){
    var ids=document.getElementsByClassName('cantidad');
    for (let i=0; i< ids.length; i++){
      if (id==ids[i].getAttribute('id')){
        console.log(ids[i].getAttribute('id').replace(/ /g, "_"));
        return ids[i].setAttribute('id', ids[i].getAttribute('id').replace(/ /g, "_"));
      }
    }
  }

  async mensajeEliminar(nombre:string,cantidad:string,div:object,valor:object,tot:string,subtotal:object,compara:string){
    const modal = await this.modalCtrl.create({
      component: PreguntaPage,
      cssClass: 'pregunta',
      componentProps: {
        'nombre': nombre,
        'cantidad': parseInt(cantidad),
        'correo': this.correo,
        'div': div,
        'valor': valor,
        'tot':tot,
        'subtotal':subtotal,
        'compara':compara,
      }
    });
    return await modal.present();
  }

  eliminar(id:string,c:string,cantidad:string){
    var tot=this.getTotalCart();
    var pos = 0;
    var subtot = 0;
    var div= document.getElementById(id);
    var total=document.getElementById('A_pagar');
    var total2=document.getElementsByClassName('A_pagar');
    var subtotal=document.getElementsByClassName('subtotal');
    var compara = c.replace(/ /g, "_");
    console.log(total)
    console.log("Esto voy a enviar ",div,typeof(div))
    console.log("Estoy voy a enviarlo",total2[0].innerHTML,typeof(total2[0]))
    console.log("estilo del display",div.style.display)
    console.log("aqui esta el elemento que voy a eliminar",compara)
    
    for(var i=0;i<subtotal.length;i++){
      var name = subtotal[i].getAttribute('id')
      if(String(name)== compara){
        tot=tot-parseFloat(subtotal[i].innerHTML);
        subtot=subtot+parseFloat(subtotal[i].innerHTML);
        pos = i;
        //subtotal[i].innerHTML = "0";
        console.log("esto voy a encerar",subtotal[i].innerHTML)
      }
    }
    //console.log("esta posicion", pos);
    console.log(tot)
    //total2[0].innerHTML=""+tot+"";
    const prodxcant={
      'nombre': c,
      'cantidad': parseInt(cantidad),
      'correo': this.correo
    }
    this.mensajeEliminar(c,cantidad,div,total2[0],String(tot),subtotal,String(pos));
    /*
    this.shoppingCart.quitarCarrito(prodxcant).subscribe(data =>{
      if(data.valid == "OK"){
        this.mensajeCorrecto("Eliminación Exitosa","ha eliminado del carrito");
      }else if (data.valid == "NOT"){
        this.mensajeIncorrecto("No se pudo completar la operacion","Ha ocurrido un error, revise su conexión");

      }else{
        this.mensajeIncorrecto("No se pudo completar la operacion","Ha ocurrido un error, revise su conexión");
      }
    })
    div.style.display = "none";
    total2[0].innerHTML=""+tot+"";

    console.log(prodxcant);*/
  }
  
}




