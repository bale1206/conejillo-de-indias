import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
})
export class RecuperarPage {
  email: string = '';

  constructor(private authService: AuthService) {}

  recuperarContrasena() {
    this.authService.recuperarContrasena(this.email);
    alert('Si el correo es válido, se enviará un enlace para recuperar la contraseña.');
  }
}
