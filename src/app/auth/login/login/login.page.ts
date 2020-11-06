import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthService } from '../../servicios/auth.service';
import { LoadingController } from '@ionic/angular';
import { AlertController, ToastController,Platform, ModalController } from '@ionic/angular';
import {ModalPage} from './../../../modal/modal.page';
import {login} from  '../../../global'
import { Storage } from '@ionic/storage';
import {AppComponent} from  '../../../app.component'
/*import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireAuthModule } from '@angular/fire/auth';

import * as firebase from 'firebase/app';

import { Platform } from '@ionic/angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
*/

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {
	validacion : {};
  public alertShown: boolean = false;
  picture:string ;
  name:string;
  email:string;

  isLoggedIn: boolean = false
  user: any
  public type = "password"; 
  passwordToggleIcon = 'eye';
  public showPass = false; 
  constructor(private  authService:  AuthService, private  router:  Router, private loading: LoadingController,
    private alert: AlertController,
    private toast: ToastController,
    private platform: Platform,
    public modalCtrl: ModalController,
    private storage: Storage,
    private component: AppComponent,
    /*private nativeStorage: NativeStorage
    private afAuth: AngularFireAuth,
    private afAuth2: AngularFireAuthModule,
    private platform: Platform,
    private googlePlus: GooglePlus,
    private fb: Facebook*/) { }
	
  ngOnInit() {
  }

  async contrasena(){
    //let modal = this.modalCtrl.create(ModalPage);
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      cssClass: 'custom-modal'
    });
    return await modal.present();
  }
  
  verificar(form){
	form = form.value
	console.log(form)
  console.log(form.correo)
  console.log(form.contrasena)
	if(form.correo == "" || form.contrasena == "" ){
    this.mensaje("Campos Incompletos","Revisar los campos","Por favor complete los campos");
  }else{
    this.show(form)
  }
  }

  verificarB(form){
    this.authService.VerificarUser(form).subscribe(data=> {
      console.log(data.valid)
      if (data.valid == "OK"){
        //this.router.navigateByUrl('/producto');
        var nombre = data.nombre;
        var apellido = data.apellido;
        console.log(nombre)
        console.log(apellido)
        login.login = true;
        this.storage.set('name', nombre);
        this.storage.set('apellido', apellido);
        this.storage.set('correo', form.correo);
        this.component.name=nombre;
        this.component.lastname = apellido;
        this.component.action="Cerrar Sesión";
        this.router.navigateByUrl('/producto');
      }
      else{
        this.mensaje("Acceso Incorrecto","Algo salió mal","Su correo o contraseña están incorrectos");
        this.router.navigateByUrl('/login');
      }
      
      })
  }

  async forgotPass() {
    const forgot = await this.alert.create({
      cssClass: 'Forgot Password?',
      header:'Forgot Password?',
      message: "Enter you email address to send a reset link password.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler:  data => {
            console.log('Send clicked');
             this.presentToast();

          }
        }
      ]
    });
    forgot.present();
  }


async presentToast() {
    const toast = await this.toast.create({
              message: 'Email was sended successfully',
              duration: 3000,
              position: 'top',
              cssClass: 'dark-trans',
              /*closeButtonText: 'OK',
              showCloseButton: true*/
    });
    toast.present();
  }


async mensaje(titulo:string,subtitulo:string,mensaje:string) {
    const alert = await this.alert.create({
      cssClass: titulo,
      header: titulo,
      subHeader: subtitulo,
      message: mensaje,
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });

    await alert.present();
  }

  facebook(){
    //this.router.navigateByUrl('/registro-fb');
    this.authService.loginwithFacebook().then(res=>{
      const usuario = res.user;
      var mail = usuario.email;
      var contra = usuario.displayName;
      var foto = usuario.photoURL;
      const logR ={
        'cedula': " ",
        'email': mail,
        'nombre': contra,
        'apellido': " ",
        'contrasena': contra,
        'confirmar': contra

      }
      
      //this.router.navigateByUrl('/producto');
      const log=  {'correo': mail,
        'contrasena': contra
      }
      this.authService.VerificarUser(log).subscribe(data=> {
        console.log(data.valid)
        if (data.valid == "OK"){
          var nombre = data.nombre;
          var apellido = data.apellido;
          console.log(nombre)
          console.log(apellido)
          login.login = true;
          this.storage.set('name', nombre);
          this.storage.set('apellido', apellido);
          this.storage.set('correo', mail);
          this.component.name=nombre;
          this.component.lastname = apellido;
          this.component.action="Cerrar Sesión";
          this.router.navigateByUrl('/producto');
        }
        else{
          this.authService.addUser(logR).subscribe(data=> {
            
            console.log("imprimiendo data",data, logR)
            if(data.valid == "OK"){
              this.mensaje("Registro","Registro","Registro exitoso");
              var nombre = data.nombre;
              var apellido = data.apellido;
              console.log(nombre)
              console.log(apellido)
              login.login = true;
              this.storage.set('name', nombre);
              this.storage.set('apellido', apellido);
              this.storage.set('correo', mail);
              this.component.name=nombre;
              this.component.lastname = apellido;
              this.router.navigateByUrl('/producto');
            }else{
              this.mensaje("Error", "Registro","Parece que algo ha ocurrido");
              this.router.navigateByUrl('/login'); 
            }
          console.log(logR);
            })
        }
        
      })
      
      }).catch(err =>{
        this.mensaje("Fallo de conexión","algo salio mal","No se pudo iniciar sesión");
      })
    }

    togglePasswordClick():void{
      this.showPass=!this.showPass;   
      if(this.passwordToggleIcon == 'eye'){
        this.passwordToggleIcon = 'eye-off';
      }else{
        this.passwordToggleIcon = 'eye';
      }
    }
    showPassword() {
      this.showPass = !this.showPass;
            if(this.showPass){
                this.type = "text";
                 } else {
           this.type = "password";
         }
       } 


       showLoading(form) {  
        this.loading.create({  
          message: 'Loading.....'   
          }).then((loading) => {  
           loading.present();{
            this.verificar(form);
          } 
           setTimeout(() => {   
             loading.dismiss();  
           }, 2000 );   
          });  
        }

        showLoadingC() {  
          this.loading.create({  
            message: 'Loading.....'   
            }).then((loading) => {  
             loading.present();{
              this.contrasena();
            } 
             setTimeout(() => {   
               loading.dismiss();  
             }, 1000 );   
            });  
          }

          showLoadingF() {  
            this.loading.create({  
              message: 'Loading.....'   
              }).then((loading) => {  
               loading.present();{
                this.facebook();
              } 
               setTimeout(() => {   
                 loading.dismiss();  
               }, 1000 );   
              });  
            }


            showLoadingR() {  
              this.loading.create({  
                message: 'Loading.....'   
                }).then((loading) => {  
                 loading.present();{
                  this.router.navigateByUrl('/registro');
                } 
                 setTimeout(() => {   
                   loading.dismiss();  
                 }, 1000 );   
                });  
              }

              
  show(form){
    this.loading.create({
      message: 'Loading.....'
    }).then((loading) => {
      loading.present();{
        this.verificarB(form);
      }
      setTimeout(() => { 
        loading.dismiss();  
      }, 1000 );  
    }); 
  }
}





