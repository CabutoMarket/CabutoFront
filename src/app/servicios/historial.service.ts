import { HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  baseUrl :string= "http://cabutoshop.pythonanywhere.com/movil/";

  constructor(
    private http: HttpClient
  	) { }

  getHistorial(id: string){
    let parametro= new HttpParams().set('cliente',id);
    return this.http.get(this.baseUrl+'historial/',{params:parametro})            
  }
  getPedido(id: string){
    let parametro= new HttpParams().set('id',id);
    return this.http.get(this.baseUrl+'historial/',{params:parametro});
  }
  nuevoPedido(info):Observable<any>{
    const headers = {
      'Accept': 'application/json, text/plain',
      'Content-Type': 'application/json'
    }
    const body = JSON.stringify(info);
    return this.http.post(this.baseUrl+'guardarPedido/',body,{'headers':headers})
  }
}
