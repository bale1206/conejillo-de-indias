import { Component } from '@angular/core';
import { AuthenticatorService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
})
export class HomePage {
  username: string = '';
  password: string = '';
  isLoggedIn: boolean = false;  // Maneja el estado del login

  constructor(private authService: AuthenticatorService, private router: Router) {}

}
