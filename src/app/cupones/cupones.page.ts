import { Component, OnInit } from '@angular/core';
import {login} from  './../global'
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { AlertController, LoadingController,ModalController} from '@ionic/angular';
import { Storage } from '@ionic/storage';
import {ShoppingCartService} from '../servicios/shopping-cart.service';
import {CorrectoPage} from '../aviso/correcto/correcto.page';
import {IncorrectoPage} from '../aviso/incorrecto/incorrecto.page';
import {CuponesService} from '../servicios/cupones.service';

@Component({
  selector: 'app-cupones',
  templateUrl: './cupones.page.html',
  styleUrls: ['./cupones.page.scss'],
})
export class CuponesPage implements OnInit {

  cupon : {};
  url= '' ;
  valor = 0;
  constructor(public cuponesService: CuponesService, private  router:  Router,private alert: AlertController,
    public loadingCtrl: LoadingController,
    private storage: Storage,
    public modalCtrl: ModalController,
    private shoppingCart: ShoppingCartService) { }

  ngOnInit() {
    this.cargaPantalla()
  }

  pantalla(){
    console.log("refresh");
     this.cuponesService.getCupon().subscribe(data => {
       //console.log("esta es la data "+data["nombre"])
       this.cupon=data;
       var tol =Object.entries(this.cupon).length
       console.log(this.cupon);
       console.log(tol)
       if(tol==0){
        this.mensajeIncorrecto("No existen cupones disponibles","agregaramos nuevos cupos más adelantes");
       }
       },(error)=>{
         console.log("algo salio mal")
         this.mensajeIncorrecto("Algo salió mal","error de conexión");
         console.error(error);
       }) 
  }
  
  cargaPantalla() {  
    this.loadingCtrl.create({  
      message: 'Loading.....'   
    }).then((loading) => {  
      loading.present();{
        this.pantalla();
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


  agregar(id:string,id2:string){
    this.mensajeCorrecto("Cupon Agregado","Cupon Agregado Exitosamente");
    console.log("esto en agregar y el id que tengo es",id)
    console.log("esto en agregar y el id2 que tengo es",id2)
    var doc=document.getElementById(id)
    console.log(doc)
    var doc2=document.getElementById(id2)
    console.log("estoy en agregar",doc2.style.visibility)
    doc2.style.visibility = "hidden";
    doc.style.visibility = "hidden";

  }

  mostrar(id:string){
    console.log("esto en mostrar y el id que tengo es",id)
    var doc=document.getElementById(id)
    console.log(doc)
    console.log(doc.style.visibility)
    //doc.style.visibility = "hidden";
    //this.agregar()
    if(this.valor ==0){
      doc.style.visibility = "visible";
      this.valor= 1;
    }else{
      doc.style.visibility = "hidden";
      this.valor = 0;
    }
    //doc.style.visibility = "visible";
  }
}
