import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoberturaService {

  baseUrl :string= "http://cabutoshop.pythonanywhere.com/movil/";

  constructor(
    private http: HttpClient) { }
    
  getCobertura() {
    return this.http.get(this.baseUrl+'cobertura/')            
  }
  
}
