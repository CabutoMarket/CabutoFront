import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

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

  addProduct(id: number):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
          'Accept': 'application/json, text/plain',
          'Content-Type':  'application/json',
        })
     };
    console.log("sin transformar")
    console.log(id)
    const body = JSON.stringify(id);
    console.log("Transformar")
    console.log(body)
    return this.http.post(this.baseUrl+/productoCarrito/,id)
  }

  showCart(){
    const httpOptions = {
          headers: new HttpHeaders({
              'Accept': 'application/json, text/plain',
              'Content-Type':  'application/json',
            })
         };
    return this.http.get(this.baseUrl+'carrito/');
  }
}
