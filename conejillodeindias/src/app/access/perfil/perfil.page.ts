import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticatorService } from '../../services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {
  username: string | null = '';

  constructor(private authService: AuthenticatorService, private router: Router) {}

  ngOnInit() {
    this.username = this.authService.getLoggedInUser();
    if (!this.username) {
      this.router.navigate(['/login']);  
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
