import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // caso queira links
import { Router } from '@angular/router';
import { SimuladoService } from '../../core/services/simulado.service';
import { SimulatedExam } from '../../models/simulado.model';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  simulados: SimulatedExam[] = [];

  ngOnInit(): void {
    this.loadExams();
  }


  constructor(private simuladoService: SimuladoService, private router: Router) { }

  login() {
    console.log('Botão de login clicado');
  }

  iniciar(id:number) {
    console.log(id)
    this.router.navigate(['/simulado', id])
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
