import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  loginForm!: FormGroup;  // Inicializa sin el "!"

  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    // Asegúrate de inicializar loginForm correctamente
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    // Verifica si el formulario es válido antes de procesar
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;

      const storedEmail = localStorage.getItem('userEmail');
      const storedPassword = localStorage.getItem('userPassword');

      // Comprueba credenciales
      if (email === storedEmail && password === storedPassword) {
        this.router.navigate(['/perfil']);  // Redirige a la página de perfil
      } else {
        this.errorMessage = 'Credenciales incorrectas';
      }
    } else {
      this.errorMessage = 'Por favor, complete todos los campos correctamente.';
    }
  }
}
