import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { NavigationExtras,ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { IncorrectoPage } from '../../aviso/incorrecto/incorrecto.page';
import { finalize } from 'rxjs/operators';
import { HistorialService } from 'src/app/servicios/historial.service';
import { Storage } from '@ionic/storage';
import { PerfilService } from 'src/app/servicios/perfil.service';

@Component({
  selector: 'app-detalle-historial',
  templateUrl: './detalle-historial.page.html',
  styleUrls: ['./detalle-historial.page.scss'],
})
export class DetalleHistorialPage implements OnInit {
  id:any;
  historial:any;
  loading:any;
  productos: any;
  ofertas: any;
  combos: any;
  cupones: any;
  perfil:any;

  constructor(
    public loadingCtrl: LoadingController,
    public modalController: ModalController,
    private storage: Storage,
    private route: ActivatedRoute, private router: Router,
    public historialService: HistorialService,
    private perfilService: PerfilService
  
  ) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.id = this.router.getCurrentNavigation().extras.state.id;
      }
    });
  }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.buscar(this.id);
    this.storage.get('perfil').then((value)=>{
      console.log(value);
      if(value==null){
        this.storage.get('correo').then((val) => {
          if (val != null) {
            this.perfilService.getPerfil(val).subscribe(
              data => {
                this.perfil = data[0];
                console.log(data);
                if (this.perfil.telefono == "NONE") {
                  this.perfil.telefono = "";
                }
                if (this.perfil.direccion == "NONE") {
                  this.perfil.direccion = "";
                }      
                if (Object.keys(this.perfil).length === 0) {
                  this.mensajeIncorrecto("Algo Salio mal", "Fallo en la conexión")
                }else{
                  this.storage.set('perfil',this.perfil);
                }

              },
              err => {
                this.mensajeIncorrecto("Algo Salio mal", "Fallo en la conexión")
              }
            );
          } 
          
        });
      }else{
        this.perfil=value;
      }
    });
  }

  async buscar(id) {
    await this.showLoading2();
    this.historialService.getPedido(id)
      .pipe(
        finalize(async () => {
          await this.loading.dismiss();
        })
      )
      .subscribe(
        data => {
          console.log(data);
          this.historial = data["pedido"][0];
          this.productos = data["productos"]
          this.ofertas = data["ofertas"]
          this.combos = data["combos"]
          this.cupones = data["cupones"]

          if (Object.keys(this.historial).length === 0) {
            this.mensajeIncorrecto("Historial vacío", "No ha realizado pedidos")
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

  regresar(){
    this.router.navigate(['/footer/historial']);
  }

}
