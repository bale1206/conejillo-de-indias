import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPasajeroPage } from './list-pasajero.page';

const routes: Routes = [
  {
    path: '',
    component: ListPasajeroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListPasajeroPageRoutingModule {}
