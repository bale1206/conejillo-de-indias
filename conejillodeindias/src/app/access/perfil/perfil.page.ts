import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  username: string | null = '';  // Asegúrate de que esta propiedad esté definida

  ngOnInit() {
    this.username = localStorage.getItem('userName') || 'Usuario';  // Aquí se asigna el valor
  }
}
