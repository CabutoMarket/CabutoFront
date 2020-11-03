import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
          headers: new HttpHeaders({
                          'Accept': 'application/json, text/plain',

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
export class EstablecimientoService {
  baseUrl :string= "http://cabutoshop.pythonanywhere.com/movil/";

  constructor(
    private http: HttpClient
  	) { }

  getEstablecimiento() {
     let headers=
          new HttpHeaders(
            {
                            'Access-Control-Allow-Origin':'*',
"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
            });
    return this.http.get(this.baseUrl+'establecimiento/')            
  }
  getEstablecimientoBuscar(filtro: string){
    let parametro= new HttpParams().set('nombre',filtro);
    const httpOptions = {
          headers: new HttpHeaders({
              'Accept': 'application/json, text/plain',
              'Content-Type':  'application/json',
            })
         };
        return this.http.get(this.baseUrl+'establecimiento/',{params:parametro});

  }
}
