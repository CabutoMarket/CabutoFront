import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../servicios/producto.service';
import 'rxjs/add/operator/map';
import { AlertController, LoadingController,ModalController} from '@ionic/angular'
import { Storage } from '@ionic/storage';
import {login} from  './../global';
import { Router } from '@angular/router';
import {CorrectoPage} from '../aviso/correcto/correcto.page';
import {IncorrectoPage} from '../aviso/incorrecto/incorrecto.page';
import {NavParamsService} from '../servicios/nav-params.service'


@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.page.html',
  styleUrls: ['./ofertas.page.scss'],
})
export class OfertasPage implements OnInit {

  dataFromCart: {};
  oferta : {};
  private correo:String="";
  constructor(public productoService: ProductoService,public modalCtrl: ModalController, public loadingCtrl: LoadingController, 
    private alert: AlertController,private storage: Storage,private  router:  Router, private navParamsService: NavParamsService) { }

  ngOnInit() {
    this.cargaPantalla();
    this.getCorreo();
    //this.storage.set('oferta', true);
    //this.storage.set('producto', false);
    //this.storage.set('cupones', false);
    //this.storage.set('politica', false);
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
  
  /*ionViewDidEnter(){
    this.dataFromCart=this.navParamsService.getNavData();
    this.getDataFromCarrito();
  }*/
 
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
    var cantidad= document.querySelectorAll('#'+id);
        console.log(cantidad[0])
        //console.log(cantidad)
        var num  = cantidad[0].innerHTML
        console.log(typeof(num))
        //if(isNaN(String(num)) == false){
        //var num2 = parseInt(num)+1
        //var numS=String(num2);
        //cantidad.setAttribute('value',String(parseInt(cantidad.getAttribute('value'))+1));
        cantidad[0].innerHTML=String(parseInt(cantidad[0].innerHTML)+1);
        //this.saveData(id,cantidad[0].innerHTML);
  }

  quitar(id:string){
    //var cantidad = document.getElementById(id);
        //var num  = cantidad.getAttribute('value')
        var cantidad= document.querySelectorAll('#'+id);
        var num  = cantidad[0].innerHTML
        if((parseInt(num)-1)< 0){
          //cantidad.setAttribute('value',String(parseInt(num)));
          cantidad[0].innerHTML=String(parseInt(cantidad[0].innerHTML));

        }else{
          //cantidad.setAttribute('value',String(parseInt(num)-1));
          cantidad[0].innerHTML=String(parseInt(cantidad[0].innerHTML)-1);
          //this.saveData(id,cantidad[0].innerHTML);

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
        if(parseInt(cantidad.innerHTML) > 0){
          const oferta={
            'nombre': this.getNombre(id),
            'correo': this.correo,
            'cantidad': parseInt(cantidad.innerHTML)
          }
          this.productoService.addOferta(oferta).subscribe(data =>{
            if(data.valid == "OK"){
              this.mensajeCorrecto("Agregar Oferta","El producto se ha agregado al carrito");
            }else if (data.valid == "NOT"){
              this.mensajeIncorrecto("Agregar Oferta","Ha ocurrido un error, revise su conexión"); 
            }  
          })
          /* Aqui tienes que enviar los datos que se obtengan de cantidad para el carrito*/
        }else{
          this.mensajeIncorrecto("Agregar Producto","No ha escogido la cantidad para agregar");
        }
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

  getOfertLen(){
    var pindex=0;
    for(let p in this.oferta){
      pindex=+p+1;
    }
    return pindex;
  }

  getNombre(id:string){
    for (let i=0; i< this.getOfertLen(); i++){
      if(id===this.oferta[i]['id_unico']){
        return this.oferta[i]['nombre'];
      }
    }

  }

  /*getDataFromCarritoLen(){
    var pindex=0;
    for(let p in this.dataFromCart){
      pindex=+p+1;
    }
    return pindex;
  }

  getDataFromCarrito(){
    console.log(this.dataFromCart)
    for (var i=0; i<this.getDataFromCarritoLen();i++){
      var cantidad= document.querySelectorAll('#'+this.dataFromCart[i]['id']);
      console.log(cantidad);
      cantidad[2].innerHTML=this.dataFromCart[i]['cantidad'];
      //id.innerHTML="100";
      console.log(cantidad[2].innerHTML);
    }
  }*/

  
}

