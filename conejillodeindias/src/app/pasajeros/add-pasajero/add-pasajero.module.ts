import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPasajeroPageRoutingModule } from './add-pasajero-routing.module';

import { AddPasajeroPage } from './add-pasajero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPasajeroPageRoutingModule
  ],
  declarations: [AddPasajeroPage]
})
export class AddPasajeroPageModule {}
