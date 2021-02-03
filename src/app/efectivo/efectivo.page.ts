import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { IncorrectoPage } from '../aviso/incorrecto/incorrecto.page';
import { DireccionEntregaService } from '../servicios/direccion-entrega.service';
import { PerfilService } from '../servicios/perfil.service';
import { Storage } from '@ionic/storage';
import { HistorialService } from '../servicios/historial.service';
import { CorrectoPage } from '../aviso/correcto/correcto.page';

@Component({
  selector: 'app-efectivo',
  templateUrl: './efectivo.page.html',
  styleUrls: ['./efectivo.page.scss'],
})
export class EfectivoPage implements OnInit {
  total:number;
  perfil:any;
  direccion:any;
  tipoPago:any;
  pago:any;
  loading:any;
  envio:any;

  constructor(
    private storage: Storage,
    public perfilService: PerfilService,
    public modalController: ModalController,
    private router: Router,
    private direccionService: DireccionEntregaService,
    private pedidoService: HistorialService,
    private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    console.log("didEnter");
    this.storage.get('total').then((val) => {
      this.total=val;
    });
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
    this.tipoPago="Efectivo";
    this.storage.get('direccionEntrega').then((val) => {
      if(val!=null){
        console.log(val);
        this.datos(val);
      }else{
        this.pago=this.total;
      }

    });

    
  }

  async datos(val) {
    await this.showLoading2();
    this.direccionService.getDireccion(val)
      .pipe(
        finalize(async () => {
          await this.loading.dismiss();
        })
      )
      .subscribe(
        data => {
          
        console.log(data);
          this.direccion = data[0];
          this.envio=this.direccion.envio;
          this.pago=this.total+this.envio;
        },
        err => {
          this.mensajeIncorrecto("Algo Salio mal", "Fallo en la conexión")        
        }
      );
  }
  async showLoading2() {
    this.loading = await this.loadingCtrl.create({
      message: 'Loading.....'
    });
    await this.loading.present();

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

  async mensajeCorrecto(titulo: string, mensaje: string) {
    const modal = await this.modalController.create({
      component: CorrectoPage,
      cssClass: 'CorrectoProducto',
      componentProps: {
        'titulo': titulo,
        'mensaje': mensaje
      }
    });
    return await modal.present();
  }

  confirmar(form){
    var form=form.value;
    form.tipoPago=this.tipoPago;
    form.subtotal=this.total;
    form.id=this.perfil.id;
    form.envio=this.envio;
    form.descuento=0;
    this.storage.get('tipoEntrega').then((val) => {
      if(val!=null){
        console.log(val);
        form.tipoEntrega=(val);
      }

    });
    this.storage.get('id_carrito').then((val) => {
      if(val!=null){
        console.log(val);
        form.carrito=(val);
      }
    });
    this.guardarPedido(form);
  
  }

  async guardarPedido(form){
    await this.showLoading2();
    this.pedidoService.nuevoPedido(form)
    .pipe(
      finalize(async () => {
        await this.loading.dismiss();
      })
    )
    .subscribe(
      data => {
        console.log(data);
        if(data.valid == "ok"){
          this.mensajeCorrecto("Su pedido ha sido enviado con exito","");
          this.router.navigate(['']);
        }else{
          this.mensajeIncorrecto("Error","No se ha enviado el pedido");
        }
      },
      err => {
        this.mensajeIncorrecto("Algo Salio mal", "Fallo en la conexión")
      }
    );
  }

  regresar(){
    this.router.navigate(['/footer/pago']);
  
  }


}
