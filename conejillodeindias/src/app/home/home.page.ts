import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  loginForm!: FormGroup;
  loading: boolean = false;
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,

  ) {}

  ngOnInit() {
    // Inicializa el formulario con validaciones
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loading = true;
      

      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;

      console.log('Intentando login con', {email, password});

      const storedEmail = localStorage.getItem('email');
      const storedPassword = localStorage.getItem('password');

      setTimeout(() => {
        if (email === storedEmail && password === storedPassword) {
          this.router.navigate(['/perfil']); 
          } else {
            // Si no se encuentra el usuario, muestra un mensaje de error
            this.errorMessage = 'Credenciales incorrectas';
          }
          this.loading = false;
        }, 2000);
    } else {
      this.errorMessage = 'Por favor, complete todos los campos correctamente.';
    }
  }
}