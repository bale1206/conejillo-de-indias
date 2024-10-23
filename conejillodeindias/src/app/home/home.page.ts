import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  animations: [
    trigger('logoAnimation', [
      state('start', style({
        transform: 'scale(0.5)', 
        opacity: 0 
      })),
      state('end', style({
        transform: 'scale(1)', 
        opacity: 1 
      })),
      transition('start => end', animate('0.5s ease-in-out')), 
    ])
  ]
})
export class HomePage implements OnInit {
  loginForm!: FormGroup; 
  loading: boolean = false;
  errorMessage: string = '';
  logoState: string = 'start'; 

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.logoState = 'end'; 
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
          this.router.navigate(['/perfil']); 
        } else {
          this.errorMessage = 'Credenciales incorrectas'; 
        }
        this.loading = false; 
      }, 2000); 
    } else {
      this.errorMessage = 'Por favor, complete todos los campos correctamente.'; 
    }
  }
}
