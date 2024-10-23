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
    path: '',
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
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
