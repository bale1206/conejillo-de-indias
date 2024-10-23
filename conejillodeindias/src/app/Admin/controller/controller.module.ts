import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ControllerPageRoutingModule } from './controller-routing.module';

import { ControllerPage } from './controller.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControllerPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ControllerPage]
})
export class ControllerPageModule {}
