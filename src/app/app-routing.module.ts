import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'producto',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    loadChildren: () => import('./auth/registro/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'producto',
    loadChildren: () => import('./producto/producto.module').then( m => m.ProductoPageModule)
  },
  {
    path: 'establecimiento',
    loadChildren: () => import('./establecimiento/establecimiento.module').then( m => m.EstablecimientoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro-fb',
    loadChildren: () => import('./auth/registro-fb/registro-fb.module').then( m => m.RegistroFbPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'registro-exitoso',
    loadChildren: () => import('./auth/registro/registro-exitoso/registro-exitoso.module').then( m => m.RegistroExitosoPageModule)
  },
  {
    path: 'establecimiento',
    loadChildren: () => import('./establecimiento/establecimiento.module').then( m => m.EstablecimientoPageModule)
  },
  {
    path: 'ofertas',
    loadChildren: () => import('./ofertas/ofertas.module').then( m => m.OfertasPageModule)
  },
  {
    path: 'detalles-productos',
    loadChildren: () => import('./detalles-productos/detalles-productos.module').then( m => m.DetallesProductosPageModule)
  },
  {
    path: 'incorrecto',
    loadChildren: () => import('./aviso/incorrecto/incorrecto.module').then( m => m.IncorrectoPageModule)
  },
  {
    path: 'correcto',
    loadChildren: () => import('./aviso/correcto/correcto.module').then( m => m.CorrectoPageModule)
  },
  {
    path: 'politicas',
    loadChildren: () => import('./politicas/politicas.module').then( m => m.PoliticasPageModule)
  },
  {
    path: 'pregunta',
    loadChildren: () => import('./aviso/pregunta/pregunta.module').then( m => m.PreguntaPageModule)
  },  {
    path: 'shopping-cart',
    loadChildren: () => import('./shopping-cart/shopping-cart.module').then( m => m.ShoppingCartPageModule)
  },
  {
    path: 'cupones',
    loadChildren: () => import('./cupones/cupones.module').then( m => m.CuponesPageModule)
  },



];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
