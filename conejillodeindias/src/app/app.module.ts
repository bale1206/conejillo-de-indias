import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular'; 
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RecuperarPage } from './recuperar/recuperar.page';
import { IonicStorageModule } from '@ionic/storage-angular';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AppComponent,
    RecuperarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(
      {
        rippleEffect:true,
        animated: true,
        mode: 'md',
        hardwareBackButton: true
        //ionic config//
        //para llevar esto a android hay 3 comandos: ionic capacitor add android (agregar a mi proyecto la configuración de plataforma de android), 
        //ionic capacitor sync (sincroniza el proyecto ionic con la version de android como utilidades, pluggins, librerias extras, etc), 
        //ionic capacitor build android(compila y redirecciona hacia android studio con el proyecto ionic compilado por completo)
        //para firmar la app 
      }
    ),
    AppRoutingModule,
    FormsModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule

  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}
