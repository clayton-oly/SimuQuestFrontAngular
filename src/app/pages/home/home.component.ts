import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { SimuladoService } from '../../core/services/simulado.service';
import { SimulatedExam } from '../../models/simulado.model';
import { MatIconModule } from '@angular/material/icon'; // importa o módulo de ícones

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, MatIconModule], //adiciona MatIconModule aqui
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] // tem que ser "styleUrls" no plural
})
export class HomeComponent {
  simulados: SimulatedExam[] = [];

  constructor(private simuladoService: SimuladoService, private router: Router) {}

  ngOnInit(): void {
    this.loadExams();
  }

  login() {
    console.log('Botão de login clicado');
  }

  iniciar(id: number) {
    console.log(id);
    this.router.navigate(['/simulado', id]);
  }

  loadExams() {
    this.simuladoService.getSimulado().subscribe({
      next: (data) => {
        console.log('Dados recebidos da API:', data);
        this.simulados = data;
      },
      error: (err) => console.error('Erro ao carregar os simulados:', err)
    });
  }
}
