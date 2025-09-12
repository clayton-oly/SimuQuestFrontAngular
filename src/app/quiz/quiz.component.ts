import { Component, OnInit } from '@angular/core';
import { Question } from '../models/question.model';
import { QuizService } from '../core/services/quiz.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  imports: [[NgFor], [FormsModule], [NgIf]],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})

export class QuizComponent implements OnInit {
  questions: Question[] = [];

  // Método chamado ao clicar em uma opção
  selectOption(option: string) {
    console.log('Opção clicada:', option);
  }

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.loadQuestions();
    this.diminuirSegundo()
  }

  tempoRestante = 3600; // em segundos

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

  loadQuestions() {
    this.quizService.getQuestions().subscribe({
      next: (data) => {
        console.log('Dados recebidos da API:', data); // 🔹 aqui você vê no console
        this.questions = data;
      },
      error: (err) => console.error('Erro ao carregar questões:', err)
    });
  }

  currentIndex = 0;

  proxima() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
    }
  }

  anterior() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
