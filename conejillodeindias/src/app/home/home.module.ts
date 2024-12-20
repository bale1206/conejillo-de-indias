import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';  
import { HomePageRoutingModule } from './home-routing.module';  
import { HomePage } from './home.page'; 
import { ReactiveFormsModule } from '@angular/forms'; 



@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,  
    HomePageRoutingModule,
    ReactiveFormsModule  
  ],
  declarations: [HomePage],
})
export class HomePageModule {}

