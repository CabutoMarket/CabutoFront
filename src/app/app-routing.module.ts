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
    path: 'shopping-cart',
    loadChildren: () => import('./shopping-cart/shopping-cart.module').then( m => m.ShoppingCartPageModule)
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
    path: 'shopping-cart',
    loadChildren: () => import('./shopping-cart/shopping-cart.module').then( m => m.ShoppingCartPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'registro-exitoso',
    loadChildren: () => import('./auth/registro/registro-exitoso/registro-exitoso.module').then( m => m.RegistroExitosoPageModule)
  },


  

];

  




@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
