import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatePasajeroPage } from './update-pasajero.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatePasajeroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatePasajeroPageRoutingModule {}
