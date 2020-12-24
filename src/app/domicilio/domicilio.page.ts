import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-domicilio',
  templateUrl: './domicilio.page.html',
  styleUrls: ['./domicilio.page.scss'],
})
export class DomicilioPage implements OnInit {
  total:number;

  constructor(
    private storage: Storage,
    private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    console.log("didEnter");
    this.storage.get('total').then((val) => {
      console.log(val);
      this.total=val;
    });
  }

  regresar(){
    this.router.navigate(['/footer/entrega']);
  }

}
