import { Component } from '@angular/core';
import { LoginService } from '../../core/services/login.service';
import { Login } from '../../models/login';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  login: Login = {
    email: '',
    senha: '',
    id: 0
  };

  constructor(private loginService: LoginService) { }

  logar() {
    this.loginService.login(this.login).subscribe({
      next: (res) => console.log('Login bem-sucedido', res),
      error: (err) => console.error('Erro no login', err)
    });
  }
}