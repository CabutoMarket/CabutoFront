import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../servicios/producto.service';
import {Producto} from '../modelo/producto';
import {Producto_Carrito} from '../modelo/producto_carrito';
import { Observable, Subject } from 'rxjs';
import {login} from  './../global'
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { AlertController, LoadingController,ModalController} from '@ionic/angular';
import { Storage } from '@ionic/storage';
import {DetallesProductosPage} from '../detalles-productos/detalles-productos.page';
import {ShoppingCartService} from '../servicios/shopping-cart.service';
import {CorrectoPage} from '../aviso/correcto/correcto.page';
import {IncorrectoPage} from '../aviso/incorrecto/incorrecto.page';
import { database } from 'firebase';
import {NavParamsService} from '../servicios/nav-params.service';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
//import { NativeStorage } from '@ionic-native/native-storage/ngx';
//FrontFinal\final\CabutoFront\src\app\global.ts

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {
    opcion: string  = '0';
    textInput: string = null;
    productoInput: string ='';
    producto : {};
    verSeleccion: string = '';
    dataFromCart: {};
    n = 0;
    num:any=0;
    loaderToShow: any;
    almacenado:{};
    private correo:String="";
    public cantidad:string="0";

  constructor(
    public productoService: ProductoService, private  router:  Router,private alert: AlertController,
    public loadingCtrl: LoadingController,
    private storage: Storage,
    public modalCtrl: ModalController,
    private shoppingCart: ShoppingCartService,
    private navParamsService: NavParamsService,
  	) { }

  ngOnInit() {

    this.cargaPantalla();
    this.getCorreo();
      
    //this.setData();
    //this.loadData();
    //this.storage.set('producto', true);
    
    //this.storage.set('oferta', false);
    //this.storage.set('politica', false);
    //this.storage.set('cupones', false);
  }



 ionViewWillEnter(){
 	console.log("refresh");
    this.productoService.getProducto().subscribe(data => {
      //console.log("esta es la data "+data["nombre"])
      this.producto=data;
      
      console.log(this.producto);
      },(error)=>{
      	console.error(error);
      }); 
      this.loadData();
    }

      ionViewDidEnter(){
        this.dataFromCart=this.navParamsService.getNavData();
        this.getDataFromCarrito();
        //this.setData();
        //this.setData();
      }

      ionViewWillLeave(){
        var cantidades=document.querySelectorAll('.cantidad');
        console.log(cantidades);
        let datos=[];
        for(var i=0; i<cantidades.length;i++){
          var id=cantidades[i].getAttribute("id");
          console.log('Guardaré el id ',id)
          console.log('Guardare la cantidad ',cantidades[i].innerHTML);
          datos.push({'id':id,'cantidad':cantidades[i].innerHTML});
        }
        console.log(datos);
        this.saveData(datos);
      }


      cargaPantalla() {  
        this.loadingCtrl.create({  
          message: 'Loading.....'   
        }).then((loading) => {  
          loading.present();{
            this.ionViewWillEnter();
            
        } 
        setTimeout(() => {   
          loading.dismiss();  
        }, 1000 );   
        });  
        } 

    capturar(){
      this.verSeleccion = this.opcion;
      //console.log(this.verSeleccion);
      this.productoService.getProductosByFiltro(this.opcion).subscribe(data => {
      console.log("esta es la data "+data["imagen"])
       console.log(data);
       this.producto=data;
        console.log(this.producto);

      },(error)=>{
        console.error(error);
      }) }


      buscarProducto(){
        
        this.productoInput= this.textInput;
        console.log(this.productoInput)
        this.productoService.getProductoBuscar(this.productoInput).subscribe(data => {
       
       this.producto=data;
        console.log(this.producto);
        if(Object.keys(this.producto).length === 0){
          this.mensajeIncorrecto("Producto no encontrado","No se ha podido encontrar el producto, intente de nuevo")
        }

      },(error)=>{
        console.error(error);
        this.mensajeIncorrecto("Algo Salio mal","Fallo en la conexión")
      }) }

      agregar(id:string){

        var cantidad= document.querySelectorAll('#'+id);
        console.log(cantidad[0])
        var num  = cantidad[0].innerHTML
        console.log(typeof(num))
        cantidad[0].innerHTML=String(parseInt(cantidad[0].innerHTML)+1);
      }

      quitar(id:string){
        var cantidad= document.querySelectorAll('#'+id);
        var num  = cantidad[0].innerHTML
        if((parseInt(num)-1)< 0){
          cantidad[0].innerHTML=String(parseInt(cantidad[0].innerHTML));

        }else{
          cantidad[0].innerHTML=String(parseInt(cantidad[0].innerHTML)-1);
        } 
      }

      carrito(id:string){
         this.storage.get('name').then((nombre) => {
          console.log('Name is', nombre);
          if(login.login ==false && nombre == null ){
            login.producto = true;
            this.router.navigateByUrl('/login');  
          }else{
            var cantidad = document.getElementById(id);
            console.log("La cantidad que se agrega al carrito es: ", cantidad.innerHTML);
            if(parseInt(cantidad.innerHTML) > 0){
              const prodxcant={
                'nombre': this.getNombre(id),
                'cantidad': parseInt(cantidad.innerHTML),
                'correo': this.correo
              }
              this.shoppingCart.addProduct(prodxcant).subscribe(data =>{
                if(data.valid == "OK"){
                  //this.storage.set(id,parseInt(cantidad.innerHTML));
                  //var number = this.getNumber();
                  //this.actualizarNum(number);
                  this.mensajeCorrecto("Agregar Producto","El producto se ha agregado al carrito");
                }else if (data.valid == "NOT"){
                  this.mensajeIncorrecto("Agregar Producto","Ha ocurrido un error, revise su conexión");

                }
              })
            }else{
              this.mensajeIncorrecto("Agregar Producto","No ha escogido la cantidad para agregar");
            }
          }
          });
        
      }

  getCorreo(){
    console.log(login.login)  
		this.storage.get('correo').then((val) => {
      this.correo=val;
      console.log('name: ',this.correo);
      
  });

  }

      async mensaje(titulo:string,subtitulo:string,mensaje:string) {
        const alert = await this.alert.create({
          cssClass: titulo,
          header: titulo,
          subHeader: subtitulo,
          message: mensaje,
          buttons: [
            {
              text: 'OK',
              role: 'cancel',
              handler: () => {
              }
            }
          ]
        });
      
        await alert.present();
      }
     
       showLoading(id:string) {  
        this.loadingCtrl.create({  
          message: 'Loading.....'   
          }).then((loading) => {  
           loading.present();{
            this.carrito(id);
          } 
           setTimeout(() => {   
             loading.dismiss();  
           }, 1000 );   
          });  
        } 
        showLoading2() {  
          this.loadingCtrl.create({  
            message: 'Loading.....'   
            }).then((loading) => {  
             loading.present();{
              this.buscarProducto();
            } 
             setTimeout(() => {   
               loading.dismiss();  
             }, 1000 );   
            });  
          } 
          showLoading3() {  
            this.loadingCtrl.create({  
              message: 'Loading.....'   
              }).then((loading) => {  
               loading.present();{
                this.capturar();
              } 
               setTimeout(() => {   
                 loading.dismiss();  
               }, 1000 );   
              });  
            }

  async detalle(imagen:string,nombre:string,descripcion:string,precio:string){
    const modal = await this.modalCtrl.create({
      component: DetallesProductosPage,
      cssClass: 'DetallesProducto',
      componentProps: {
        'imagen': imagen,
        'nombre': nombre,
        'descripcion': descripcion,
        'precio':precio
      }
    });
    return await modal.present();
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

  actualizarNum(valor:string){
    var tmp = valor;
    console.log(tmp)
    if(tmp == ""){
      tmp = String(1);
    }else{
      var num = parseInt(tmp)
      num = num+1;
      tmp = String(num)
    }
    console.log("voy a cambiar el valor a",tmp)
    this.storage.set('number', tmp);
  }

  getNumber(){
    var dato = "";
    this.storage.get('number').then((number) =>{
     dato = number;
    });
    console.log("voy a devolver",dato)
    return dato;
  }

  getNum(id:string){
    var dato = "";
    this.storage.get(id).then((data) =>{
      dato = data;
     });
    return dato;
  }

  cargarNum(id:string){
    var cantidad = document.getElementById(id);
    console.log(cantidad)
    var num  = cantidad.innerHTML
    console.log(typeof(num))
    var num =this.getNum(id);
    console.log(num)
    if(num != null){
      console.log("existen datos :'v")
      cantidad.innerHTML=String(num);
    }else{
      console.log("no existe datos :C")
      cantidad.innerHTML="0";
    }
        

  }

  getProductLen(){
    var pindex=0;
    for(let p in this.producto){
      pindex=+p+1;
    }
    return pindex;
  }

  getStoreLen(){
    var pindex=0;
    for(let p in this.almacenado){
      pindex=+p+1;
    }
    return pindex;
  }


  getNombre(id:string){
    for (let i=0; i< this.getProductLen(); i++){
      if(id===this.producto[i]['id_unico']){
        return this.producto[i]['nombre'];
      }
    }

  }

  getDataFromCarritoLen(){
    var pindex=0;
    for(let p in this.dataFromCart){
      pindex=+p+1;
    }
    return pindex;
  }

  getDataFromCarrito(){
    console.log(this.dataFromCart)
    for (var i=0; i<this.getDataFromCarritoLen();i++){
      try{
        var cantidad= document.querySelectorAll('#'+this.dataFromCart[i]['id']);
        console.log(cantidad);
        cantidad[0].innerHTML=this.dataFromCart[i]['cantidad'];
        console.log(cantidad[0].innerHTML);
      }catch(e){
        console.log(e);
        cantidad[0].innerHTML=this.dataFromCart[i]['cantidad'];
        continue;
      }
    }
  }

  saveData(estado:any){
    this.storage.set('productos',estado);
  }

  loadData(){
    console.log(login.login)  
		this.storage.get('productos').then((val) => {
      this.almacenado=val;      
    });

  }

  setData(){
    console.log("Estoy en el setData");
    console.log(this.getStoreLen());
    var cantidad= document.querySelectorAll('.cantidad');
    for (let i=0; i< this.getStoreLen(); i++){
      try{
      console.log(this.almacenado[i]['id']);
      console.log(cantidad);      
      cantidad[i].innerHTML=this.almacenado[i]['cantidad'];
      console.log('Seteo la siguiente cantidad ',cantidad[i].innerHTML);
      }catch(e){
        console.log(e);
        continue;
      }      
    }
  }

}




  
