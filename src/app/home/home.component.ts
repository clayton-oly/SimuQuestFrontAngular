import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // caso queira links
import { SimuladoService } from '../core/services/simulado.service';
import { Simulado } from '../models/simulado.model';
import { QuizComponent } from "../quiz/quiz.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  simulados: Simulado[] = [];

  ngOnInit(): void {
    this.loadQuestions();
  }


  constructor(private simuladoService: SimuladoService, private router: Router) { }

  login() {
    console.log('Botão de login clicado');
  }

  iniciar(id:number) {
    console.log(id)
    this.router.navigate(['/simulado', id])
  }

  loadQuestions() {
    this.simuladoService.getSimulado().subscribe({
      next: (data) => {
        console.log('Dados recebidos da API:', data); // 🔹 aqui você vê no console
        this.simulados = data;
      },
      error: (err) => console.error('Erro ao carregar questões:', err)
    });
  }
}
