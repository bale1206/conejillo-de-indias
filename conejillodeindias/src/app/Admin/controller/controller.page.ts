import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-controller',
  templateUrl: './controller.page.html',
  styleUrls: ['./controller.page.scss'],
})
export class ControllerPage implements OnInit {

  userForm!: FormGroup; 
  users: User[] = []; 
  editingUser: User | null = null; 

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    
    this.users = [
      { id: 1, name: 'helen', email: 'he.mora@duocuc.cl', password: 'helen123' },
      { id: 2, name: 'bale', email: 'bale@duocuc.cl', password: 'bale123' }
    ];
  }

  
  onSubmit() {
    if (this.userForm.valid) {
      if (this.editingUser) {
        
        const index = this.users.findIndex(u => u.id === this.editingUser!.id);
        this.users[index] = {
          id: this.editingUser.id,
          ...this.userForm.value
        };
        this.editingUser = null; 
      } else {
        
        const newUser: User = {
          id: this.users.length + 1,
          name: this.userForm.value.name,
          email: this.userForm.value.email,
          password: this.userForm.value.password
        };
        this.users.push(newUser); 
      }
      this.userForm.reset(); 
    }
  }

  
  modificarUsuario(id: number) {
    const user = this.users.find(u => u.id === id);

    if (user) {
      
      this.userForm.patchValue({
        name: user.name,
        email: user.email,
        password: user.password
      });
      this.editingUser = user; 
    }
  }

  
  eliminarUsuario(id: number) {
    this.users = this.users.filter(user => user.id !== id);
  }
}
