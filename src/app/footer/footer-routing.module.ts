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