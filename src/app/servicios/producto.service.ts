import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

import {Producto} from '../modelo/producto';
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
export class ProductoService {
baseUrl :string= "http://cabutoshop.pythonanywhere.com/movil/";

  constructor(
    private http: HttpClient
  	) { }

  getProducto() {
     let headers=
          new HttpHeaders(
            {
                            'Access-Control-Allow-Origin':'*',
"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
            });
          
    //console.log('getProducto '+this.baseUrl + '/producto')
    //return this.http.get<Producto[]>(this.baseUrl + 'producto')
    //,{headers:headers}
    return this.http.get(this.baseUrl+'producto/')      
          
      
  }


  getProductosByFiltro(filtro: String){
    switch (filtro) {
      case "vendidos":
        return this.http.get(this.baseUrl+'producto/orderAsc')      
        break;
      case "menor":
      return this.http.get(this.baseUrl+'producto/precioMayor')      
        break;
      case "mayor":
      return this.http.get(this.baseUrl+'producto/precioMenor')      
        break;
      case "ascendente":
      return this.http.get(this.baseUrl+'producto/orderAsc')
        break;
      case "descendente":
      return this.http.get(this.baseUrl+'producto/orderDesc')      
        break;
      default:
       return this.http.get(this.baseUrl+'producto/')      
        break;
    }
  }



  getProductoBuscar(filtro: string){
    let parametro= new HttpParams().set('nombre',filtro);

    console.log("este es el filtro",filtro);
    console.log(this.baseUrl+'producto/?nombre='+filtro)
    const httpOptions = {
          headers: new HttpHeaders({
              'Accept': 'application/json, text/plain',
              'Content-Type':  'application/json',
            })
         };
        return this.http.get(this.baseUrl+'producto/',{params:parametro});

  }

}
