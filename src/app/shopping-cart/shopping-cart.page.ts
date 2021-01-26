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
import { ProductoPage } from '../producto/producto.page';
import {NavParamsService} from '../servicios/nav-params.service'

declare var window;
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
  total:any=0.00;
  prodLen:number=0;
  oferLen:number=0;
  comLen:number=0;
  private correo:string="";
  private producto:string="";
  private oferta:string="";
  private cupones:string="";
  private politica:string="";

  constructor(private modalCtrl: ModalController,  private  router:  Router, 
    private shoppingService: ShoppingCartService, private loadingCtrl: LoadingController,
    private storage: Storage, private shoppingCart: ShoppingCartService, private auth: AuthService,
    private navCtrl: NavController, private navParamsService: NavParamsService) {
      window.cart=this;
  }

  ngOnInit() {
    this.showLoading();
    this.getCorreo();
    
  }

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
        this.comLen=this.getComboLen();
        this.prodLen=this.getProductLen();
        this.oferLen=this.getOfertaLen();
        this.total=this.getTotal();
        console.log(this.cart[0]['productos']);
        console.log(this.cart[0]['ofertas']);
        console.log(this.cart[0]['combos']);
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

  getCorreo(){
    console.log(login.login)  
		this.storage.get('correo').then((val) => {
      this.correo=val;
      console.log('name: ',this.correo);
      
  });

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
    return ttotal.toFixed(2);
    
    
  }


  getProductLen(){
    var pindex=0;
    for(let p in this.products){
      pindex=+p+1;
    }
    return pindex;
  }

  getComboLen(){
    var cindex=0;
    for (let c in this.combos){
      cindex=+c+1;
    }
    return cindex;
  }

  getOfertaLen(){
    var oindex=0;
    for (let o in this.oferts){
      oindex=+o+1;
    }
    return oindex;
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

  agregar(id:string){
    console.log("el id a recibir",id);
    var precio_unitario=this.getPrecioUnitario(id);
    var cantidad= document.querySelectorAll('#'+id);
    console.log("Esto obtengo del query",cantidad);
    console.log("Esto obtengo del query 0",cantidad[0].innerHTML);
    console.log("Esto obtengo del query 1",cantidad[1].innerHTML);
    if(parseInt(cantidad[0].innerHTML)>=0){
      console.log("tengo una cantidad");
      cantidad[0].innerHTML=String(parseInt(cantidad[0].innerHTML)+1);
      //this.saveData(id,cantidad[0].innerHTML);
      console.log("esta es la cantidad",cantidad[0].innerHTML);
    }
    else{
      console.log("Tengo un NaN")
      cantidad[0].innerHTML=String(parseInt(cantidad[0].innerHTML)+1);
      //this.saveData(id,cantidad[0].innerHTML);
      console.log("esta es la cantidad",cantidad[0].innerHTML)
    }
    var subtotal=precio_unitario*parseInt(cantidad[0].innerHTML);
    if(precio_unitario<=subtotal){
      console.log("Este sería el precio unitario",precio_unitario);
      cantidad[1].innerHTML=String((parseFloat(cantidad[1].innerHTML)+precio_unitario).toFixed(2));
      console.log("Este es el precio final",cantidad[1].innerHTML);
      this.total=this.getTotalCart();
    }
    
    
  }

  quitar(id:string){
    console.log("el id a recibir",id)
    var precio_unitario=this.getPrecioUnitario(id);
    //var cantidad= document.querySelectorAll('#'+id);
    var cantidad= document.querySelectorAll('#'+id);
    console.log("esto obtengo del query",cantidad)

    if((parseInt(cantidad[0].innerHTML)-1)<= 0){
      //cantidad[0].innerHTML=String(parseInt(cantidad[0].innerHTML));
      cantidad[0].innerHTML="0";
      //this.saveData(id,cantidad[0].innerHTML);
      cantidad[1].innerHTML="0.00";
      this.total=this.getTotalCart();
    }
    else{
      cantidad[0].innerHTML=String(parseInt(cantidad[0].innerHTML)-1);
      //this.saveData(id,cantidad[0].innerHTML);
      var subtotal=precio_unitario*parseInt(cantidad[0].innerHTML);
      console.log(precio_unitario)
      if (precio_unitario <= subtotal){
        cantidad[1].innerHTML=String(String((parseFloat(cantidad[1].innerHTML)-precio_unitario).toFixed(2)));
        this.total=this.getTotalCart();
      }
    } 
  }


  getTotalCart(){
    console.log("estoy en total cart")
    //var total=document.getElementById('A_pagar');
    var subtotal=document.getElementsByClassName('subtotal');
    var tot=0;
    for(var i=0;i<subtotal.length;i++){
      console.log(subtotal[i])
      tot=tot+parseFloat(subtotal[i].innerHTML);
    }
    //total.innerHTML=String(tot);
    //this.total=tot;
    if(this.getCantidad()==0){
      this.total=0.00;
      return 0.00;
    }else{
      console.log(this.getCantidad());
      console.log(tot);
      return tot.toFixed(2);
    }
  }

  getCantidad(){
    var cantidades=document.getElementsByClassName('cantidad');
    var suma=0;
    for (var i=0;i<cantidades.length;i++){
      suma=suma+parseInt(cantidades[i].innerHTML);
    }
    if(suma==0){
      return 0;
    }
    return suma;
  }



  eliminar(id:string,c:string,cantidad:string){
    var tot:any=this.getTotalCart();
    var pos = 0;
    var subtot = 0;
    var div= document.getElementById(id);
    var total=document.getElementById('A_pagar');
    var total2=document.getElementsByClassName('A_pagar');
    var subtotal=document.getElementsByClassName('subtotal');
   //var compara = c.replace(/ /g, "_");
    console.log(total)
    console.log("Esto voy a enviar ",div,typeof(div))
    console.log("Estoy voy a enviarlo",total2[0].innerHTML,typeof(total2[0]))
    console.log("estilo del display",div.style.display)
    console.log("aqui esta el elemento que voy a eliminar",this.getNombre(c))
    
    for(var i=0;i<subtotal.length;i++){
      var name = subtotal[i].getAttribute('id')
      if(String(name)== c){
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
      'nombre': this.getNombre(c),
      'cantidad': parseInt(cantidad),
      'correo': this.correo
    }
    console.log(this.getNombre(c));
    this.mensajeEliminar(this.getNombre(c),cantidad,div,total2[0],String(tot),subtotal,String(pos));
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

  getNombre(id:string){
    for (let i=0; i< this.getProductLen(); i++){
      if(id===this.products[i]['id_unico']){
        return this.products[i]['nombre_producto'];
      }
    }
    for (let i=0; i< this.getOfertaLen(); i++){
      if(id===this.oferts[i]['id_unico']){
        return this.oferts[i]['nombre_oferta'];
      }
    }
    for (let i=0; i< this.getComboLen(); i++){
      if(id===this.combos[i]['id_unico']){
        return this.combos[i]['nombre'];
      }
    }

  }

  getId(id:string){
    console.log("estoy en getprcio unitario");
    for (let i=0; i< this.getProductLen(); i++){
      if(id===this.products[i]['id_unico']){
        return this.products[i]['d_unico'];
      }
    }
    for (let i=0; i< this.getOfertaLen(); i++){
      if(id===this.oferts[i]['id_unico']){
        return this.oferts[i]['id_unico'];
      }
    }
    for (let i=0; i< this.getComboLen(); i++){
      if(id===this.combos[i]['id_unico']){
        return this.combos[i]['id_unico'];
      }
    }
  }

  saveData(id:string,cantidad:string){
    this.storage.set(id,cantidad);
    
    //var cantidades=document.getElementsByClassName('cantidad');
    //for(var i=0; i<cantidades.length;i++){
      
    //  var id=cantidades[i].getAttribute("id");
    //  console.log(id);
      
      //if(this.getId(id)==id)
      //this.storage.get(id).then((data)=>{
      //    console.log(data);
      //});
    //}
  }

  loadData(){
    var cantidades=document.getElementsByClassName('cantidad');
    for(var i=0; i<cantidades.length;i++){
      
      var id=cantidades[i].getAttribute("id");
      
      //if(this.getId(id)==id)
      this.storage.get(id).then((data)=>{
        if(data===null){
          cantidades[i].innerHTML=cantidades[i].innerHTML;
        }else{
          cantidades[i].innerHTML=data;
        }
      });
    }

  }

  goProductPage(){
    var cantidades=document.getElementsByClassName('cantidad');
    var datos  = [];
    for(var i=0; i<cantidades.length;i++){
      var id=cantidades[i].getAttribute("id");
          datos.push({"id":id,"cantidad":cantidades[i].innerHTML});
      

    }
    //objeto[0].datos = datos;
    //console.log(JSON.stringify(objeto));
    
    //this.navCtrl.push(ProductoPage, datos);
    this.navParamsService.setNavData(datos);
    this.router.navigate(['/producto'],{replaceUrl:true});

  }

  goOfertPage(){
    var cantidades=document.getElementsByClassName('cantidad');
    var datos  = [];
    for(var i=0; i<cantidades.length;i++){
      var id=cantidades[i].getAttribute("id");
          datos.push({"id":id,"cantidad":cantidades[i].innerHTML});
      

    }
    //objeto[0].datos = datos;
    //console.log(JSON.stringify(objeto));
    
    //this.navCtrl.push(ProductoPage, datos);
    this.navParamsService.setNavData(datos);
    this.router.navigate(['/ofertas'],{replaceUrl:true});

  }



}
