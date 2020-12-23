import { Component, OnInit, Input, ViewChild  } from '@angular/core';
import { ModalController } from '@ionic/angular';
declare var google;

@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.page.html',
  styleUrls: ['./direccion.page.scss'],
})
export class DireccionPage implements OnInit {
  @Input() public usuarioId: number;
  @ViewChild('mapaUbicacion', { static: true }) mapElement;
  map;
  
  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  addMarker(map:any){

    let marker = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: map.getCenter()
    });
    
  }
  ngAfterViewInit(): void {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      center: {lat: 156, lng: 5787},
      zoom: 15
    });
    this.addMarker(this.map);
  }

}
