import { Component, OnInit } from '@angular/core';
import { APIControllerService } from '../services/controller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {
  users: any[] = [];

  constructor(private apiService: APIControllerService, private router: Router) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.apiService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  editUser(index: number) {
    const userId = this.users[index].id; // Asegúrate de que el ID esté disponible en tu objeto de usuario
    this.router.navigate(['/register'], { queryParams: { editId: userId } });
  }

  deleteUser(userId: string) {
    this.apiService.deleteUser(userId).subscribe(() => {
      this.loadUsers(); // Actualiza la lista de usuarios después de la eliminación
    });
  }
}
