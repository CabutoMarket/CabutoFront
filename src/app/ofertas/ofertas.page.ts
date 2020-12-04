import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../servicios/producto.service';
import 'rxjs/add/operator/map';
import { AlertController, LoadingController,ModalController} from '@ionic/angular'
import { Storage } from '@ionic/storage';
import {login} from  './../global';
import { Router } from '@angular/router';
import {CorrectoPage} from '../aviso/correcto/correcto.page';
@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.page.html',
  styleUrls: ['./ofertas.page.scss'],
})
export class OfertasPage implements OnInit {

  oferta : {};
  constructor(public productoService: ProductoService,public modalCtrl: ModalController, public loadingCtrl: LoadingController, 
    private alert: AlertController,private storage: Storage,private  router:  Router) { }

  ngOnInit() {
    this.cargaPantalla();
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
    console.log("voy a enviar la oferta al carrito")
    this.storage.get('name').then((nombre) =>{
      console.log('Name is', nombre);
      if(login.login ==false && nombre == null ){
        login.oferta = true;
        this.router.navigateByUrl('/login');
      }else{
        var cantidad = document.getElementById(id);
        console.log(cantidad)
        /* Aqui tienes que enviar los datos que se obtengan de cantidad para el carrito*/
        this.mensajeCorrecto("Agregada al carrito","La oferta ha sido añadida al carrito")
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

  
}

