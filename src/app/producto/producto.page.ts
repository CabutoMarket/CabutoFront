import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../servicios/producto.service';
import {Producto} from '../modelo/producto';
import { Observable, Subject } from 'rxjs';
import {login} from  './../global'
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { AlertController} from '@ionic/angular';
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

  constructor(
    public productoService: ProductoService, private  router:  Router,private alert: AlertController

  	) { }

  ngOnInit() {

    this.ionViewDidLoad();

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



    capturar(){
      this.verSeleccion = this.opcion;
      //console.log(this.verSeleccion);
      this.productoService.getProductosByFiltro(this.opcion).subscribe(data => {
        //console.log("esta es la data "+data["nombre"])
       console.log(data);
       this.producto=data;
        console.log(this.producto);

      },(error)=>{
        console.error(error);
      }) }


      buscarProducto(){
        this.productoInput= this.textInput;
        this.productoService.getProductoBuscar(this.productoInput).subscribe(data => {
        //console.log("esta es la data "+data["nombre"])
       
       this.producto=data;
        console.log(this.producto);

      },(error)=>{
        console.error(error);
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
        if(login.login ==false){
          this.router.navigateByUrl('/login');  
        }else{
          var cantidad = document.getElementById(id);
          console.log(cantidad)
          if(parseInt(cantidad.getAttribute('value')) > 0){
            this.mensaje("Agregar Producto","Agregar producto","el producto se ha agregado al carrito");
          }else{
            this.mensaje("Agregar Producto","No hay cantidad","No ha escogido la cantidad para agregar");
          }
        }
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

  }

  