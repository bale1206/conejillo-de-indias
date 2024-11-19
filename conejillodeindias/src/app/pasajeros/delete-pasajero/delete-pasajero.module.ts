import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeletePasajeroPageRoutingModule } from './delete-pasajero-routing.module';

import { DeletePasajeroPage } from './delete-pasajero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeletePasajeroPageRoutingModule
  ],
  declarations: [DeletePasajeroPage]
})
export class DeletePasajeroPageModule {}
