import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultado',
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './resultado.component.html',
  styleUrl: './resultado.component.css'
})

export class ResultadoComponent implements OnInit {
  resultadoDetalhado: any[] = [];

  ngOnInit(): void {
    const salvo = localStorage.getItem('resultadoDetalhado');
    this.resultadoDetalhado = salvo ? JSON.parse(salvo) : [];

    // Limpa logo após carregar
    localStorage.removeItem('resultadoDetalhado');

    console.log('Resultado recebido:', this.resultadoDetalhado);
  }
}

