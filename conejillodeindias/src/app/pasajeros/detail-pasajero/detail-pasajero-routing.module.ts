import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailPasajeroPage } from './detail-pasajero.page';

const routes: Routes = [
  {
    path: '',
    component: DetailPasajeroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailPasajeroPageRoutingModule {}
