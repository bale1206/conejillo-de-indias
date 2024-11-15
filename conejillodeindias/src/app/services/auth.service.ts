import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticatorService {
  private connnectionStatus: boolean = false;

  constructor(private storage: StorageService) {}

  getLoggedInUser(): string | null {

    return null; 
  }

  async loginBDD(user: string, pass: string): Promise<boolean> {
    try {
      const res = await this.storage.get(user);
      if (res?.password === pass) {
        this.connnectionStatus = true;
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log('Error al iniciar sesión: ' + error);
      return false;
    }
  }

  login(user: string, pass: string): boolean {
    if (user === 'va.latorre' && pass === 'nk1234') {
      this.connnectionStatus = true;
      return true;
    }
    this.connnectionStatus = false;
    return false;
  }

  logout(): void {
    this.connnectionStatus = false;
  }

  isConected(): boolean {
    return this.connnectionStatus;
  }

  async registrar(user: any): Promise<boolean> {
    try {
      await this.storage.set(user.username, user);
      return true; 
    } catch (error) {
      console.log('Error en el registro: ' + error);
      return false;
    }
  }
}


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  recuperarContrasena(email: string) {
    throw new Error('Método no implementado.');
  }

  login(email: string, password: string): boolean {
  
    return true;
  }

  logout() {

  }

  recoverPassword(email: string) {

  }
}
