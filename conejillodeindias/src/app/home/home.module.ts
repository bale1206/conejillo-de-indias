import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';  // Import this to use Ionic components

import { HomePageRoutingModule } from './home-routing.module';  // Routing module for this page
import { HomePage } from './home.page';  // The page component

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,  // Import IonicModule here
    HomePageRoutingModule,  // Import routing module
  ],
  declarations: [HomePage],
})
export class HomePageModule {}

