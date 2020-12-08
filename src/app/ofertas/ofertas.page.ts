import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../servicios/producto.service';
import 'rxjs/add/operator/map';
import { AlertController, LoadingController,ModalController} from '@ionic/angular'
import { Storage } from '@ionic/storage';
import {login} from  './../global';
import { Router } from '@angular/router';
import {CorrectoPage} from '../aviso/correcto/correcto.page';
import {IncorrectoPage} from '../aviso/incorrecto/incorrecto.page';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.page.html',
  styleUrls: ['./ofertas.page.scss'],
})
export class OfertasPage implements OnInit {

  oferta : {};
  private correo:String="";
  constructor(public productoService: ProductoService,public modalCtrl: ModalController, public loadingCtrl: LoadingController, 
    private alert: AlertController,private storage: Storage,private  router:  Router) { }

  ngOnInit() {
    this.cargaPantalla();
    this.getCorreo();
  }

  ionViewDidLoad(){
    console.log("refresh");
     this.productoService.getOferta().subscribe(data => {
         //console.log("esta es la data "+data["nombre"])
        
        this.oferta=data;
       console.log(this.oferta);
 
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
    console.log("voy a enviar la oferta al carrito")
    this.storage.get('name').then((nombre) =>{
      console.log('Name is', nombre);
      if(login.login ==false && nombre == null ){
        login.oferta = true;
        this.router.navigateByUrl('/login');
      }else{
        var cantidad = document.getElementById(id);
        console.log(cantidad)
        const oferta={
          'nombre': id,
          'correo': this.correo
        }
        this.productoService.addOferta(oferta).subscribe(data =>{
          if(data.valid == "OK"){
            this.mensajeCorrecto("Agregar Oferta","El producto se ha agregado al carrito");
          }else if (data.valid == "NOT"){
            this.mensajeIncorrecto("Agregar Oferta","Ha ocurrido un error, revise su conexión"); 
          }  
        })
        /* Aqui tienes que enviar los datos que se obtengan de cantidad para el carrito*/
      }
    });
  }


  async mensajeCorrecto(titulo:string,mensaje:string){
    const modal = await this.modalCtrl.create({
      component: CorrectoPage,
      cssClass: 'CorrectoOferta',
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

