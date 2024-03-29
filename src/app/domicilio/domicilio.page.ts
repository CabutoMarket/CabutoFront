import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';

import { NavController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoadingController, ModalController, AlertController } from '@ionic/angular';
import { DireccionPage } from '../direccion/direccion.page';
import { DireccionEntregaService } from '../servicios/direccion-entrega.service';
import { CoberturaService } from '../servicios/cobertura.service';
import { finalize } from 'rxjs/operators';
import { IncorrectoPage } from '../aviso/incorrecto/incorrecto.page';
import { ConfirmarDireccionPage } from '../direccion/confirmar-direccion/confirmar-direccion.page';
import { AnimationOptions } from '@ionic/angular/providers/nav-controller';

declare var google;

@Component({
  selector: 'app-domicilio',
  templateUrl: './domicilio.page.html',
  styleUrls: ['./domicilio.page.scss'],
})
export class DomicilioPage implements OnInit {
  total: number;
  latitud: any=-2.19616;
  longitud: any=-79.88621;
  zonas: any;
  @ViewChild('mapaUbicacion', { static: true }) mapElement;
  map;
  marker;
  loading: any;
  direccion = "Ubicación actual"; envio = "";
  id: any;
  colorPrincipal;
  constructor(
    private storage: Storage,
    private geolocation: Geolocation,
    private modalController: ModalController,
    private alertCtrl: AlertController,
    public coberturaService: CoberturaService,
    private loadingCtrl: LoadingController,
    public direccionService: DireccionEntregaService,
    private platform: Platform,
    private navCtrlr: NavController,) { }

  ngOnInit() {
    this.storage.get('id').then((val) => {
      if (val != null) {
        this.id = val;
      }
    });
  }

  ionViewWillEnter() {
    console.log("didEnter");
    this.storage.get('total').then((val) => {
      console.log(val);
      this.total = val;
    });
    this.initMap()    
  }
  async datos() {
    await this.showLoading2();
    this.coberturaService.getCobertura()
      .pipe(
        finalize(async () => {
          await this.loading.dismiss();
        })
      )
      .subscribe(
        data => {
          this.zonas = data;
          this.drawPolygon();          
        },
        err => {
          this.mensajeIncorrecto("Algo Salio mal", "Fallo en la conexión")
        }
      );
  }

  addMarker(map: any) {
    this.platform.ready().then(() => {
      console.log("resp")
      this.geolocation.getCurrentPosition().then((resp) => {
        this.latitud = resp.coords.latitude;
        this.longitud = resp.coords.longitude;
        this.map.setCenter({ lat: this.latitud, lng: this.longitud });
        this.datos();
      }).catch((error) => {
        console.log('Error getting location', error);
      });
    });
  }
  initMap(): void {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      center: { lat: this.latitud, lng: this.longitud },
      zoom: 12
    });
    this.addMarker(this.map);
    google.maps.event.addListener(this.map, 'click', (event) => {
      this.verificarPosicion(event.latLng, "red");
    })
  }

  drawPolygon() {
    var color = "blue";
    this.zonas.forEach(element => {
      var coords = JSON.parse(element.zona);
      var poligono = this.makePolygon(coords, "blue");
      poligono.setMap(this.map);
      var contain = google.maps.geometry.poly.containsLocation(
        this.map.getCenter(), poligono);
      color = (contain ? "blue" : "red");
      //this.colorPrincipal=color;
      //this.verificarPosicion(this.map.getCenter(), color);
      var $this = this;
      google.maps.event.addListener(poligono, 'click', function (e) {
        $this.verificarPosicion(e.latLng, "blue");
        $this.envio = element.envio;
        console.log(element.envio)
      });
      if (color =="blue") {
        this.colorPrincipal=color;
        this.envio=element.envio;
      }
      
    });
    console.log(color)
    if (this.colorPrincipal =="blue") {
      this.verificarPosicion(this.map.getCenter(), this.colorPrincipal);
    }
    else{
      this.verificarPosicion(this.map.getCenter(), "red");
    }
    
  }

  verificarPosicion(event, color) {
    console.log(color);
    if (this.marker != undefined) {
      this.marker.setMap(null);
    }
    this.marker = new google.maps.Marker({
      position: event,
      map: this.map
    })
    if (color == "red") {
      let content = "<p>Aún no existe cobertura para esta zona!</p>";
      this.addInfoWindow(this.marker, content);
      this.envio = "";
    } else {
      this.latitud = event.lat();
      this.longitud = event.lng();
    }

  }

  addInfoWindow(marker, content) {

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
    infoWindow.open(this.map, marker);
  }

  makePolygon(paths, color) {
    return (new google.maps.Polygon({
      paths: paths,
      strokeColor: color,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: color,
      fillOpacity: 0.35
    }));
  }

  dismiss() {
    this.modalController.dismiss();
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

  atras() {
    let animations: AnimationOptions = {
      animated: true,
      animationDirection: "back"
    }
    this.navCtrlr.back(animations)
  }

  async domicilio() {
    const modal = await this.modalController.create({
      component: DireccionPage,
      cssClass: 'select-modal'
    });
    return await modal.present();

  }

  guardar(form) {
    form = form.value
    if (this.envio == '') {
      this.mensajeIncorrecto("Zona incorrecta", "Por favor elija una zona con cobertura.");
    } else if (form.descripcion == "") {
      this.mensajeIncorrecto("Descripción vacía", "Por favor indique descripción del lugar en que se encuentra.");
    } else {
      let usuario;
      this.presentConfirm('¿Desea guardar esta dirección?', 'No', 'Si').then(res => {
        if (res === 'ok') {
          usuario = this.id
        } else {
          usuario = -1;
          //
        }
        let formulario = {
          "envio": this.envio,
          "latitud": this.latitud,
          "longitud": this.longitud,
          "direccion": this.direccion,
          "descripcion": form.descripcion,
          "id": usuario
        }
        console.log(formulario)
        this.guardarDireccion(formulario);
      });

    }
  }

  async presentConfirm(message: any, cancelText: any, okText: any): Promise<any> {
    return new Promise(async (resolve) => {
      const alert = await this.alertCtrl.create({
        message: message,
        cssClass: 'alertClass',
        buttons: [
          {
            text: okText,
            handler: (ok) => {
              resolve('ok');
            }
          },
          {
            text: cancelText,
            handler: (cancel) => {
              resolve('cancel');
            }
          }
        ]
      });
      alert.present();
    });
  }

  async guardarDireccion(form) {
    await this.showLoading2();
    this.direccionService.nuevaDireccion(form)
      .pipe(
        finalize(async () => {
          await this.loading.dismiss();
        })
      )
      .subscribe(
        data => {
          console.log(data);
          if (data.valid == "ok") {
            this.confirmar(data.id);
          } else {
            this.mensajeIncorrecto("Error", "No se han guardado los datos modificados");
            this.modalController.dismiss();
          }
        },
        err => {
          this.mensajeIncorrecto("Algo Salio mal", "Fallo en la conexión")
        }
      );
  }

  async confirmar(id) {
    const modal = await this.modalController.create({
      component: ConfirmarDireccionPage,
      cssClass: 'confirm-modal',
      componentProps: { id }
    });
    return await modal.present();
  }
}
