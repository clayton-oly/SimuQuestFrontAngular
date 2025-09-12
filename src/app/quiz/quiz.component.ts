import { Component, OnInit } from '@angular/core';
import { Question } from '../models/question.model';
import { QuizService } from '../core/services/quiz.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  imports: [[NgFor], [FormsModule]],
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
}