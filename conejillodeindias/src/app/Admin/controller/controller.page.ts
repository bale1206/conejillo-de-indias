import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
  apiUrl = 'http://localhost:3000/users'; 

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.loadUsers();
  }

  loadUsers() {
    this.http.get<User[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (err) => {
        console.error('Error al cargar usuarios:', err);
      }
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      if (this.editingUser) {
        this.http.put<User>(`${this.apiUrl}/${this.editingUser.id}`, { ...this.userForm.value, id: this.editingUser.id })
          .subscribe({
            next: (updatedUser) => {
              const index = this.users.findIndex(u => u.id === this.editingUser!.id);
              this.users[index] = updatedUser;
              this.editingUser = null;
            },
            error: (err) => {
              console.error('Error al actualizar usuario:', err);
            }
          });
      } else {

        this.http.post<User>(this.apiUrl, { ...this.userForm.value })
          .subscribe({
            next: (newUser) => {
              this.users.push(newUser);
            },
            error: (err) => {
              console.error('Error al crear usuario:', err);
            }
          });
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
    this.http.delete(`${this.apiUrl}/${id}`).subscribe({
      next: () => {
        this.users = this.users.filter(user => user.id !== id);
      },
      error: (err) => {
        console.error('Error al eliminar usuario:', err);
      }
    });
  }
}
