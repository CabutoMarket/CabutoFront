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
  producto : {};
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
        

      },(error)=>{
      	console.error(error);
      })      

}}
