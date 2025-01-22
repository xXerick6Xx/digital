import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'user', password: 'user123', role: 'waiter' },
  ];

  login(username: string, password: string): string | null {
    const user = this.users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      return user.role;  // Retorna el rol del usuario
    }
    return null;  // Retorna null si no hay coincidencias
  }

  register(username: string, password: string): boolean {
    const userExists = this.users.some((user) => user.username === username);
    if (!userExists) {
      this.users.push({ username, password, role: 'waiter' }); // Asigna un rol por defecto
      return true;
    }
    return false;
  }
}
