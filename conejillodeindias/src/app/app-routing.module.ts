import { NgModule } from '@angular/core';
import { PreloadAllModules,RouterModule, Routes } from '@angular/router';
import { PerfilPage } from './perfil/perfil.page';
import { RecuperarPage } from './recuperar/recuperar.page';
import { HomePage } from './home/home.page';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'perfil', component: PerfilPage },
  { path: 'recuperar', component: RecuperarPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
