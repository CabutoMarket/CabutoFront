
import { NgModule } from '@angular/core';
import { Injectable } from  '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from  '@angular/common/http';
import { tap } from  'rxjs/operators';
import { Observable, BehaviorSubject } from  'rxjs';
import { Storage } from  '@ionic/storage';
import { User } from  './user';
import { Auth } from  './auth';
import { AuthResponse } from  './auth-response';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
	AUTH_SERVER_ADDRESS:  string  =  'http://127.0.0.1:8000';
  /**AUTH_SERVER_ADDRESS:  string  =  'http://cabutoshop.pythonanywhere.com';*/
	authSubject  =  new  BehaviorSubject(false);

  constructor(private  httpClient:  HttpClient, private  storage:  Storage) { }

  addUser(user:User):Observable<any>{
    const headers = {
      'Content-Type': 'application/json'
    }

    const body = JSON.stringify(user);
    console.log(body)
    return this.httpClient.post(`${this.AUTH_SERVER_ADDRESS}/registro/`,body,{'headers':headers})
  }

  VerificarUser(auth:Auth):Observable<any>{
    const headers = {
      'Content-Type': 'application/json'
    }
    const body = JSON.stringify(auth);
    console.log(body)
    return this.httpClient.post(`${this.AUTH_SERVER_ADDRESS}/login/`,body,{'headers':headers})
  }

/*  getUsers(){
     let headers=
          new HttpHeaders(
            {
                            'Access-Control-Allow-Origin':'*',
"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
            });
    return this.httpClient.get(`${this.AUTH_SERVER_ADDRESS}/login/`)      
          
      
  }*/
  /*
  addUser(user: User): Observable<AuthResponse> {
    console.log(user)
    return this.httpClient.post<AuthResponse>(`${this.AUTH_SERVER_ADDRESS}/registro/`, user).pipe(
      tap(async (res:  AuthResponse ) => {

        if (res.user) {
          await this.storage.set("ACCESS_TOKEN", res.user.access_token);
          await this.storage.set("EXPIRES_IN", res.user.expires_in);
          this.authSubject.next(true);
        }
      })

    );
  }*/


  /*addUser(user: User): Observable<User>{
          console.log("Quiero registrar un usuario")
          return this.httpClient.post<User>(this.AUTH_SERVER_ADDRESS + 'registro/',user,httpOptions)  
  }*/

/*
return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
    .pipe(
      catchError(this.handleError('addHero', hero))
    );
}
   register(user: User): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(`${this.AUTH_SERVER_ADDRESS}/register`, user).pipe(
      tap(async (res:  AuthResponse ) => {

        if (res.user) {
          await this.storage.set("ACCESS_TOKEN", res.user.access_token);
          await this.storage.set("EXPIRES_IN", res.user.expires_in);
          this.authSubject.next(true);
        }
      })

    );
  }*/
}
