import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterPage } from './footer.page';

const routes: Routes = [
  {
    path: 'footer',
    component: FooterPage,
    children: [
      {
        path: 'login',
        loadChildren: () => import('../auth/login/login/login.module').then( m => m.LoginPageModule)
      },
      {
        path: 'perfil',
        children: [
          {
            path: '',
            loadChildren: () => import('../perfil/perfil.module').then( m => m.PerfilPageModule)
          },
          {
            path: 'editar-perfil',
            loadChildren: () => import('../perfil/editar-perfil/editar-perfil.module').then( m => m.EditarPerfilPageModule)
          }
        ]
        
      },
      {
        path: 'producto',
        loadChildren: () => import('../producto/producto.module').then( m => m.ProductoPageModule)
      },
      {
        path: 'notificacion',
        loadChildren: () => import('../notificacion/notificacion.module').then( m => m.NotificacionPageModule)
      },
      {
        path: 'ofertas',
        loadChildren: () => import('../ofertas/ofertas.module').then( m => m.OfertasPageModule)
      },
      {
        path: 'establecimiento',
        loadChildren: () => import('../establecimiento/establecimiento.module').then( m => m.EstablecimientoPageModule)
      },
      {
        path: 'shopping-cart',
        loadChildren: () => import('../shopping-cart/shopping-cart.module').then( m => m.ShoppingCartPageModule)
      },
      {
        path: 'contacto',
        loadChildren: () => import('../contacto/contacto.module').then( m => m.ContactoPageModule)
      },
      {
        path: 'sugerencia',
        loadChildren: () => import('../sugerencia/sugerencia.module').then( m => m.SugerenciaPageModule)
      },
      {
        path: 'pagar',
        loadChildren: () => import('../pagar/pagar.module').then( m => m.PagarPageModule)
      },
      {
        path: 'entrega',
        loadChildren: () => import('../entrega/entrega.module').then( m => m.EntregaPageModule)
      },
      {
        path: 'domicilio',
        loadChildren: () => import('../domicilio/domicilio.module').then( m => m.DomicilioPageModule)
      },
      {
        path: 'cupones',
        loadChildren: () => import('../cupones/cupones.module').then( m => m.CuponesPageModule)
      },
      {
        path: 'politicas',
        loadChildren: () => import('../politicas/politicas.module').then( m => m.PoliticasPageModule)
      },
      {
        path: 'historial',
        children: [
          {
            path: '',
            loadChildren: () => import('../historial/historial.module').then( m => m.HistorialPageModule)
          },
          {
            path: 'detalle-historial',
            loadChildren: () => import('../historial/detalle-historial/detalle-historial.module').then( m => m.DetalleHistorialPageModule)
          }
        ]
      },
      {
        path: 'pago',
        loadChildren: () => import('../pago/pago.module').then( m => m.PagoPageModule)
      },
      {
        path: 'efectivo',
        loadChildren: () => import('../efectivo/efectivo.module').then( m => m.EfectivoPageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: '/footer/producto',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FooterPageRoutingModule {}
