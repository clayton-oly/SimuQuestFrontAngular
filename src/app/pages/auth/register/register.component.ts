import { Component } from '@angular/core';
import { Login } from '../../../models/login';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  login: Login = {
    email: '',
    senha: '',
  };

  constructor(private authService: AuthService) { }

  register() {
    this.authService.register(this.login).subscribe({
      next: (res) => console.log('✅ Cadastro realizado com sucesso', res),
      error: (err) => console.error('❌ Erro no cadastro', err)
    });
  }
}