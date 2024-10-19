import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { RouterModule, Routes } from '@angular/router';
import { PerfilPage } from './access/perfil/perfil.page';
=======
import { PreloadAllModules,RouterModule, Routes } from '@angular/router';
import { PerfilPage } from './perfil/perfil.page';
>>>>>>> 1e6328ee19d567e589918c2179fa7bb30e547b4f
import { RecuperarPage } from './recuperar/recuperar.page';
import { HomePage } from './home/home.page';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
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
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
