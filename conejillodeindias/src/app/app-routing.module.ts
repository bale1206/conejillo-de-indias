import { NgModule } from '@angular/core';
import { PerfilPage } from './access/perfil/perfil.page';
import { PreloadAllModules,RouterModule, Routes } from '@angular/router';
import { RecuperarPage } from './recuperar/recuperar.page';
import { HomePage } from './home/home.page';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'perfil', component: PerfilPage },
  { path: 'recuperar', component: RecuperarPage },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),  
  },
  {
    path: 'perfil',
    loadChildren: () => import('./access/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'error',
    loadChildren: () => import('./error/error.module').then( m => m.ErrorPageModule)
  },
  {
    path: 'controller',
    loadChildren: () => import('./Admin/controller/controller.module').then( m => m.ControllerPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./access/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'add-pasajero',
    loadChildren: () => import('./pasajeros/add-pasajero/add-pasajero.module').then( m => m.AddPasajeroPageModule)
  },
  {
    path: 'list-pasajero',
    loadChildren: () => import('./pasajeros/list-pasajero/list-pasajero.module').then( m => m.ListPasajeroPageModule)
  },
  {
    path: 'update-pasajero',
    loadChildren: () => import('./pasajeros/update-pasajero/update-pasajero.module').then( m => m.UpdatePasajeroPageModule)
  },
  {
    path: 'detail-pasajero',
    loadChildren: () => import('./pasajeros/detail-pasajero/detail-pasajero.module').then( m => m.DetailPasajeroPageModule)
  },
  {
    path: 'delete-pasajero',
    loadChildren: () => import('./pasajeros/delete-pasajero/delete-pasajero.module').then( m => m.DeletePasajeroPageModule)
  }





];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
