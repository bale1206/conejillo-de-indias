import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
    private http: HttpClient
  ) {}

  ngOnInit() {
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
      const storedEmail = localStorage.getItem('userEmail');
      const storedPassword = localStorage.getItem('userPassword');

      setTimeout(() => {
        if (email === storedEmail && password === storedPassword) {
          //Crear metodo login en auth.service y comunicar aca 
          this.router.navigate(['/perfil']); 
        } else {
          this.errorMessage = 'Credenciales incorrectas';
        }
        this.loading = false;
      }, 2000);
    } else {
      this.errorMessage = 'Por favor, complete todos los campos correctamente.'; //revisar esto
    }
  }
}
