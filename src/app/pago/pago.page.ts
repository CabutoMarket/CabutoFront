import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.page.html',
  styleUrls: ['./pago.page.scss'],
})
export class PagoPage implements OnInit {
  total:number;
  constructor(private storage: Storage,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    console.log("didEnter");
    this.storage.get('total').then((val) => {
      console.log(val);
      this.total=val;
    });
  }
  efectivo(){
    this.router.navigate(['/footer/efectivo']); 
    this.storage.set('tipoPago','Efectivo');
  }

  tarjeta(){

  }

  regresar(){
    this.router.navigate(['/footer/entrega']);
  }

}
