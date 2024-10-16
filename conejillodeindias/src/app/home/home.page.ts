// login.page.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './login.page.html', 
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    const success = this.authService.login(this.username, this.password);
    if (success) {
      this.router.navigate(['/home']);  
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}
