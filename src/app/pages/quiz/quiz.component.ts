import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { QuizService } from '../../core/services/quiz.service';
import { Question } from '../../models/question.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-quiz',
  imports: [[NgFor], [NgIf]],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})

export class QuizComponent implements OnInit {

  constructor(private quizService: QuizService, private router: Router, private route: ActivatedRoute) { }

  idSimulado: number = 0;
  currentIndex = 0;
  tempoRestante = 3600;
  questions: Question[] = [];
  respostasSelecionadas: { perguntaId: number, opcaoId: number }[] = [];
  selectOptionObrigatorio: boolean = true;

  ngOnInit(): void {
    this.idSimulado = this.route.snapshot.params["id"]
    console.log(this.idSimulado)
    this.loadQuestions(this.idSimulado);
    this.diminuirSegundo()
  }

  loadQuestions(id: number) {
    this.quizService.getQuestionsByExamId(id).subscribe({
      next: (data) => {
        console.log('Dados recebidos da API:', data);
        this.questions = data;
      },
      error: (err) => console.error('Erro ao carregar questões:', err)
    });
  }

  formatarTempo(segundos: number): string {
    const min = Math.floor(segundos / 60);
    const seg = segundos % 60;

    return `${min.toString().padStart(2, '0')}:${seg.toString().padStart(2, '0')}`;
  }

  diminuirSegundo() {
    setInterval(() => {
      this.tempoRestante--;
    }, 1000);
  }

  proxima() {
    if (this.opcaoSelecionadaAtual) {
      if (this.currentIndex < this.questions.length - 1) {
        this.currentIndex++;
      }
      console.log(this.selectOptionObrigatorio)
    }
    else {
      console.log(this.selectOptionObrigatorio)
      this.selectOptionObrigatorio = false;
    }
  }

  anterior() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
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

  finalizar() {
    if (this.opcaoSelecionadaAtual) {
      const resultadoDetalhado = this.questions.map(q => ({
        pergunta: q.texto,
        explicacao: q.explicacao ?? '',
        options: q.options.map(o => ({
          id: o.id,
          texto: o.texto,
          correta: o.correta,
          selecionada: this.respostasSelecionadas.some(r => r.perguntaId === q.id && r.opcaoId === o.id)
        }))
      }));

      // Salva no localStorage
      localStorage.setItem('resultadoDetalhado', JSON.stringify(resultadoDetalhado));

      // Navega para tela de resultado
      this.router.navigate(['/resultado']);
    }
    else{
      alert(`selecione pelo menos uma opcao`)
    }

  }
}