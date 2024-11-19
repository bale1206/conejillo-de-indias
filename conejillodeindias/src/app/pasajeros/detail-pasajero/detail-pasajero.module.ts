import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPasajeroPageRoutingModule } from './detail-pasajero-routing.module';

import { DetailPasajeroPage } from './detail-pasajero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPasajeroPageRoutingModule
  ],
  declarations: [DetailPasajeroPage]
})
export class DetailPasajeroPageModule {}
