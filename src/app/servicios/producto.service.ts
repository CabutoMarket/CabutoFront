import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import {Producto} from '../modelo/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
baseUrl :string= "http://localhost:8000/";

  constructor(
    private http: HttpClient
  	) { }

  getProducto() {
     let headers=
          new HttpHeaders(
            {
                            'Access-Control-Allow-Origin':'*',
"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
           //   'Accept': 'application/json',
              // 'Access-Control-Request-Headers': '*',
             //              'content-type': 'application/json'

            });
    //console.log('getProducto '+this.baseUrl + '/producto')
    //return this.http.get<Producto[]>(this.baseUrl + 'producto')
    //,{headers:headers}
    return this.http.get(this.baseUrl+'producto/')      
          
      
  }


  getProductosByFiltro(filtro: String){

  }
}
