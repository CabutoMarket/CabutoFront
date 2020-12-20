import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Producto_Carrito} from '../modelo/producto_carrito';
import { Auth } from '../auth/servicios/auth';
const httpOptions = {
  headers: new HttpHeaders({
      "Accept": "application/json, text/plain",
      "Content-Type": "application/x-www-form-urlencoded; charset=utf-8", 
      "cache-control": "no-cache", 
      "Access-Control-Allow-Origin": "*", 
      "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Accept, Authorization, X-Request-With, Access-Control-Request-Method, Access-Control-Request-Headers",
      "Access-Control-Allow-Credentials" : "true",
      "Access-Control-Allow-Methods" : "GET, POST, DELETE, PUT, OPTIONS, TRACE, PATCH, CONNECT",  
    })
 };

@Injectable({
  providedIn: 'root'
})

export class ShoppingCartService {

  baseUrl :string= "http://cabutoshop.pythonanywhere.com/movil/";

  constructor(private http: HttpClient) { }

  addProduct(producto_carrito: Producto_Carrito):Observable<any>{
    const headers = {
      'Accept': 'application/json, text/plain',
      'Content-Type': 'application/json'
    }
    console.log("sin transformar")
    console.log(producto_carrito)
    const body = JSON.stringify(producto_carrito);
    console.log("Transformar")
    console.log(body)
    return this.http.post(this.baseUrl+'producto/',producto_carrito,{'headers':headers})
  }

  showCart(auth:Auth):Observable<any>{
    const headers = {
      'Accept': 'application/json, text/plain',
      'Content-Type': 'application/json'
    }
    console.log("sin transformar")
    console.log(auth)
    const body = JSON.stringify(auth);
    console.log("Transformar")
    console.log(body)
    return this.http.post(this.baseUrl+'carrito/',auth,{'headers':headers})
  }

  quitarCarrito(producto_carrito: Producto_Carrito):Observable<any>{
    const headers = {
      'Accept': 'application/json, text/plain',
      'Content-Type': 'application/json'
    }
    console.log("sin transformar")
    console.log(producto_carrito)
    const body = JSON.stringify(producto_carrito);
    console.log("Transformar")
    console.log(body)
    return this.http.post(this.baseUrl+'quitar/',producto_carrito,{'headers':headers})
  }
  
}
