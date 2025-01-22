import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  message: string = '';

  constructor(private authService: AuthService) {}

  onRegister() {
    const success = this.authService.register(this.username, this.password);
    this.message = success
      ? 'Registro exitoso!'
      : 'El usuario ya existe, prueba con otro nombre';
  }
}
