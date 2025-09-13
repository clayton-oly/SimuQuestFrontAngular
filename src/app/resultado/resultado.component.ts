import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestaoResultado } from '../models/resultado.mode';

@Component({
  selector: 'app-resultado',
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './resultado.component.html',
  styleUrl: './resultado.component.css'
})

export class ResultadoComponent implements OnInit {

  resultadoDetalhado: QuestaoResultado[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras?.state as { resultadoDetalhado: any[] };
    this.resultadoDetalhado = state?.resultadoDetalhado ?? [];
    console.log(history.state.resultadoDetalhado)
  }

  // Função para saber se a questão foi acertada
  isAcertou(q: QuestaoResultado): boolean {
    return q.options.some(o => o.selecionada && o.correta);
  }

}