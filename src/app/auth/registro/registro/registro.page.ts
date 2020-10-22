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
  var num = form.cedula.length
  console.log(cedula);
  console.log(num);
  if(contra == conf){
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
  }else if (contra!= conf){
    this.mensaje("Registro Fallido","Las contraseñas no coinciden","Verifique que las contraseñas sean iguales");
    this.router.navigateByUrl('/registro'); 
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

  converTo(buff,buff2){
    for (var i=0, strLen=buff.length; i < strLen; i++) {
      buff2= buff2 + buff[i];
    }
    console.log(buff2)
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


}