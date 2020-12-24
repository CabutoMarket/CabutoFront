import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrega',
  templateUrl: './entrega.page.html',
  styleUrls: ['./entrega.page.scss'],
})
export class EntregaPage implements OnInit {
  total:number;

  constructor(
    private storage: Storage,
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

  domicilio(){
    this.router.navigate(['/footer/domicilio']); 
  }

  recoger(){

  }

  regresar(){
    this.router.navigate(['/footer/pagar']);
  }

}
