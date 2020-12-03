import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../servicios/producto.service';
import 'rxjs/add/operator/map';
import { AlertController, LoadingController,ModalController} from '@ionic/angular'
import { Storage } from '@ionic/storage';
import {login} from  './../global'

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.page.html',
  styleUrls: ['./ofertas.page.scss'],
})
export class OfertasPage implements OnInit {

  oferta : {};
  constructor(public productoService: ProductoService,public modalCtrl: ModalController, public loadingCtrl: LoadingController, 
    private alert: AlertController,) { }

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
}
