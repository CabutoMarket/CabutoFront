import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthService } from '../../servicios/auth.service';
import { LoadingController } from '@ionic/angular';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})


export class RegistroPage implements OnInit {
  url= '' ;
  x = '';
  public type = "password"; 
  passwordToggleIcon = 'eye';
  public showPass = false; 
	constructor(private  authService:  AuthService, private  router:  Router, private loading: LoadingController,
    private alert: AlertController,
    private toast: ToastController,
    /*private emailComposer: EmailComposer,*/) { }
	
  ngOnInit() {
    
  } 
  
register(form){
	form = form.value
	console.log(form)
  console.log(form.confirmar)
  console.log(form.contrasena)
  var contra = form.contrasena;
  var conf = form.confirmar
  var cedula =form.cedula
  //var int_length = (''+cedula).length;
  console.log(typeof(cedula));
  console.log(cedula);
  //console.log(typeof(form.nombre));
  //console.log(typeof(form.apellido));
  //console.log(isNaN(form.apellido));

  //console.log(int_length);
  //console.log(this.validarEmail(form.email));
  console.log(isNaN(cedula));

  if(isNaN(cedula) == false){
    //var int_length = (''+cedula).length;
    var int_length = cedula.length;
    console.log(int_length);
    if(int_length<10 ){
      this.mensaje("Error","Revisar cedula","Recuerde que si ingresa cedula deben ser 10 dígitos ");
    }else if((int_length<10 && int_length <13 )|| int_length >13){
      this.mensaje("Error","Revisar RUC","Recuerde que si ingresa cedula deben ser  RUC 13 dígitos");
    }
    if(this.validarEmail(form.email) == false){
      this.mensaje("Error","Revisar correo","Escriba de su correo de manera correcta");
      //this.router.navigateByUrl('/registro'); 
    }
    if (contra!= conf){
      this.mensaje("Registro Fallido","Las contraseñas no coinciden","Verifique que las contraseñas sean iguales");
      //this.router.navigateByUrl('/registro'); 
    }
    console.log("voy a comparar");
        console.log(this.isEqual(form.nombre,form.apellido));
    
    if(contra == conf && (int_length == 10 || int_length == 13)&& this.validarEmail(form.email) == true){
      if(isNaN(form.nombre) && isNaN(form.apellido)){
        console.log("voy a comparar");
        console.log(this.isEqual(form.nombre,form.apellido));
        if(this.isEqual(form.nombre,form.apellido)){
          this.mensaje("Registro Fallido","Las problemas con nombre ","el nombre y apellido registrado son iguales");
        }else{
          this.authService.addUser(form).subscribe(data=> {
            console.log("imprimiendo data",data, form)
            if(data.valid == "OK"){
              this.mensaje("Registro","Registro exitoso","Registro Completado");
              this.router.navigateByUrl('/login');
            }else{
              this.mensaje("Error", "Parece que algo ha ocurrido","Numero de cedula/Ruc o correo Invalido");
              this.router.navigateByUrl('/registro'); 
            }
        
          })
        }
      }else{
        this.mensaje("Registro Fallido","Las problemas con nombre ","Por favor ingrese un nombre y apellido de manera  correcta");         
      }
      
    }
    
  }else{
    this.mensaje("Registro Fallido","RUC/cedula ","Su Ruc/Cedula solo debe contener valores numericos");
    
  }
  
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
  
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        console.log(event.target.result);
        //console.log(this.ab2str(event.target.result))
        //this.url = this.url + event.target.result
        //this.converTo(event.target.result,this.x)
        //this.url = event.target.result
        //this.converTo(event.target.result,this.url)
        this.url = this.convert(event.target.result,this.url)
        
      }

    }
  }
  public delete(){
    this.url = '';
  }

  convert(buff,buff2){
    for (var i=0, strLen=buff.length; i < strLen; i++) {
      buff2= buff2 + buff[i];
    }
    console.log(buff2)
    return buff2;
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


     validarEmail(valor){
      var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(valor) ? true : false;
  }


    isEqual(str1, str2){
    return str1.toUpperCase() === str2.toUpperCase()
}

cargar(){
  var valor = 1;
  /*while(valor < 7){
     var dato = document.getElementById(String(valor));
    console.log(dato);
  }*/
  var dato = document.getElementById(String(valor));
  var d = dato.getAttribute('placeholder')
  console.log(d)
  dato.setAttribute('placeholder',"*");
}
//https://www.youtube.com/watch?v=dPUmskG_-y0
//https://forum.ionicframework.com/t/how-i-can-change-my-app-name/20458/14
}