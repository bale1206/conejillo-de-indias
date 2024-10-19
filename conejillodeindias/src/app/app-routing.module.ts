import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilPage } from './access/perfil/perfil.page';
import { RecuperarPage } from './recuperar/recuperar.page';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'perfil', component: PerfilPage },
  { path: 'recuperar', component: RecuperarPage },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),  // Lazy loaded HomePageModule
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


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
