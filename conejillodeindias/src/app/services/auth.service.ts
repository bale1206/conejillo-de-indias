import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(username: string, password: string): boolean {
    return true; 
  }

  logout() {
    // Lógica para cerrar sesión
  }

  recoverPassword(email: string) {
    // Lógica para recuperar la contraseña
  }

  constructor() { }
}
