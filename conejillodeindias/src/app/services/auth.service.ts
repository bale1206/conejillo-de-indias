import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}
  recuperarContrasena(email: string) {
    throw new Error('Método no implementado.');
  }

  login(email: string, password: string): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.http.get<any[]>(this.apiUrl).subscribe({
        next: (users) => {
          // Verifica si hay algún usuario con el email y la contraseña proporcionados
          const user = users.find((user) => user.email === email && user.password === password);
          if (user) {
            observer.next(true);
          } else {
            observer.next(false);
          }
        },
        error: (err) => {
          console.error('Error al autenticar usuario', err);
          observer.next(false);
        },
      });
    });
  }

  logout() {

  }

  recoverPassword(email: string) {

  }

  saveUser(user: { email: string; password: string; name: string }): Observable<any> {
    return this.http.post(this.apiUrl, user); // Envía el usuario al servidor
  }
}
