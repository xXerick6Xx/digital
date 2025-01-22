import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  message: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    const role = this.authService.login(this.username, this.password);
    if (role) {
      // Redirigir según el rol del usuario
      if (role === 'admin') {
        this.router.navigate(['/admin/dashboard']);
      } else if (role === 'waiter') {
        this.router.navigate(['/waiter/dashboard']);
      }
    } else {
      this.message = 'Credenciales incorrectas, intenta nuevamente';
    }
  }

  onRegister() {
    this.router.navigate(['/register']);
  }
}
