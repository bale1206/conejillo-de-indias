// home.page.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticatorService } from '../../services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
})
export class PerfilPage {
  username: string | null = '';

  constructor(private authService: AuthenticatorService, private router: Router) {}

  ngOnInit() {
    this.username = this.authService.getLoggedInUser();
    if (!this.username) {
      this.router.navigate(['/login']);  // Redirige si no hay usuario logueado
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
