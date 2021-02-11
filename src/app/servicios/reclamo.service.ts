import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReclamoService {

  baseUrl :string= "http://cabutoshop.pythonanywhere.com/movil/";

  constructor(
    private http: HttpClient
  ) { }

  envioReclamo(reclamo):Observable<any>{
    const headers = {
      'Accept': 'application/json, text/plain',
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json'
    }
    const body = JSON.stringify(reclamo);
    return this.http.post(this.baseUrl+`reclamo/`,body,{'headers':headers})
  }
}
