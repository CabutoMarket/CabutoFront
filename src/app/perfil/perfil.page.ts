import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IncorrectoPage } from '../aviso/incorrecto/incorrecto.page';
import { finalize } from 'rxjs/operators';
import { ModalController } from '@ionic/angular';
import { PerfilService } from '../servicios/perfil.service';
import { LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  private correo: string = "";
  perfil: any;
  loading: any;
  url = ""
  date = "";


  constructor(
    private storage: Storage,
    public perfilService: PerfilService,
    public loadingCtrl: LoadingController,
    public modalController: ModalController,
    private http: HttpClient,
    private router: Router,
    
  ) { }

  ngOnInit() {

  }

  ionViewDidEnter() {
    console.log("didEnter");
    this.storage.get('correo').then((val) => {
      this.correo = val;
      if (this.correo != null) {
        this.buscarPerfil().subscribe(
          data => {
            this.perfil = data[0];
            console.log(data);
            if (this.perfil.telefono == "NONE") {
              this.perfil.telefono = "";
            }
            if (this.perfil.direccion == "NONE") {
              this.perfil.direccion = "";
            }
            this.http.get("http://cabutoshop.pythonanywhere.com" + this.perfil.imagen).subscribe(data => {
              this.url = "http://cabutoshop.pythonanywhere.com" + this.perfil.imagen;
            }, (error) => {
              this.url = ""
              console.error(error);
            });
  
            if (Object.keys(this.perfil).length === 0) {
              this.mensajeIncorrecto("Algo Salio mal", "Fallo en la conexión")
            }
          },
          err => {
            this.mensajeIncorrecto("Algo Salio mal", "Fallo en la conexión")
          }
        );
      } else {
        this.correo = "";
      }
      
    });
  }

  buscarPerfil(): Observable<object> {
    
    return this.perfilService.getPerfil(this.correo);
  }
  async buscar() {
    await this.showLoading2();
    this.buscarPerfil()
      .pipe(
        finalize(async () => {
          await this.loading.dismiss();
        })
      )
      .subscribe(
        data => {
          this.perfil = data[0];
          console.log(data);
          this.perfil.fechaNac = new Date(this.perfil.fechaNac);
          if (this.perfil.telefono == "NONE") {
            this.perfil.telefono = "";
          }
          if (this.perfil.direccion == "NONE") {
            this.perfil.direccion = "";
          }
          this.http.get("http://cabutoshop.pythonanywhere.com" + this.perfil.imagen).subscribe(data => {
            this.url = "http://cabutoshop.pythonanywhere.com" + this.perfil.imagen;
          }, (error) => {
            this.url = ""
            console.error(error);
          });

          if (Object.keys(this.perfil).length === 0) {
            this.mensajeIncorrecto("Algo Salio mal", "Fallo en la conexión")
          }
        },
        err => {
          this.mensajeIncorrecto("Algo Salio mal", "Fallo en la conexión")
        }
      );
  }
  async mensajeIncorrecto(titulo: string, mensaje: string) {
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

  editar() {
    
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.perfil,
        url: this.url,
      }
    };
    this.router.navigate(['/footer/perfil/editar-perfil'], navigationExtras);
  }

}
