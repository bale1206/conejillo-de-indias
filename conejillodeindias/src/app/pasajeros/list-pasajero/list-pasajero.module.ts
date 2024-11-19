import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPasajeroPageRoutingModule } from './list-pasajero-routing.module';

import { ListPasajeroPage } from './list-pasajero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPasajeroPageRoutingModule
  ],
  declarations: [ListPasajeroPage]
})
export class ListPasajeroPageModule {}
