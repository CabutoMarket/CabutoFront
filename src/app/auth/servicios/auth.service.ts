import { NgModule } from '@angular/core';
import { Injectable } from  '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from  '@angular/common/http';
import { tap } from  'rxjs/operators';
import { Observable, BehaviorSubject } from  'rxjs';
import { User } from  './user';
import { Auth } from  './auth';
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { auth } from 'firebase';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
	/*AUTH_SERVER_ADDRESS:  string  =  'http://127.0.0.1:8000';*/
  AUTH_SERVER_ADDRESS:  string  =  'http://cabutoshop.pythonanywhere.com/';

  constructor(private  httpClient:  HttpClient, private AFauth: AngularFireAuth, private db: AngularFirestore,
              private fb: Facebook ) { }

  addUser(user:User):Observable<any>{
    const headers = {
      'Accept': 'application/json, text/plain',
      'Content-Type': 'application/json'
    }

    const body = JSON.stringify(user);
    console.log(body)
    return this.httpClient.post(`${this.AUTH_SERVER_ADDRESS}/registro/`,body,{'headers':headers})
  }

  VerificarUser(auth:Auth):Observable<any>{
    const headers = {
      'Accept': 'application/json, text/plain',
      'Content-Type': 'application/json'
    }
    const body = JSON.stringify(auth);
    console.log(body)
    return this.httpClient.post(`${this.AUTH_SERVER_ADDRESS}/login/`,body,{'headers':headers})
  }

  loginwithFacebook(){
    return this.fb.login(['email','public_profile']).then((response: FacebookLoginResponse)=>{
      const credencial_fb = auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
      return this.AFauth.signInWithCredential(credencial_fb);
    })
  }

}
