import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeletePasajeroPage } from './delete-pasajero.page';

const routes: Routes = [
  {
    path: '',
    component: DeletePasajeroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeletePasajeroPageRoutingModule {}
