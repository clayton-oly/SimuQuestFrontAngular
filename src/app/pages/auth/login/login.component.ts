import { Component } from '@angular/core';
import { Login } from '../../../models/login';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login: Login = {
    email: '',
    senha: '',
  };

  constructor(private authService : AuthService) { }

  logar() {
    this.authService.login(this.login).subscribe({
      next: (res) => console.log('Login bem-sucedido', res),
      error: (err) => console.error('Erro no login', err)
    });
  }
}