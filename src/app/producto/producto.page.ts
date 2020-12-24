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
    n = 0;
    loaderToShow: any;
    private correo:String="";

  constructor(
    public productoService: ProductoService, private  router:  Router,private alert: AlertController,
    public loadingCtrl: LoadingController,
    private storage: Storage,
    public modalCtrl: ModalController,
    private shoppingCart: ShoppingCartService

  	) { }

  ngOnInit() {

    this.cargaPantalla();
    this.getCorreo();
    this.storage.set('oferta', false);
    this.storage.set('producto', true);
  }

  

 ionViewDidLoad(){
 	console.log("refresh");
    this.productoService.getProducto().subscribe(data => {
      //console.log("esta es la data "+data["nombre"])
      this.producto=data;
      console.log(this.producto);

      },(error)=>{
      	console.error(error);
      }) }


      cargaPantalla() {  
        this.loadingCtrl.create({  
          message: 'Loading.....'   
        }).then((loading) => {  
          loading.present();{
            this.ionViewDidLoad();
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
        //console.log("esta es la data "+data["nombre"])
       
       this.producto=data;
        console.log(this.producto);
        if(Object.keys(this.producto).length === 0){
          //this.mensaje("Producto No encontrado","Intente de nuevo","No se ha podido encontrar el producto")
          this.mensajeIncorrecto("Producto no encontrado","No se ha podido encontrar el producto, intente de nuevo")
        }

      },(error)=>{
        console.error(error);
        //this.mensaje("Algo Salio mal","Fallo en la conexión","Fallo en la red")
        this.mensajeIncorrecto("Algo Salio mal","Fallo en la conexión")
      }) }

      agregar(id:string){
        //console.log(id)
      
        var cantidad = document.getElementById(id);
        console.log(cantidad)
        var num  = cantidad.getAttribute('value')
        console.log(typeof(num))
        //if(isNaN(String(num)) == false){
        //var num2 = parseInt(num)+1
        //var numS=String(num2);
        cantidad.setAttribute('value',String(parseInt(cantidad.getAttribute('value'))+1));
        
      }

      quitar(id:string){
        var cantidad = document.getElementById(id);
        var num  = cantidad.getAttribute('value')
        if((parseInt(num)-1)< 0){
          cantidad.setAttribute('value',String(parseInt(num)));
        }else{
          cantidad.setAttribute('value',String(parseInt(num)-1));
        } 
      }

      carrito(id:string){
        /*var datos = this.nativeStorage.getItem('user')
        .then(
          //datos => console.log(datos),
          error => console.error(error)
        );
        var dato2 = this.nativeStorage.keys()
        .then(
          dato2 => console.log(datos),
          error => console.error(error)
        );
        console.log("Datos 1")
        console.log(datos)
        console.log("Datos 2")
        console.log(dato2)*/
        this.getCorreo();
         this.storage.get('name').then((nombre) => {
          console.log('Name is', nombre);
          if(login.login ==false && nombre == null ){
            login.producto = true;
            this.router.navigateByUrl('/login');  
          }else{
            var cantidad = document.getElementById(id);
            if(parseInt(cantidad.getAttribute('value')) > 0){
              const prodxcant={
                'nombre': id,
                'cantidad': parseInt(cantidad.getAttribute('value')),
                'correo': this.correo
              }
              this.shoppingCart.addProduct(prodxcant).subscribe(data =>{
                if(data.valid == "OK"){
                  this.mensajeCorrecto("Agregar Producto","El producto se ha agregado al carrito");
                }else if (data.valid == "NOT"){
                  this.mensajeIncorrecto("Agregar Producto","Ha ocurrido un error, revise su conexión");

                }
              })
              //this.mensaje("Agregar Producto","Agregar producto","el producto se ha agregado al carrito");
              /* aqui debers enviar el producto y cantidad al carrito */
            }else{
              //this.mensaje("Agregar Producto","No hay cantidad","No ha escogido la cantidad para agregar");
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
}



  