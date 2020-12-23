import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { PerfilService } from '../../servicios/perfil.service';
import { LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { IncorrectoPage } from '../../aviso/incorrecto/incorrecto.page';
import { finalize } from 'rxjs/operators';
import { FileUploader} from  'ng2-file-upload';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
})
export class EditarPerfilPage implements OnInit {
  
  
  public fileUploader: FileUploader = new FileUploader({});
  formData = new FormData();
  perfil: any;
  loading: any;
  url = "";

  constructor(
    public perfilService: PerfilService,
    public loadingCtrl: LoadingController,
    public modalController: ModalController,
    private http: HttpClient,
    private route: ActivatedRoute, private router: Router
  ) { 
    this.route.queryParams.subscribe(params => {
      console.log(this.router.getCurrentNavigation().extras.state);
      if (this.router.getCurrentNavigation().extras.state) {
        this.perfil = this.router.getCurrentNavigation().extras.state.user;
        this.url = this.router.getCurrentNavigation().extras.state.url;
      }
    });
  }

  ngOnInit() {

  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      console.log(event.target.files)
      console.log(event.target.files[0])
      console.log(event.target.files[0].name)
      this.formData.append('file', event.target.files[0]);
      reader.onload = (event) => { 
        var ul = ""
        var buf = this.convert(event.target.result, ul)
        this.url = buf;
      }
    }
  }
  public delete() {
    this.url = '';
  }
  convert(buff,buff2){
    for (var i=0, strLen=buff.length; i < strLen; i++) {
      buff2= buff2 + buff[i];
    }
    var buff3 = buff2
    //console.log(buff2)
    return buff3;
  }

  editar(form){
    form = form.value;
    console.log(form);
    console.log(this.perfil);
    const foto = {
      'url': this.formData.getAll('file')
    }
    if(form.nombre == ''|| form.apellido == ''){
      //this.mensaje("Campos Incompletos","Revisar los campos","Por favor complete los campos");
      this.mensajeIncorrecto("Campos Incompletos","Por favor complete los campos Nombre y Apellido");
    }else{
      let regExp = /^[0-9]{10}$/;
      if (form.telefono != "" && !regExp.test(form.telefono)) {
        this.mensajeIncorrecto("Campo incorrecto","Número de teléfono debe contener 10 números");
      }else{
        this.editarPerfil();
      }

    }
  }

  async editarPerfil(){
    await this.showLoading2();
    this.perfilService.editPerfil(this.perfil)
    .pipe(
      finalize(async () => {
        await this.loading.dismiss();
      })
    )
    .subscribe(
      data => {
        console.log(data);
        if(data.valid == "ok"){
          this.router.navigateByUrl('/footer/perfil');
        }else{
          this.mensajeIncorrecto("Error","No se han guardado los datos modificados");
          this.router.navigateByUrl('/footer/perfil'); 
        }
      },
      err => {
        this.mensajeIncorrecto("Algo Salio mal", "Fallo en la conexión")
      }
    );
  }

  async mensajeIncorrecto(titulo:string,mensaje:string){
    const modal = await this.modalController.create({
      component: IncorrectoPage,
      cssClass: 'IncorrectoProducto',
      componentProps: {
        'titulo': titulo,
        'mensaje': mensaje
        }
      });
      return await modal.present();
  }

  async showLoading2() {
    this.loading = await this.loadingCtrl.create({
      message: 'Loading.....'
    });
    await this.loading.present();
  }

}
