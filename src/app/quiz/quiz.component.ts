import { Component, OnInit } from '@angular/core';
import { Question } from '../models/question.model';
import { QuizService } from '../core/services/quiz.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  imports: [[NgFor], [FormsModule], [NgIf]],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})

export class QuizComponent implements OnInit {

  constructor(private quizService: QuizService, private router: Router) { }

  currentIndex = 0;
  tempoRestante = 3600;
  questions: Question[] = [];
  respostasSelecionadas: { perguntaId: number, opcaoId: number }[] = [];

  ngOnInit(): void {
    this.loadQuestions();
    this.diminuirSegundo()
  }

  loadQuestions() {
    this.quizService.getQuestions().subscribe({
      next: (data) => {
        console.log('Dados recebidos da API:', data); // 🔹 aqui você vê no console
        this.questions = data;
      },
      error: (err) => console.error('Erro ao carregar questões:', err)
    });
  }

  marcarOpcao(perguntaId: number, opcaoId: number) {
    const existente = this.respostasSelecionadas.find(r => r.perguntaId === perguntaId);

    if (existente) {
      existente.opcaoId = opcaoId;
    } else {
      this.respostasSelecionadas.push({ perguntaId, opcaoId });
    }
  }

  get opcaoSelecionadaAtual() {
    const perguntaId = this.perguntaAtual.id;
    return this.respostasSelecionadas.find(r => r.perguntaId === perguntaId)?.opcaoId;
  }

  get perguntaAtual() {
    return this.questions[this.currentIndex];
  }

  formatarTempo(segundos: number): string {
    const min = Math.floor(segundos / 60);
    const seg = segundos % 60;
    // Adiciona zero à esquerda se for < 10
    return `${min.toString().padStart(2, '0')}:${seg.toString().padStart(2, '0')}`;
  }

  diminuirSegundo() {
    setInterval(() => {
      this.tempoRestante--;
    }, 1000);
  }

  proxima() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
    }

    this.respostasSelecionadas.forEach(element => {
      console.log(element);
    });
  }

  anterior() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }


  resultado: { pergunta: string, correta: boolean, explicacao: string, opcaoMarcada: string, opcaoCorreta: string }[] = [];
  acertos = 0;
  finalizado = false;


  finalizar() {
    const resultadoDetalhado = this.respostasSelecionadas.map(r => {
      const pergunta = this.questions.find(q => q.id === r.perguntaId);
      const opcaoCorreta = pergunta?.options.find(o => o.correta);

      return {
        pergunta: pergunta?.texto ?? '',
        correta: opcaoCorreta?.id === r.opcaoId,
        explicacao: pergunta?.explicacao ?? '',
        opcaoMarcada: pergunta?.options.find(o => o.id === r.opcaoId)?.texto ?? '',
        opcaoCorreta: opcaoCorreta?.texto ?? ''
      };
    });

    // Navega para a tela de resultado passando os dados via state
    this.router.navigate(['/resultado'], { state: { resultadoDetalhado } });
  }
}