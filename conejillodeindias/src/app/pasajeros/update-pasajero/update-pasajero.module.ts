import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatePasajeroPageRoutingModule } from './update-pasajero-routing.module';

import { UpdatePasajeroPage } from './update-pasajero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatePasajeroPageRoutingModule
  ],
  declarations: [UpdatePasajeroPage]
})
export class UpdatePasajeroPageModule {}
