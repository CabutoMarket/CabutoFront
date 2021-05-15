import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController, NavController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { IncorrectoPage } from '../aviso/incorrecto/incorrecto.page';
import { DireccionEntregaService } from '../servicios/direccion-entrega.service';
import { PerfilService } from '../servicios/perfil.service';
import { Storage } from '@ionic/storage';
import { HistorialService } from '../servicios/historial.service';
import { CorrectoPage } from '../aviso/correcto/correcto.page';
import { TarjetaService } from '../servicios/tarjeta.service';
import { Observable } from 'rxjs';
import { EstablecimientoService } from '../servicios/establecimiento.service';
import { AnimationOptions } from '@ionic/angular/providers/nav-controller';

@Component({
  selector: 'app-efectivo',
  templateUrl: './efectivo.page.html',
  styleUrls: ['./efectivo.page.scss'],
})
export class EfectivoPage implements OnInit {
  total: number;
  perfil: any;
  direccion: any;
  tipoPago: any;
  pago: any;
  loading: any;
  envio: any;
  numero: any;
  id_direccion;
  token = "";
  id: any;
  constructor(
    private storage: Storage,
    public perfilService: PerfilService,
    public modalController: ModalController,
    public tarjetaService: TarjetaService,
    private router: Router,
    private direccionService: DireccionEntregaService,
    private localService: EstablecimientoService,
    private pedidoService: HistorialService,
    private loadingCtrl: LoadingController,
    private navCtrlr: NavController, ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.envio=false
    console.log("didEnter");
    this.storage.get('total').then((val) => {
      this.total = Number(val);
    });
    this.storage.get('perfil').then((value) => {
      console.log(value);
      if (value == null) {
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
                } else {
                  this.storage.set('perfil', this.perfil);
                }

              },
              err => {
                this.mensajeIncorrecto("Algo Salio mal", "Fallo en la conexión")
              }
            );
          }
        });
      } else {
        this.perfil = value;
      }
    });
    this.storage.get('tipoPago').then((val) => {
      if (val != null) {
        if (val == "Efectivo") {
          this.tipoPago = "Efectivo";
          this.numero = "";
        } else {
          this.tipoPago = "Tarjeta"
          this.storage.get('tokenTarjeta').then((val) => {
            this.token = val + "";
            console.log(this.token);
          });
          this.storage.get('numeroTarjeta').then((val) => {
            if (val != null) {
              this.numero = val;
            }
          });
        }
      }
    });
    this.storage.get('id').then((val) => {
      if (val != null) {
        this.id = val;
      }
    });
    this.storage.get('direccionEntrega').then((val) => {
      if (val != null) {        
        console.log(val);
        this.storage.get('tipoEntrega').then((tipo) => {
          console.log(tipo);
          if (tipo != null) {
            this.id_direccion = val;
            if (tipo === "Local"){
              this.pago = this.total;
              this.recoger(val);
            }else{              
              this.datos(val);
            }
          }
        });
      } else {
        this.pago = this.total;
      }
    });


  }
  async recoger(val) {
    await this.showLoading2();
    this.localService.getEstablecimientoId(val)
      .pipe(
        finalize(async () => {
          await this.loading.dismiss();
        })
      )
      .subscribe(
        data => {
          console.log(data);
          this.direccion = data[0];
        },
        err => {
          this.mensajeIncorrecto("Algo Salio mal", "Fallo en la conexión")
        }
      );
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
          this.envio = this.direccion.envio;
          this.pago = this.total + this.envio;
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

  async pagar(pedido) {
    await this.showLoading2();
    let tot=this.pago/1.12
    let vat = this.pago * 0.12;
    let num = Number(vat.toFixed(2))
    let info = {
      "card": {
        "token": this.token
      },
      "user": {
        "id": this.id + "",
        "email": this.perfil.correo
      },
      "order": {
        "amount": this.pago+vat,
        "description": "Compra",
        "dev_reference": pedido + "",
        "vat": num
      }
    }
    console.log(info);
    this.tarjetaService.pagar(info)
      .pipe(
        finalize(async () => {
          await this.loading.dismiss();
        })
      )
      .subscribe(
        data => {
          console.log(data);
          if(data.transaction.status=="success"){
            this.pagado(pedido,data.transaction.id, data.transaction.authorization_code)
          }
        },
        err => {
          this.mensajeIncorrecto("Algo Salio mal", "Fallo en la conexión")
        }
      );
  }

  async pagado(id_pedido,transaccion, autorizacion) {
    await this.showLoading2();
    let info = {
      "pedido": id_pedido,
      "transaccion": transaccion,
      "autorizacion": autorizacion
    }
    console.log(info);
    this.pedidoService.pagarPedido(info)
      .pipe(
        finalize(async () => {
          await this.loading.dismiss();
        })
      )
      .subscribe(
        data => {
          console.log(data);          
          this.mensajeCorrecto("Pago exitoso", "Su pedido ha sido pagado con exito");
          this.router.navigate(['']);
        },
        err => {
          this.mensajeIncorrecto("Algo Salio mal", "Fallo en la conexión")
          this.router.navigate(['']);
        }
      );

  }

  confirmar(form) {
    var form = form.value;
    form.tipoPago = this.tipoPago;
    form.subtotal = this.total;
    form.id = this.perfil.id;
    form.envio = this.envio;
    form.direccion = this.id_direccion;
    form.descuento = 0;
    this.storage.get('tipoEntrega').then((val) => {
      if (val != null) {
        console.log(val);
        form.tipoEntrega = (val);
        if (val === "Local"){
          form.envio = 0;
        }
      }

    });
    this.storage.get('id_carrito').then((val) => {
      if (val != null) {
        console.log(val);
        form.carrito = (val);
      }
    });
    this.guardarPedido(form);

  }

  async guardarPedido(form) {
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
          if (data.valid == "ok") {
            if (this.tipoPago == "Tarjeta") {
              this.pagar(data.pedido)
            } else {
              this.mensajeCorrecto("Su pedido ha sido enviado con exito", "");
              this.router.navigate(['']);
            }
          } else {
            this.mensajeIncorrecto("Error", "No se ha enviado el pedido");
            this.router.navigate(['']);

          }
        },
        err => {
          this.mensajeIncorrecto("Algo Salio mal", "Fallo en la conexión")
        }
      );
  }

  atras(){
    let animations:AnimationOptions={
      animated: true,
      animationDirection: "back"
    }
    this.navCtrlr.back(animations)
  }


}
