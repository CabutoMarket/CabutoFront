import { Component, OnInit, Input, ViewChild  } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ModalController } from '@ionic/angular';
import { DireccionPage } from '../direccion/direccion.page';

declare var google;

@Component({
  selector: 'app-domicilio',
  templateUrl: './domicilio.page.html',
  styleUrls: ['./domicilio.page.scss'],
})
export class DomicilioPage implements OnInit {
  total:number;
  latitud:any;
  longitud:any;
  @ViewChild('mapaUbicacion', { static: true }) mapElement;
  map;

  constructor(
    private storage: Storage,
    private router: Router,
    private geolocation: Geolocation,
    private modalController: ModalController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    console.log("didEnter");
    this.storage.get('total').then((val) => {
      console.log(val);
      this.total=val;
    });
  }

  addMarker(map:any){

    let marker = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: map.getCenter()
    });
    
  }
  ngAfterViewInit(): void {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitud=resp.coords.latitude;
      this.longitud=resp.coords.longitude;
      this.map = new google.maps.Map(this.mapElement.nativeElement, {
        center: {lat: this.latitud, lng: this.longitud},
        zoom: 12
      });
      this.addMarker(this.map);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  regresar(){
    this.router.navigate(['/footer/entrega']);
  }

  async domicilio(){
    const modal = await this.modalController.create({
      component: DireccionPage,
      cssClass: 'select-modal' 
    });
    return await modal.present();
    
  }

}
