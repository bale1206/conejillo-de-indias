import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';  // Importa el Router

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string = '';  // Propiedad para los mensajes de error

  constructor(private formBuilder: FormBuilder, private router: Router) {}  // Inyecta Router aquí

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;
  
      if (email === 'test@example.com' && password === 'bahe123') {
        console.log('Inicio de sesión exitoso');
        this.errorMessage = '';  // Resetea el mensaje de error si es exitoso
  
        // Guardar el email en el localStorage
        localStorage.setItem('loggedInUser', email);
  
        // Navegar a la página de perfil
        this.router.navigate(['/perfil']);  // Redirigir a la página de perfil
      } else {
        this.errorMessage = 'Correo o contraseña incorrectos';  
      }
    } else {
      this.errorMessage = 'Por favor, rellena los campos correctamente';  
    }
  }
}
