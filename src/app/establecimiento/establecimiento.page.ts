import { Component, OnInit } from '@angular/core';
import { EstablecimientoService } from '../servicios/establecimiento.service';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-establecimiento',
  templateUrl: './establecimiento.page.html',
  styleUrls: ['./establecimiento.page.scss'],
})
export class EstablecimientoPage implements OnInit {
  textInput: string = null;
  establecimientoInput: string = '';
  establecimientos: {};
  constructor(
    public establecimientoService: EstablecimientoService,
    public loadingCtrl: LoadingController,
    private alert: AlertController,
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

  buscarEstablecimiento() {
    if(this.textInput != null){
      this.establecimientoInput = this.textInput;
    }else{
      this.establecimientoInput = "";
    }
    console.log(this.establecimientoInput)
    this.establecimientoService.getEstablecimientoBuscar(this.establecimientoInput).subscribe(data => {
      this.establecimientos = data;
      console.log(this.establecimientos);
      if (Object.keys(this.establecimientos).length === 0) {
        this.mensaje("Establecimiento No encontrado", "Intente de nuevo", "No se ha podido encontrar el establecimiento")
      }

    }, (error) => {
      console.error(error);
      this.mensaje("Algo Salio mal", "Fallo en la conexión", "Fallo en la red")
    })
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

  showLoading2() {
    this.loadingCtrl.create({
      message: 'Loading.....'
    }).then((loading) => {
      loading.present(); {
        this.buscarEstablecimiento();
      }
      setTimeout(() => {
        loading.dismiss();
      }, 2000);
    });
  }
}
