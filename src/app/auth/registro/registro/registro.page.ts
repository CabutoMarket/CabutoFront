import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthService } from '../../servicios/auth.service';
import { LoadingController } from '@ionic/angular';
import { AlertController, ToastController } from '@ionic/angular';
import { buffer } from 'rxjs/operators';
import { FileUploader, FileLikeObject } from  'ng2-file-upload';
import { concat } from  'rxjs';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})


export class RegistroPage implements OnInit {

  public fileUploader: FileUploader = new FileUploader({});
  formData = new FormData();
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
  //console.log(this.url)
  //console.log(typeof(form.nombre));
  //console.log(typeof(form.apellido));
  //console.log(isNaN(form.apellido));
  //this.formData.append('file' ,this.url);
  console.log(this.formData.getAll('file'));
  //console.log(int_length);
  //console.log(this.validarEmail(form.email));
  console.log(isNaN(cedula));
  const foto = {
    'url': this.formData.getAll('file')
  }
  const formR={
    //'foto': this.formData.getAll('file'),
    'cedula': form.cedula,
    'nombre': form.nombre,
    'apellido': form.apellido,
    'email':form.email,
    'contrasena': form.contrasena,
    'confirmar': form.confirmar
  }
  console.log(formR)
  if(form.cedula == ''|| form.nombre == '' || form.apellido == '' ||form.correo == "" || form.contrasena == "" ||form.confirmar == "" ){
    this.mensaje("Campos Incompletos","Revisar los campos","Por favor complete los campos");
  }else{
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
            this.showLoading(formR)
          }
        }else{
          this.mensaje("Registro Fallido","Las problemas con nombre ","Por favor ingrese un nombre y apellido de manera  correcta");         
        }
        
      }
      
    }else{
      this.mensaje("Registro Fallido","Ruc/Cedula ","Su Cedula debe contener solo numeros");
      
    }
  }

  
  
}


registroR(formR){
  this.authService.addUser(formR).subscribe(data=> {
    console.log("imprimiendo data",data, formR)
    if(data.valid == "OK"){
      //this.mensaje("Registro","Registro exitoso","Registro Completado");
      this.router.navigateByUrl('/registro-exitoso');
    }else if(data.valid == 'CED'){
      this.mensaje("Error", "No se ha podido completar el registro","La cedula ya se encuentra registrada");
      this.router.navigateByUrl('/registro'); 
    }
    else{
      this.mensaje("Error", "No se ha podido completar el registro","El correo ya esta registrado");
      this.router.navigateByUrl('/registro'); 
    }

  })
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
      console.log(event.target.files)
      console.log(event.target.files[0])
      console.log(event.target.files[0].name)
      this.formData.append('file' ,event.target.files[0]);
      reader.onload = (event) => { // called once readAsDataURL is completed
        //console.log(event.target.result);
        //console.log(this.ab2str(event.target.result))
        //this.url = this.url + event.target.result
        //this.converTo(event.target.result,this.x)
        //this.url = event.target.result
        //this.converTo(event.target.result,this.url)
        //this.formData.append('file' , file.rawFile, file.name); 
        
        var ul = ""
        var buf = this.convert(event.target.result,ul)
        this.url = buf;
        
        

        
      }

    }
  }
  public delete(){
    this.url = '';
  }

  uploadPersonaImage(e) {
    //this.url = e.target.src;
    console.log(e.target.src)  
  }

  convert(buff,buff2){
    for (var i=0, strLen=buff.length; i < strLen; i++) {
      buff2= buff2 + buff[i];
    }
    var buff3 = buff2
    //console.log(buff2)
    return buff3;
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


//https://www.youtube.com/watch?v=dPUmskG_-y0
//https://forum.ionicframework.com/t/how-i-can-change-my-app-name/20458/14


showLoading(form) {  
  this.loading.create({  
    message: 'Loading.....'   
    }).then((loading) => {  
     loading.present();{
      this.registroR(form);
    } 
     setTimeout(() => {   
       loading.dismiss();  
     }, 2000 );   
    });  
  }

  showLoadingR() {  
    this.loading.create({  
      message: 'Loading.....'   
      }).then((loading) => {  
       loading.present();{
        this.router.navigateByUrl('/login');
      } 
       setTimeout(() => {   
         loading.dismiss();  
       }, 1000 );   
      });  
    }

    /*getFiles(): FileLikeObject[] {
      return this.fileUploader.queue.map((fileItem) => {
        return fileItem.file;
  
      });
    }*/


    /*uploadFiles() {

      //let files = this.getFiles();
      let requests = [];
      let formData = new FormData();
        formData.append('file' , file.rawFile, file.name);
      //files.forEach((file) => {
        //let formData = new FormData();
        //formData.append('file' , file.rawFile, file.name);
        //requests.push(this.uploadingService.uploadFormData(formData));
  
      });
    }*/
}



//https://stackblitz.com/edit/angular-file-upload-preview-85v9bg