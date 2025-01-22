import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule], // Agregar módulos necesarios
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'], // Cambiar a styleUrls
})
export class UsersComponent {
  searchText: string = '';
  currentPage: number = 1;
  usersPerPage: number = 7;

  showForm: boolean = false;
  isEditing: boolean = false; // Nuevo: para distinguir entre nuevo y editar
  editingUserIndex: number | null = null; // Índice del usuario que se está editando

  newUser = {
    name: '',
    address: '',
    phone: '',
    email: '',
    password: '',
    role: '',
  };
  
    users = [
      { name: 'Juan Soto', email: 'example@gmail.com', phone: '09803485110', address: 'Av amazonas calle 13', role: 'Mesero' },
      { name: 'Susana Perez', email: 'example@gmail.com', phone: '09803485110', address: 'Av amazonas calle 13', role: 'Cocina' },
      { name: 'Pablo Peralta', email: 'example@gmail.com', phone: '09803485110', address: 'Av amazonas calle 13', role: 'Administrador' },
      { name: 'Ana Lucía', email: 'example@gmail.com', phone: '09803485110', address: 'Av amazonas calle 13', role: 'Administrador' },
      { name: 'Adriana Eras', email: 'example@gmail.com', phone: '09803485110', address: 'Av amazonas calle 13', role: 'Cocina' },
      { name: 'Matías Rosado', email: 'example@gmail.com', phone: '09803485110', address: 'Av amazonas calle 13', role: 'Mesero' },
      { name: 'Maycol Cruz', email: 'example@gmail.com', phone: '09803485110', address: 'Av amazonas calle 13', role: 'Cocina' },
      { name: 'Valentina Chaos', email: 'example@gmail.com', phone: '09803485110', address: 'Av amazonas calle 13', role: 'Mesero' },
      { name: 'Kelly Noa', email: 'example@gmail.com', phone: '09803485110', address: 'Av amazonas calle 13', role: 'Mesero' },
      { name: 'Daily Ron', email: 'example@gmail.com', phone: '09803485110', address: 'Av amazonas calle 13', role: 'Mesero' },
    ];
  
    filteredUsers() {
      const start = (this.currentPage - 1) * this.usersPerPage;
      const end = start + this.usersPerPage;
      return this.users
        .filter(user => user.name.toLowerCase().includes(this.searchText.toLowerCase()))
        .slice(start, end);
    }
  
    nextPage() {
      if ((this.currentPage * this.usersPerPage) < this.users.length) {
        this.currentPage++;
      }
    }
  
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    }
  
    addUser() {
      this.users.push({ ...this.newUser });
      this.closeForm();
    }
  
    closeForm() {
      this.showForm = false;
      this.newUser = { name: '', address: '', phone: '', email: '', password: '', role: '' };
    }
  }
