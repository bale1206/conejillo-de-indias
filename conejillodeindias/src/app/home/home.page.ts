import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // Lógica del componente aquí
}
export class LoginPage {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const usuario = this.loginForm.value.usuario;
      const contrasena = this.loginForm.value.contrasena;
      console.log('username:', usuario, 'password:', contrasena);
    }
  }
}
