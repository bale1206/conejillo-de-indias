import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  user: any = {
    email: '',
    password: ''
  };

  errorMessage: string = '';

  constructor() {}

  login() {
    console.log('User login data:', this.user);
  }

  resetPassword() {
    console.log('Reset password for:', this.user.email);
  }
}
