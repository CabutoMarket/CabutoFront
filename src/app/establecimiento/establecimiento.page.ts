import { Component, OnInit, ViewChild } from '@angular/core';
import { EstablecimientoService } from '../servicios/establecimiento.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ModalMapaPage } from './modal-mapa/modal-mapa.page';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-establecimiento',
  templateUrl: './establecimiento.page.html',
  styleUrls: ['./establecimiento.page.scss'],
})
export class EstablecimientoPage implements OnInit {
  textInput: string = null;
  establecimientoInput: string = '';
  establecimientos: {};
  loading:any;
  
  constructor(
    public establecimientoService: EstablecimientoService,
    public loadingCtrl: LoadingController,
    private alert: AlertController,
    public modalController: ModalController,
  ) { }

  ngOnInit() {
    this.ionViewDidLoad();
  }

  ionViewDidLoad() {
    console.log("refresh");
    this.establecimientoService.getEstablecimiento().subscribe(data => {
      this.establecimientos = data;
      console.log(this.establecimientos);
    }, (error) => {
      console.error(error);
    })
  }

  async buscar() {
    await this.showLoading2();
    this.buscarEstablecimiento()
        .pipe(
            finalize(async () => {
              await this.loading.dismiss();
            })
        )
        .subscribe(
            data => {
              this.establecimientos = data;
              if (Object.keys(this.establecimientos).length === 0) {
                this.mensaje("Establecimiento No encontrado", "Intente de nuevo", "No se ha podido encontrar el establecimiento")
              }
            },
            err => {
              this.mensaje("Algo Salio mal", "Fallo en la conexión", "Fallo en la red")
            }
        );
  }

  buscarEstablecimiento(): Observable<object>  {
    if(this.textInput != null){
      this.establecimientoInput = this.textInput;
    }else{
      this.establecimientoInput = "";
    }
    return this.establecimientoService.getEstablecimientoBuscar(this.establecimientoInput);
  }

  async presentModal(latitud, longitud) {
    const modal = await this.modalController.create({
      component: ModalMapaPage,
      componentProps: { latitud, longitud }, 
      cssClass: 'select-modal' 
    });
    return await modal.present();
  }

  async mensaje(titulo: string, subtitulo: string, mensaje: string) {
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

  async showLoading2() {
    this.loading=await this.loadingCtrl.create({
      message: 'Loading.....'
    });
      await this.loading.present(); 

  }

}
