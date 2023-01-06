import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'catalogo',
    loadChildren: () => import('./welcome/catalogo/catalogo.module').then( m => m.CatalogoPageModule)
  },
  {
    path: 'comprador',
    loadChildren: () => import('./welcome/comprador/comprador.module').then( m => m.CompradorPageModule)
  },
  {
    path: 'producto',
    loadChildren: () => import('./welcome/producto/producto.module').then( m => m.ProductoPageModule)
  },
  {
    path: 'trabajador',
    loadChildren: () => import('./welcome/trabajador/trabajador.module').then( m => m.TrabajadorPageModule)
  },
  {
    path: 'venta',
    loadChildren: () => import('./welcome/venta/venta.module').then( m => m.VentaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
