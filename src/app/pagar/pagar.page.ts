import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../servicios/perfil.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { IncorrectoPage } from '../aviso/incorrecto/incorrecto.page';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.page.html',
  styleUrls: ['./pagar.page.scss'],
})
export class PagarPage implements OnInit {
  total:number;
  perfil:any;
  correo:any;
  url;
  constructor(
    private storage: Storage,
    public perfilService: PerfilService,
    private route: ActivatedRoute, 
    public modalController: ModalController,
    private http: HttpClient,
    private router: Router
    ) {
      
    }

  ngOnInit() {
  }

  ionViewDidEnter() {
    console.log("didEnter");
    this.storage.get('total').then((val) => {
      console.log(val);
      this.total=val;
    });
    this.storage.get('perfil').then((val)=>{
      if(val==null){
        this.storage.get('correo').then((val) => {
          this.correo = val;
          if (this.correo != null) {
            this.perfilService.getPerfil(this.correo).subscribe(
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
                }else{
                  this.storage.set('perfil',this.perfil);
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
      }else{
        console.log(val);
        this.perfil=val;
      }
    });

    
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

  editar() {
    
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.perfil,
        url: this.url,
      }
    };
    this.router.navigate(['/footer/perfil/editar-perfil'], navigationExtras);
  }
  confirmar(){
    this.router.navigate(['/footer/entrega']);
  
  }

  regresar(){
    this.router.navigate(['/footer/shopping-cart']);
  
  }

}
