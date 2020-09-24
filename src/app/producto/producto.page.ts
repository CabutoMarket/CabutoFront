import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../servicios/producto.service';
import {Producto} from '../modelo/producto';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';

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

  constructor(
    public productoService: ProductoService

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

  }
