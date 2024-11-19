import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPasajeroPage } from './add-pasajero.page';

const routes: Routes = [
  {
    path: '',
    component: AddPasajeroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPasajeroPageRoutingModule {}
