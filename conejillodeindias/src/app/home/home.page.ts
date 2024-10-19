import { Component } from '@angular/core';
import { AuthenticatorService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
<<<<<<< HEAD
  templateUrl: './home.page.html',
=======
  templateUrl: './login.page.html', 
  styleUrls: ['./home.page.scss'],
>>>>>>> 1e6328ee19d567e589918c2179fa7bb30e547b4f
})
export class HomePage {
  username: string = '';
  password: string = '';
  isLoggedIn: boolean = false;  // Maneja el estado del login

  constructor(private authService: AuthenticatorService, private router: Router) {}

<<<<<<< HEAD
=======
  login() {
    const success = this.authService.login(this.username, this.password);
    if (success) {
      this.router.navigate(['/home']);  
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
>>>>>>> 1e6328ee19d567e589918c2179fa7bb30e547b4f
}
