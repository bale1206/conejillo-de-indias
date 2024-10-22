import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIControllerService } from '../../services/controller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm!: FormGroup;
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder, 
    private apiService: APIControllerService, 
    private router: Router
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      address: ['', Validators.required],
      number: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      zipcode: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      region: ['', Validators.required],
      city: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confpassword: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confpassword = form.get('confpassword')?.value;
    return password === confpassword ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.registerForm.valid) {
      // Si el formulario es válido, envía los datos al servicio
      this.apiService.postUser(this.registerForm.value).subscribe(
        response => {
          console.log('Usuario registrado:', response);
          
          // Almacenar datos en localStorage (opcional)
          localStorage.setItem('user', JSON.stringify(this.registerForm.value));

          // Redirigir al home (o a la página de inicio de sesión)
          this.router.navigate(['/home']); // Cambia a la ruta que necesites
        },
        error => {
          console.error('Error al registrar usuario:', error);
          this.errorMessage = 'Hubo un problema al registrar el usuario. Inténtalo de nuevo.';
        }
      );
    } else {
      this.errorMessage = 'Por favor, complete todos los campos correctamente.';
    }
  }
}
